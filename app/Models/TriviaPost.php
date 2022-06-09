<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TriviaPost extends Model
{
    use HasFactory;
    protected $fillable = [
        'category','question','question_type','tag','question_media','is_active','is_deleted','answer_type','answer_text','answer_image','schedule','thumbnail'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'trivia_posts';

    public function categories(){ return $this->belongsTo(CategoryTrivia::class, 'category'); }
    public function tag_name(){ return $this->belongsTo(TriviaTag::class, 'tag'); }
    static function Validateobjects($name,$id) {
        $query                  =   TriviaPost::where('name',$name)->where('is_deleted',0)->first();
        if($query){
            if($query->id       !=  $id){ 
                return 'This role name already has been taken'; 
            }else{ return false; }
        }else{ return false; }
    }
    public function user_attend($post_id,$user_id) {
        $query                  =   TriviaPostLog::where('post_id',$post_id)->where('user_id',$user_id)->first();
        if($query){
            return true;
        }else{ return false; }
    }
    public function user_answered($post_id,$user_id) {
        $query                  =   TriviaPostLog::where('post_id',$post_id)->where('user_id',$user_id)->first();
        if($query){
            if($query->is_answered==1)
            {
            return true;
            }
            else
            {
                return false;
            }
        }else{ return false; }
    }
    public function user_answered_post($post_id,$user_id) {
        $query                  =   TriviaPostComment::where('post_id',$post_id)->where('user_id',$user_id)->where('is_deleted',0)->where('is_active',1)->count();
        if($query>0){
            
            return 1;
            
        }else{ return 0; }
    }
    
    public function posts_comments($post_id,$user)
    {
        $comments = TriviaPostComment::where('post_id',$post_id)->whereNull('comment_id')->where('is_active',1)->where('is_deleted',0)->orderBy('id','DESC')->get();
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

        return $data; 

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
}
