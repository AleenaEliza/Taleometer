<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserStoryResponse extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'response_id', 'user_id', 'user_story_id', 'value'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'user_story_responses';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        
    ];

    public function user() {
        return $this->belongsTo('App\Models\User');
    }

    public function user_story() {
        return $this->belongsTo('App\Models\UserStory');
    }
}
