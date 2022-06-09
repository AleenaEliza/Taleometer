<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\CategoryTrivia;
use App\Models\TriviaPost;
use App\Models\TriviaPostLog;
use App\Models\TriviaPostComment;
use Validator;

class TriviaPostControl extends Controller
{
    public function daily(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
        {
            return response()->json(["status" => false, "message" => "Unauthorized."]);
        }

        $data=$today=$comment=[];

        //$today_quiz = TriviaPost::whereDate('created_at', date('Y-m-d'))->where('is_deleted',0)->where('is_active',1)->orderBy('id','DESC')->paginate(10);
        $today_quiz = TriviaPost::where('is_deleted',0)->where('is_active',1)->whereIn('category',function($query){$query->select('id')->from('category_trivia')->where('is_active',1)->where('is_deleted',0);})->where(function ($query) {
        $query->where('schedule', '<', date('Y-m-d H:i:s'))
            ->orWhereNull('schedule');
    })->orderBy('created_at','DESC')->paginate(10);
        foreach($today_quiz as $row)
        {
            if($row->tag)
            {
                $tag = $row->tag_name->tag;
            }
            else
            {
                $tag = '';
            }
            $list['post_id']       = $row->id;
            $list['category_id']   = $row->category;
            $list['category_name'] = $row->categories->category_name;
            $list['question']      = $tag.' '.$row->question;
            $list['question_type'] = $row->question_type;
             if($row->question_type=="video")
            {
                if($row->thumbnail)
                {
                $list['thumbnail']= $row->thumbnail;
                }
                else
                {
                 $list['thumbnail']= false;
                }
            }
            else
            {
                 $list['thumbnail']= false;
            }
            $list['question_media']= url($row->question_media);
            $list['question_media_path']= $row->question_media;
            $list['date']          = date('d F', strtotime($row->created_at));
            $list['user_opened']   = $row->user_attend($row->id,$user->id);
            if($list['user_opened']==true)
            {
                $list['user_opened_status']=1;
            }
            else
            {
                $list['user_opened_status']=0;
            }
            $list['user_answered']   = $row->user_answered_post($row->id,$user->id);
            if($list['user_answered']==1)
            {
                $list['user_answer_status']=1;
                $list['comments']=$row->posts_comments($row->id,$user);
            }
            else
            {
                $list['user_answer_status']=0;
                $list['comments']=[];
            }

            $today[]  = $list;

        }

        $data = $today;
        
        
    //     $updatepost_views = TriviaPost::where('is_deleted',0)->where('is_active',1)->whereIn('category',function($query){$query->select('id')->from('category_trivia')->where('is_active',1)->where('is_deleted',0);})->where(function ($query) {
    //     $query->where('schedule', '<', date('Y-m-d H:i:s'))
    //         ->orWhereNull('schedule');
    // })->orderBy('created_at','DESC')->pluck('id');
    //    // return $updatepost_views;die;
    //     if(!empty($updatepost_views))
    //     {
           
    //         foreach($updatepost_views as $id)
    //         {
    //             // return $id;die;
    //             $viwed = TriviaPostLog::where('post_id',$id)->where('user_id',$user->id)->first();
    //             if($viwed)
    //             {
    //                //  return 'view';die;
    //             }
    //             else
    //             {
    //                // return $id;die;
    //             $log['post_id']   = $id;
    //             $log['user_id']   = $user->id;
    //             $log['is_active'] = 1;
    //             $log['is_deleted']= 0;
    //             $log['created_at']= date('Y-m-d H:i:s');
    //             $log['updated_at']= date('Y-m-d H:i:s');

    //             $updatelog = TriviaPostLog::create($log);
    //             }
    //         }
    //     }
        
        $users = User::where('id',$user->id)->first();
         $usr_img=[];
         if($users->avatar)
         {
             $usr_img['profile_image']=$users->avatar;
             $usr_img['profile_image_path']=$users->avatar;
         }
         else
         {
             $usr_img['profile_image']=url('storage/app/public/taleologo.png');
             $usr_img['profile_image_path']='storage/app/public/taleologo.png';
          }

        return response()->json(["status" => true, "message" => "Trivia Daily Post.", "data" => $data,"user_img"=>$usr_img]);
    }

    public function category_post(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
        {
            return response()->json(["status" => false, "message" => "Unauthorized."]);
        }

        $rules   =   ['category' =>  'required|numeric'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
           return response()->json(["status" => false, "message" => $validator->errors()]);
        }
        else
        {    
        $data=$today=[];
        
       
        $today_quiz = TriviaPost::where('category', $request->category)->where('is_active',1)->where('is_deleted',0)->where(function ($query) {
        $query->where('schedule', '<', date('Y-m-d H:i:s'))
            ->orWhereNull('schedule');
    })->orderBy('created_at','DESC')->paginate(10);
        foreach($today_quiz as $row)
        {
            if($row->tag)
            {
                $tag = $row->tag_name->tag;
            }
            else
            {
                $tag = '';
            }
            $list['post_id']       = $row->id;
            $list['category_id']   = $row->category;
            $list['category_name'] = $row->categories->category_name;
            $list['question']      = $tag.' '.$row->question;
            $list['question_type'] = $row->question_type;
             if($row->question_type=="video")
            {
                if($row->thumbnail)
                {
                $list['thumbnail']= $row->thumbnail;
                }
                else
                {
                 $list['thumbnail']= false;
                }
            }
            else
            {
                 $list['thumbnail']= false;
            }
            $list['question_media']= url($row->question_media);
            $list['question_media_path']=$row->question_media;
            $list['date']          = date('d F', strtotime($row->created_at));
            $list['user_opened']   = $row->user_attend($row->id,$user->id);
            if($list['user_opened']==true)
            {
                $list['user_opened_status']=1;
            }
            else
            {
                $list['user_opened_status']=0;
            }
            $list['user_answered']   = $row->user_answered_post($row->id,$user->id);
            if($list['user_answered']==1)
            {
                $list['user_answer_status']=1;
                $list['comments']=$row->posts_comments($row->id,$user);
            }
            else
            {
                $list['user_answer_status']=0;
                $list['comments']=[];
            }
            

            $today[]  = $list;

        }

        $data = $today;
        
    //      $updatepost_views = TriviaPost::where('category', $request->category)->where('is_active',1)->where('is_deleted',0)->orderBy('created_at','DESC')->where(function ($query) {
    //     $query->where('schedule', '<', date('Y-m-d H:i:s'))
    //         ->orWhereNull('schedule');
    // })->pluck('id');
    //    // return $updatepost_views;die;
    //     if(!empty($updatepost_views))
    //     {
           
    //         foreach($updatepost_views as $id)
    //         {
    //             // return $id;die;
    //             $viwed = TriviaPostLog::where('post_id',$id)->where('user_id',$user->id)->first();
    //             if($viwed)
    //             {
    //                //  return 'view';die;
    //             }
    //             else
    //             {
    //                // return $id;die;
    //             $log['post_id']   = $id;
    //             $log['user_id']   = $user->id;
    //             $log['is_active'] = 1;
    //             $log['is_deleted']= 0;
    //             $log['created_at']= date('Y-m-d H:i:s');
    //             $log['updated_at']= date('Y-m-d H:i:s');

    //             $updatelog = TriviaPostLog::create($log);
    //             }
    //         }
    //     }
        
         $users = User::where('id',$user->id)->first();
         $usr_img=[];
         if($users->avatar)
         {
             $usr_img['profile_image']=$users->avatar;
             $usr_img['profile_image_path']=$users->avatar;
         }
         else
         {
             $usr_img['profile_image']=url('storage/app/public/taleologo.png');
             $usr_img['profile_image_path']='storage/app/public/taleologo.png';
          }

        return response()->json(["status" => true, "message" => "Trivia Category Post.", "data" => $data,"user_img"=>$usr_img]);
      }
    }

    public function trivia_post(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
        {
            return response()->json(["status" => false, "message" => "Unauthorized."]);
        }

        $rules   =   ['post_id' =>  'required|numeric'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
           return response()->json(["status" => false, "message" => $validator->errors()]);
        }
        else
        {    
        $data=$list=[];

        $row = TriviaPost::where('id', $request->post_id)->where('is_active',1)->where('is_deleted',0)->first();
        if($row)
        {
            if($row->tag)
            {
                $tag = $row->tag_name->tag;
            }
            else
            {
                $tag = '';
            }

            $list['post_id']       = $row->id;
            $list['category_id']   = $row->category;
            $list['category_name'] = $row->categories->category_name;
            $list['question']      = $tag.' '.$row->question;
            $list['question_type'] = $row->question_type;
             if($row->question_type=="video")
            {
                if($row->thumbnail)
                {
                $list['thumbnail']= $row->thumbnail;
                }
                else
                {
                 $list['thumbnail']= false;
                }
            }
            else
            {
                 $list['thumbnail']= false;
            }
            $list['question_media']= url($row->question_media);
            $list['question_media_path']= $row->question_media;
            $list['date']          = date('d F', strtotime($row->created_at));
            $list['user_opened']   = $row->user_attend($row->id,$user->id);
            if($list['user_opened']==false)
            {
                //$list['user_opened_status']=1;
                $log['post_id']   = $row->id;
                $log['user_id']   = $user->id;
                $log['is_active'] = 1;
                $log['is_deleted']= 0;
                $log['created_at']= date('Y-m-d H:i:s');
                $log['updated_at']= date('Y-m-d H:i:s');

                $updatelog = TriviaPostLog::create($log);
            }
            
            $list['user_answered']   = $row->user_answered($row->id,$user->id);
            if($list['user_answered']==true)
            {
                $list['user_answer_status']=1;
            }
            else
            {
                $list['user_answer_status']=0;
            }

            

        }
        else
        {
            $list=(object)[];
        }

        $data = $list;

        return response()->json(["status" => true, "message" => "Trivia Post Detail.", "data" => $data]);
      }
    }

    public function submit_answer(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
        {
            return response()->json(["status" => false, "message" => "Unauthorized."]);
        }

        $rules   =   ['post_id' =>  'required|numeric','answer'=>'required|max:255'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
           return response()->json(["status" => false, "message" => $validator->errors()]);
        }
        else
        {    
        $data=$list=$comments=[];

        $row = TriviaPost::where('id', $request->post_id)->where('is_active',1)->where('is_deleted',0)->first();
        if($row)
        {
            $opened   = $row->user_attend($row->id,$user->id);
            if($opened==false)
            {
                //$list['user_opened_status']=1;
                $log['post_id']   = $row->id;
                $log['user_id']   = $user->id;
                $log['is_active'] = 1;
                $log['is_deleted']= 0;
                $log['created_at']= date('Y-m-d H:i:s');
                $log['updated_at']= date('Y-m-d H:i:s');

                $updatelog = TriviaPostLog::create($log);
            }
            if($row->user_answered($row->id,$user->id)==false)
            {
            $log['is_answered']=1;
                $updatelog = TriviaPostLog::where('post_id',$row->id)->where('user_id',$user->id)->update($log);

            $comment['post_id']   =     $row->id;
            $comment['user_id']   =     $user->id;
            $comment['comment']   =     $request->answer;
            $comment['is_answer'] =     1;
            $comment['user_type'] =     'customer';
            $comment['is_active'] =     1;
            $comment['is_deleted']=     0;
            $comment['created_at']=     date('Y-m-d H:i:s');
            $comment['updated_at']=     date('Y-m-d H:i:s');
            $comment_log = TriviaPostComment::create($comment);
            
             $comments=$row->posts_comments($row->id,$user);

            // $list['post_id']       = $row->id;
            // $list['category_id']   = $row->category;
            // $list['answer_type']   = $row->question_type;
            // $list['answer_image']  = url($row->answer_image);
            // $list['answer_text']  =  $row->answer_text;
           // $list['user_opened']   = $row->user_attend($row->id,$user->id);
          
                
                
          //$data = $list;

        return response()->json(["status" => true, "message" => "Answer Submitted.","comment"=>$comments]); 
        }
        else
        {
          return response()->json(["status" => false, "message" =>'Already answered']);  
        } 

        }
        else
        {
            return response()->json(["status" => false, "message" =>'Invalid Post id']);
        }

        
      }
    }

    public function add_comment(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
        {
            return response()->json(["status" => false, "message" => "Unauthorized."]);
        }

        $rules   =   ['post_id' =>  'required|numeric','comment'=>'required','comment_id'=>'nullable'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
           return response()->json(["status" => false, "message" => $validator->errors()]);
        }
        else
        {    
        $data=$list=$comments=[];

        $row = TriviaPost::where('id', $request->post_id)->where('is_active',1)->where('is_deleted',0)->first();
        if($row)
        {
            if($row->user_answered_post($row->id,$user->id)==1)
            {
            $comment['post_id']   =     $row->id;
            $comment['user_id']   =     $user->id;
            $comment['comment']   =     $request->comment;
            $comment['is_answer'] =     0;
            $comment['user_type'] =     'customer';
            $comment['is_active'] =     1;
            $comment['is_deleted']=     0;
            $comment['created_at']=     date('Y-m-d H:i:s');
            $comment['updated_at']=     date('Y-m-d H:i:s');
            if($request->comment_id)
            {
             $comment['comment_id'] = $request->comment_id; 
             

             $check_parent = TriviaPostComment::where('id',$request->comment_id)->first();
            if($check_parent->parent_id!=0)
            {
                $comment['parent_id']=$check_parent->parent_id;
            }
            else
            {
                $comment['parent_id']=$check_parent->id;
            }

             $comment_user = TriviaPostComment::where('id',$request->comment_id)->first()->user_id;
             if($comment_user!=$user->id){
             //NOTIFICATIONs
            $deviceTokens = User::where(['id' => $comment_user, 'push_notify' => 1,'is_deleted' => 0,'is_login'=>1])->whereNotNull('deviceToken')->pluck('deviceToken')->toArray();
            $deviceTokens = array_chunk($deviceTokens, 100);

            foreach($deviceTokens as $tokens)
            {
                if($user->fname)
                {
                    $u_name =$user->fname;
                }
                else
                {
                    $u_name ='Someone';
                }
                $msg = $u_name." commented on your post";
                $payload = array(
                    "registration_ids" => $tokens,
                    "notification" => array(
                        "title" => $msg,
                        "body" => "",
                        "post_id" => $row->id,
                        "category_id" => $row->category,
                        "comment_id"=>$request->comment_id
                    ),"data"=>array("title" => $msg,
                        "body" => "",
                        "post_id" => $row->id,
                        "category_id" => $row->category,
                        "comment_id"=>$request->comment_id)
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
                //return $response;die;
                curl_close($curl);
            }
             }//Not same user

            }
                $comment_log = TriviaPostComment::create($comment);
                $comments=$row->posts_comments($request->post_id,$user);
            

        return response()->json(["status" => true, "message" => "Comment Submitted.","comment"=>$comments]); 
        }
        else
        {
          return response()->json(["status" => false, "message" =>'Not answered']);  
        } 

        }
        else
        {
            return response()->json(["status" => false, "message" =>'Invalid Post id']);
        }

        
      }
    }

    public function view_answer(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
        {
            return response()->json(["status" => false, "message" => "Unauthorized."]);
        }

        $rules   =   ['post_id' =>  'required|numeric'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
           return response()->json(["status" => false, "message" => $validator->errors()]);
        }
        else
        {    
        $data=$list=[];

        $row = TriviaPost::where('id', $request->post_id)->where('is_active',1)->where('is_deleted',0)->first();
        if($row)
        {
            if($row->user_answered_post($row->id,$user->id)==1)
            {


            $list['post_id']       = $row->id;
            $list['category_id']   = $row->category;
            $list['answer_type']   = $row->answer_type;
            if($row->answer_type=='image')
            {
            $list['answer_image']  = url($row->answer_image);
            $list['answer_image_path']  = $row->answer_image;
            $list['answer_text']  =  '';
            }
            else
            {
             $list['answer_image']  = '';
             $list['answer_image_path']  ='';
            $list['answer_text']    =  $row->answer_text;   
            }
            $list['user_opened']   = $row->user_attend($row->id,$user->id);
          
                
                
          $data = $list;

        return response()->json(["status" => true, "message" => "Post Answer View.",'data'=>[$list]]); 
        }
        else
        {
          return response()->json(["status" => false, "message" =>'Not answered yet']);  
        } 

        }
        else
        {
            return response()->json(["status" => false, "message" =>'Invalid Post id']);
        }

        
      }
    }

    public function view_comment(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
        {
            return response()->json(["status" => false, "message" => "Unauthorized."]);
        }
        
        $rules   =   ['post_id' =>  'required|numeric'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
           return response()->json(["status" => false, "message" => $validator->errors()]);
        }
        else
        {    
        $data=$list1=[];

        $comments = TriviaPostComment::where('post_id',$request->post_id)->whereNull('comment_id')->where('is_active',1)->where('is_deleted',0)->orderBy('id','DESC')->get();
        if(!empty($comments))
        {
            foreach($comments as $row){
            $list['comment_id']    = $row->id;
            $list['post_id']       = $row->post_id;
            if($row->user_type=='admin')
            {
                $list['you']       = 0;
                $list['user_name'] = 'Admin';
                if($row->users->avatar){
                $list['profile_image']=$row->users->avatar;
                $list['profile_image_path']=$row->users->avatar;
                }
                else
                {
                    $list['profile_image']=url('storage/app/public/taleologo.png');
                    $list['profile_image_path']='storage/app/public/taleologo.png';
                }
            }
            if($row->user_type=='customer')
            {
                if($row->user_id==$user->id)
                {    
                $list['you']       = 1;
                $list['user_name'] = 'You';
                }
                else
                {
                $list['you']       = 0;
                $list['user_name'] = $row->users->fname." ".$row->users->lname;    
                }
                
                if($row->users->avatar){
                $list['profile_image']=$row->users->avatar;
                $list['profile_image_path']=$row->users->avatar;
                }
                    else
                {
                    $list['profile_image']=url('storage/app/public/taleologo.png');
                    $list['profile_image_path']='storage/app/public/taleologo.png';
                }
                
            }
            $list['is_answer']   = $row->is_answer;
            $list['comment']     = $row->comment;
            $list['time_ago']    = $row->created_at->diffForHumans();
            $list['reply_count'] = $row->replies($row->id);
            $list['reply']       = $this->reply_comments($row->id,$user->id);
            $list1[] = $list; 
            }
           // $order = array_column($list1, 'you');
           // array_multisort($order, SORT_DESC, $list1);     
                
          $data = $list1;

        return response()->json(["status" => true, "message" => "Comments View.",'data'=>$list1]); 

        }
        else
        {
            return response()->json(["status" => false, "message" =>'Invalid Post id']);
        }

        
      }
    }

    function reply_comments($cmt,$user_id)
    {
        $reply=[];
        $comments = TriviaPostComment::where('parent_id',$cmt)->where('is_active',1)->where('is_deleted',0)->orderBy('id','ASC')->get();
        if(!empty($comments))
        {
            foreach($comments as $row){
            $list['comment_id']    = $row->id;
            $list['post_id']       = $row->post_id;
            if($row->user_type=='admin')
            {
                $list['you']       = 2;
                $list['user_name'] = 'Admin';
                if($row->users->avatar){
                $list['profile_image']=$row->users->avatar;
                $list['profile_image_path']=$row->users->avatar;
                }
                 else
                {
                    $list['profile_image']=url('storage/app/public/taleologo.png');
                    $list['profile_image_path']='storage/app/public/taleologo.png';
                }
            }
            if($row->user_type=='customer')
            {
                if($row->user_id==$user_id)
                {    
                $list['you']       = 1;
                $list['user_name'] = 'You';
                }
                else
                {
                $list['you']       = 0;
                $list['user_name'] = $row->users->fname." ".$row->users->lname;    
                }
                
                if($row->users->avatar){
                $list['profile_image']=$row->users->avatar;
                $list['profile_image_path']=$row->users->avatar;
                }
                else
                {
                    $list['profile_image']=url('storage/app/public/taleologo.png');
                    $list['profile_image_path']='storage/app/public/taleologo.png';
                }
            }
            $list['is_answer']   = $row->is_answer;
            $list['comment']     = $row->comment;
            $list['time_ago']    = $row->created_at->diffForHumans();
            // $list['reply_count'] = $row->replies($row->id);
            // $list['reply']       = $this->reply_comments($row->id,$user_id);
            $reply[] = $list; 
            }
        }
        return $reply;
    }

    //viewed
     public function post_viewed(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
        {
            return response()->json(["status" => false, "message" => "Unauthorized."]);
        }

        $rules   =   ['post_id' =>  'required|numeric'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
           return response()->json(["status" => false, "message" => $validator->errors()]);
        }
        else
        {  
            $viwed = TriviaPostLog::where('post_id',$request->post_id)->where('user_id',$user->id)->first();
                if($viwed)
                {
                   //  return 'view';die;
                }
                else
                {
                   // return $id;die;
                $log['post_id']   = $request->post_id;
                $log['user_id']   = $user->id;
                $log['is_active'] = 1;
                $log['is_deleted']= 0;
                $log['created_at']= date('Y-m-d H:i:s');
                $log['updated_at']= date('Y-m-d H:i:s');

                $updatelog = TriviaPostLog::create($log);
                }
                
                return response()->json(["status" => true, "message" => "Post viewed."]); 
        }
    }
}
