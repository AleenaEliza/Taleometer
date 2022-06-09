<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CategoryTrivia;
use App\Models\TriviaPost;
use Storage;
use App\Http\Requests\TrivaPostsRequest;
use App\Models\TriviaPostComment;
use App\Models\TriviaTag;
use App\Models\User;
use Session;
use DB;
use App\Rules\Name;
use Validator;

class TrivaPost_Controller extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $data['title']              =   'Trivia Post';
        $data['menuGroup']          =   'trivia';
        $data['menu']               =   'trivia-post'; 
        $data['category']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_active',1)->where('is_deleted',0)->where('category_name','!=','Daily')->get();
        $data['posts']              = TriviaPost::where('is_deleted',0)->orderBy('id', 'DESC')->get();
        return view('admin.trivia.post.list',$data);
    }

    public function posts($id='')
    {
        $data['title']              =   'Trivia Post';
        $data['titlehead']          =   'Add Trivia Post';
        $data['menuGroup']          =   'trivia';
        $data['menu']               =   'trivia-post'; 
        $data['category']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_active',1)->where('is_deleted',0)->where('category_name','!=','Daily')->get();
        if($id>0)
        {
        $data['posts']           = TriviaPost::where('id',$id)->first();
        }
        else
        {
        $data['posts']           = [];
        }
        return view('admin.trivia.post.list.add',$data);
    }

    public function save_posts(Request $request)
    {
            $question_thumb ="";
            if($request->question_type=='image')
            {
            $path = "trivia_category/".$request->category."/question_image";
            $imgname = "trivia_post_img".date('YmdHis').rand(100,999).".".$request->question_image->getClientOriginalExtension();
            $file =$request->file('question_image');
            Storage::disk('s3')->delete($path."/".$imgname);
            $file->storeAs($path,$imgname,'s3');
            $question_media = Storage::disk('s3')->url($path."/".$imgname);
           }
           else
           {
           // $question_media = 'storage/app/public/'.Storage::disk('public')->putFile('question_media', $request->file('question_video'));
            // $path = Storage::disk('s3')->put('posts/question_video', $request->question_video, 'public');
            // $question_media = Storage::disk('s3')->url($path);
            $path = "trivia_category/".$request->category."/question_video";
            $imgname = "trivia_post_vdo".date('YmdHis').rand(100,999).".".$request->question_video->getClientOriginalExtension();
            $file =$request->file('question_video');
            Storage::disk('s3')->delete($path."/".$imgname);
            $file->storeAs($path,$imgname,'s3');
            $question_media = Storage::disk('s3')->url($path."/".$imgname);
            
            if ($request->hasFile('thumbnail')) {
                $path_t = "trivia_category/".$request->category."/question_thumbnail";
            $imgname_t = "trivia_post_thumb".date('YmdHis').rand(100,999).".".$request->thumbnail->getClientOriginalExtension();
            $file_t =$request->file('thumbnail');
            Storage::disk('s3')->delete($path_t."/".$imgname_t);
            $file_t->storeAs($path_t,$imgname_t,'s3');
            $question_thumb = Storage::disk('s3')->url($path_t."/".$imgname_t);
            }
            
           }

           if($request->answer_type=='image')
            {
            //$answer_media = 'storage/app/public/'.Storage::disk('public')->putFile('answer_image', $request->file('answer_image'));
            // $paths = Storage::disk('s3')->put('posts/answer', $request->answer_image, 'public');
            // $answer_media = Storage::disk('s3')->url($paths);
            $path = "trivia_category/".$request->category."/answer_image";
            $imgname = "trivia_post_ans".date('YmdHis').rand(100,999).".".$request->answer_image->getClientOriginalExtension();
            $file =$request->file('answer_image');
            Storage::disk('s3')->delete($path."/".$imgname);
            $file->storeAs($path,$imgname,'s3');
            $answer_media = Storage::disk('s3')->url($path."/".$imgname);
            $answer_text='';
           }
           else if($request->answer_type=='text')
           {
            $answer_media = '';
            $answer_text=$request->answer_text;
           }
           else
           {
            $answer_text=$answer_media='';
           }

           $tag_name = TriviaTag::where('is_deleted',0)->where('tag',$request->tag)->first();
           if($tag_name)
           {
               $tag_name_id = TriviaTag::where('is_deleted',0)->where('tag',$request->tag)->first()->id;
           }
           else
           {
               $tag_name_id = TriviaTag::create(['tag'=>$request->tag,'is_active'=>1,'is_deleted'=>0])->id;
           }

            $insert = ['category'=>$request->category,
                       'tag'=>$tag_name_id,
                       'question'=>$request->question,
                       'question_type'=>$request->question_type,
                       'question_media'=>$question_media,
                       'thumbnail'=>$question_thumb,
                       'answer_type'=>$request->answer_type,
                       'answer_text'=>$answer_text,
                       'answer_image'=>$answer_media,
                       'schedule'=>$request->schedule,
                       'is_active'=>$request->status,
                       'is_deleted'=>0];

            $create   = TriviaPost::create($insert)->id;  
            
            if($request->schedule){}
            else{
            //NOTIFICATIONs
            $deviceTokens = User::where('is_deleted',0)->where('push_notify',1)->where('is_login',1)->whereNotNull('deviceToken')->pluck('deviceToken')->toArray();
            $deviceTokens = array_chunk($deviceTokens, 100);

            foreach($deviceTokens as $tokens)
            {
                $payload = array(
                    "registration_ids" => $tokens,
                    "notification" => array(
                        "title" => "It’s tale’o’time. The break you deserve.",
                        "body" => "",
                        "post_id" => $create,
                        "category_id" => $request->category
                    ),"data"=>array("title" => "It’s tale’o’time. The break you deserve.",
                        "body" => "",
                        "post_id" => $create,
                        "category_id" => $request->category)
                );

        $payload["notification"]["icon"] = 'https://live-taleometer.s3.ap-south-1.amazonaws.com/user/6Lrcm3tIIz4t5nZ1khlE6FJtITdPU8l5wMQ9cJW7.png';

                 //return json_encode($payload);
                $firebasekey = \Config::get('services.firebase.key');
                $curl = curl_init();

                curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://fcm.googleapis.com/fcm/send',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode($payload),
                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/json',
                    'Authorization: key='.$firebasekey
                ),
                ));

                $response = curl_exec($curl);

                curl_close($curl);

                //return $response;die;
            } 
        }
            Session::flash('message', ['text'=>'Created successfully','type'=>'success']);
            return redirect(route('trivia.posts'));      
        
    }

    public function updateStatus(Request $request)
    {
        $post                       =   (object)$request->post();  //echo '<pre>'; print_r($post); echo '</pre>'; die;
       
        $result                 =   TriviaPost::where('id',$post->id)->update([$post->req => $post->value]);
        
        $data['posts']              = TriviaPost::orderBy('id','DESC')->where('is_deleted',0)->get();
        return view('admin.trivia.post.list.content',$data); 
    }

    public function edit_posts($id)
    {
        $data['title']              =   'Trivia Post';
        $data['titlehead']          =   'Add Trivia Post';
        $data['menuGroup']          =   'trivia';
        $data['menu']               =   'trivia-post'; 
        $data['category']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_active',1)->where('is_deleted',0)->where('category_name','!=','Daily')->get();

        if($id>0)
        {
        $data['posts']           = TriviaPost::where('id',$id)->first();
        }
        else
        {
        $data['posts']           = [];
        }
        return view('admin.trivia.post.list.edit',$data);
    }

    public function validatePosts(Request $request)
    {
        
        $post                   =   $request->post();
        $error=[];
        $postss                   =   (object)$request->post();

        if($postss->id>0)
        {
        
            $rules          =   ['question' => 'required|string|max:255',
            'tag'=>'required',
            'category'=> 'required',
            'question_type'=> 'required',
            'answer_type'=> 'required',
            'answer_text'=>'required_if:answer_type,==,text|max:255',
            'status'=> 'required',
            'schedule'=>'nullable|after_or_equal:'.date('Y-m-d H:i')];
            
        
        $validator              =   Validator::make($post,$rules);
        if ($validator->fails()) {
           foreach($validator->messages()->getMessages() as $k=>$row){ $error[$k] = $row[0]; }
        } 
        else
        {

        
        

       
       //return $postss;die;
        
        $posts_db = TriviaPost::where('id',$postss->id)->first();
        if($postss->question_type=='image' && !isset($postss->question_image_hide) && !isset($postss->hidden_q_img))
        {
            $error['question_image']    =   'This field is required';
            
        }
        elseif ($postss->question_type=='video' && !isset($postss->question_video_hide) && !isset($postss->hidden_q_vdo)) {
            $error['question_video']    =   'This field is required';
            
        }
        // elseif ($postss->question_type=='video' && !isset($postss->question_thumb_hide) && !isset($postss->hidden_q_thumb)) {
        //  $error['thumbnail']         =   'This field is required';
        // }
        elseif ($postss->answer_type=='image' && !isset($posts_db->answer_image)  && !isset($postss->hidden_a_img)) {
            $error['answer_image']    =   'This field is required';
           
        }
    }
  }
  else
  {
    $rules          =  ['question' => 'required|string|max:255',
            'tag'=>'required',
            'category'=> 'required',
            'question_type'=> 'required',
            'answer_type'=> 'required',
            'answer_text'=>'required_if:answer_type,==,text|max:255',
            'schedule'=>'nullable|after_or_equal:'.date('Y-m-d H:i'),
            'status'=> 'required'
        ];

        $validator              =   Validator::make($post,$rules);
        if ($validator->fails()) {
           foreach($validator->messages()->getMessages() as $k=>$row){ $error[$k] = $row[0]; }
        }
        elseif($postss->question_type=='image' && !isset($postss->hidden_q_img))
        {
            $error['question_image']    =   'This field is required';
        }
        elseif($postss->question_type=='video' && !isset($postss->hidden_q_vdo))
        {
            $error['question_video']    =   'This field is required';
        }
        // elseif ($postss->question_type=='video' && !isset($postss->hidden_q_thumb)) {
        //  $error['thumbnail']         =   'This field is required';
        // }
        elseif($postss->answer_type=='image' && !isset($postss->hidden_a_img))
        {
            $error['answer_image']    =   'This field is required';
        }  
  }

        if($error) { return $error; }else{ return 'success'; } //return 'success';die; 

    }
    public function update_posts(Request $request)
    {
        
            $insert = TriviaPost::find($request->id);
            $insert ->id=$request->id;
            $insert ->category=$request->category;
            $insert ->question=$request->question;
            $insert ->question_type=$request->question_type;
            $insert ->answer_type=$request->answer_type;
            $insert ->answer_text=$request->answer_text;
            $insert ->is_active=$request->status;

            $tag_name = TriviaTag::where('is_deleted',0)->where('tag',$request->tag)->first();
           if($tag_name)
           {
               $tag_name_id = TriviaTag::where('is_deleted',0)->where('tag',$request->tag)->first()->id;
           }
           else
           {
               $tag_name_id = TriviaTag::create(['tag'=>$request->tag,'is_active'=>1,'is_deleted'=>0])->id;
           }
             $insert ->tag=$tag_name_id;
             $insert ->schedule=$request->schedule;
            

            if ($request->hasFile('question_image')) {
              //  $insert->question_media = 'storage/app/public/'.Storage::disk('public')->putFile('question_media', $request->file('question_image'));
            //   $path = Storage::disk('s3')->put('posts/question_image', $request->question_image, 'public');
            //$insert->question_media = Storage::disk('s3')->url($path);
            $path = "trivia_category/".$request->category."/question_image";
            $imgname = "trivia_post_img".date('YmdHis').rand(100,999).".".$request->question_image->getClientOriginalExtension();
            $file =$request->file('question_image');
            Storage::disk('s3')->delete($path."/".$imgname);
            $file->storeAs($path,$imgname,'s3');
            $insert->question_media = Storage::disk('s3')->url($path."/".$imgname);
              
            }

            if ($request->hasFile('question_video')) {
                //$insert->question_media = 'storage/app/public/'.Storage::disk('public')->putFile('question_media', $request->file('question_video'));
                // $path = Storage::disk('s3')->put('posts/question_video', $request->question_video, 'public');
                // $insert->question_media = Storage::disk('s3')->url($path);
                
            $path = "trivia_category/".$request->category."/question_video";
            $imgname = "trivia_post_vdo".date('YmdHis').rand(100,999).".".$request->question_video->getClientOriginalExtension();
            $file =$request->file('question_video');
            Storage::disk('s3')->delete($path."/".$imgname);
            $file->storeAs($path,$imgname,'s3');
            $insert->question_media = Storage::disk('s3')->url($path."/".$imgname);
            }
            
            if ($request->hasFile('thumbnail')) {
            $path_t = "trivia_category/".$request->category."/question_thumbnail";
            $imgname_t = "trivia_post_thumb".date('YmdHis').rand(100,999).".".$request->thumbnail->getClientOriginalExtension();
            $file_t =$request->file('thumbnail');
            Storage::disk('s3')->delete($path_t."/".$imgname_t);
            $file_t->storeAs($path_t,$imgname_t,'s3');
            $insert->thumbnail = Storage::disk('s3')->url($path_t."/".$imgname_t);
            }
            
            if ($request->hasFile('answer_image')) {
                //$insert->answer_image = 'storage/app/public/'.Storage::disk('public')->putFile('answer_image', $request->file('answer_image'));
                // $paths = Storage::disk('s3')->put('posts/answer', $request->answer_image, 'public');
                // $insert->answer_image = Storage::disk('s3')->url($paths);
                
            $path = "trivia_category/".$request->category."/answer_image";
            $imgname = "trivia_post_vdo".date('YmdHis').rand(100,999).".".$request->answer_image->getClientOriginalExtension();
            $file =$request->file('answer_image');
            Storage::disk('s3')->delete($path."/".$imgname);
            $file->storeAs($path,$imgname,'s3');
            $insert->answer_image = Storage::disk('s3')->url($path."/".$imgname);
            
                $insert->answer_text = '';
            }

            $insert->save();  
            Session::flash('message', ['text'=>'Post updated successfully','type'=>'success']);
            return redirect(route('trivia.posts')); 
        
    }
    
    public function posts_comment($id='')
    {
        $data['title']              =   'Trivia Post';
        $data['titlehead']          =   'View Trivia Post';
        $data['menuGroup']          =   'trivia';
        $data['menu']               =   'trivia-post'; 
       // $data['category']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_active',1)->where('is_deleted',0)->get();
       
        $data['posts']           = TriviaPost::where('id',$id)->first();
        $data['comment_count']   = TriviaPostComment::where('post_id',$data['posts']->id)->where('is_active',1)->where('is_deleted',0)->count();
        $data['postcomments']   = TriviaPostComment::where('post_id',$data['posts']->id)->where('is_active',1)->where('is_deleted',0)->whereNull('comment_id')->orderBy('id','DESC')->get();
        
        return view('admin.trivia.post.comment.comment_list',$data);
    }

    public function addcomment(Request $request)
    {
        $data['title']              =   'Trivia Post';
        $data['titlehead']          =   'View Trivia Post';
        $data['menuGroup']          =   'trivia';
        $data['menu']               =   'trivia-post'; 
       // // $data['category']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_active',1)->where('is_deleted',0)->get();

        $post                   =   (object)$request->post();
      
        $insert['comment']   = $post->comment;
        $insert['post_id']   = $post->id;
        $insert['user_id']   = auth()->user()->id;
        $insert['is_answer'] = 0;
        $insert['user_type'] = 'admin';
        $insert['is_active'] =     1;
        $insert['is_deleted']=     0;
        $insert['created_at']=     date('Y-m-d H:i:s');
        $insert['updated_at']=     date('Y-m-d H:i:s');
        if(isset($post->comt_id))
        {
            $insert['comment_id']=$post->comt_id;

            //$comment_log = TriviaPostComment::create($insert)->id;

            $check_parent = TriviaPostComment::where('id',$post->comt_id)->first();
            if($check_parent->parent_id!=0)
            {
                $insert['parent_id']=$check_parent->parent_id;
            }
            else
            {
                $insert['parent_id']=$check_parent->id;
            }

            $row = TriviaPost::where('id', $post->id)->first();
            $comment_user = TriviaPostComment::where('id',$post->comt_id)->first()->user_id;
             if($comment_user!=auth()->user()->id){
             //NOTIFICATIONs
            $deviceTokens = User::where(['id' => $comment_user, 'push_notify' => 1,'is_deleted' => 0,'is_login'=>1])->whereNotNull('deviceToken')->pluck('deviceToken')->toArray();
            $deviceTokens = array_chunk($deviceTokens, 100);

            foreach($deviceTokens as $tokens)
            {
               
                $msg = "Admin commented on your post";
                $payload = array(
                    "registration_ids" => $tokens,
                    "notification" => array(
                        "title" => $msg,
                        "body" => "",
                        "post_id" => $row->id,
                        "category_id" => $row->category,
                        "comment_id"=>$post->comt_id
                    ),"data"=>array("title" => $msg,
                        "body" => "",
                        "post_id" => $row->id,
                        "category_id" => $row->category,
                        "comment_id"=>$post->comt_id)
                );

                // if ($request->hasFile('image'))
                //     $payload["notification"]["icon"] = $audio_story->image;

                // return json_encode($payload);
                
                $firebasekey = \Config::get('services.firebase.key');
                $curl = curl_init();

                curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://fcm.googleapis.com/fcm/send',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode($payload),
                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/json',
                    'Authorization: key='.$firebasekey
                ),
                ));

                $response = curl_exec($curl);
                
                curl_close($curl);

            }
             }//Not same user

        }
            $comment_log = TriviaPostComment::create($insert);//return $response;
        
        
        $data['posts']           = TriviaPost::where('id',$post->id)->first();
        $data['comment_count']   = TriviaPostComment::where('post_id',$data['posts']->id)->where('is_active',1)->where('is_deleted',0)->count();
        $data['postcomments']   = TriviaPostComment::where('post_id',$data['posts']->id)->where('is_active',1)->where('is_deleted',0)->whereNull('comment_id')->orderBy('id','DESC')->get();
        
        return view('admin.trivia.post.comment.comment_page',$data);
    }

     public function view_tag(Request $request)
    {
         $post                   =   (object)$request->post();
         $tags                   =   TriviaTag::where('is_deleted',0)->where('is_active',1)->get();
         $html                   =   '';
         $post_id = $post->post_id;
         if($post_id > 0)
         {   
             foreach($tags as $row)
             {
                 if($row->id == $post_id)
                 {
                    // $html.='<option value="'.$row->id.'" selected>'.$row->tag.'</option>';
                 }
                else{ 
                   // $html.='<option value="'.$row->id.'">'.$row->tag.'</option>';
                    $html.='<option value="'.$row->tag.'">';
                    
                }
             }
         }
         else
         {
             foreach($tags as $row)
             {
                // $html.='<option value="'.$row->id.'">'.$row->tag.'</option>';
                 $html.='<option value="'.$row->tag.'">';
             }
         }
         return $html;
    }

    public function view_question(Request $request)
    {
         $post                   =   (object)$request->post();
         $question               =   TriviaPost::where('is_deleted',0)->where('category',$post->category)->groupBy('question')->get();
         $html                   =   '<option value=""></option>';
         if($post->category > 0)
         {   
             foreach($question as $row)
             {
                  $html.='<option value="'.$row->question.'">'.$row->question.'</option>';
             }
         }
         
         return $html;
    }
    
    public function validate_tag(Request $request)
    {
        $post                   =   $request->post();
        $error=[];
        $postss                   =   (object)$request->post();
       // return $post;die;
        $rules          =   ['tag_name' => 'required|string|max:255'];
            
        
        $validator              =   Validator::make($post,$rules);
        if ($validator->fails()) {
           foreach($validator->messages()->getMessages() as $k=>$row){ $error[$k] = $row[0]; }
        } 
        else
        {
            $tagss = TriviaTag::where('is_deleted',0)->where('tag',$postss->tag_name)->first();
            if($tagss){
            $error['tag_name']    =   'Tag name alerady exist';
            }
        }
        
        if($error) { return $error; }else{ return 'success'; } //return 'success';die; 
    }
    
    public function create_tag(Request $request)
    {$post                   =   (object)$request->post();
     $create = TriviaTag::create(['tag'=>$post->tag_name,'is_active'=>1,'is_deleted'=>0])->id;
     return $create;
    }
}
