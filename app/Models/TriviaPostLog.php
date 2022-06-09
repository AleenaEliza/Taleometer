<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TriviaPostLog extends Model
{
    use HasFactory;
    protected $table = 'trivia_post_logs';
    protected $fillable = [
        'post_id', 'user_id', 'is_answered', 'is_active', 'is_deleted','created_at','updated_at'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    
}
