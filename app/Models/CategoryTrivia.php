<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryTrivia extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_name', 'image', 'sort_order', 'is_active', 'is_deleted'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'category_trivia';

    public function post_count($cat,$user_id){
        $count_post = TriviaPost::where('category',$cat)->where('is_deleted',0)->where('is_active',1)->whereNotIn('id',function($query) use ($user_id){$query->select('post_id')->from('trivia_post_logs')->where('user_id',$user_id)->where('is_active',1)->where('is_deleted',0);})->where(function ($query) {
        $query->where('schedule', '<', date('Y-m-d H:i:s'))
            ->orWhereNull('schedule');
    })->count();
        return $count_post;
    }
}
