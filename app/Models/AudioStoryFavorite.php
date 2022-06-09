<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AudioStoryFavorite extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'audio_story_id'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'audio_story_favorites';

    public $timestamps = true;

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

    public function audio_story() {
        return $this->belongsTo('App\Models\AudioStory');
    }

    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
