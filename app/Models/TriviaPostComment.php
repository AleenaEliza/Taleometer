<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TriviaPostComment extends Model
{
    use HasFactory;
    protected $table = 'trivia_post_comments';
    protected $fillable = [
        'post_id', 'user_id', 'is_answer','comment_id','parent_id','comment','user_type','is_active', 'is_deleted','created_at','updated_at'
    ];

    public function users(){ return $this->belongsTo(User ::class, 'user_id'); }
    public function post_detail(){ return $this->belongsTo(TriviaPost ::class, 'post_id'); }
    public function replies($cmt){ return TriviaPostComment::where('parent_id',$cmt)->where('is_deleted',0)->where('is_active',1)->count(); }
    public function reply_cmt($id)
    {
        $rply =TriviaPostComment::where('parent_id',$id)->where('is_active',1)->where('is_deleted',0)->get();
        return $rply;
    }
}
