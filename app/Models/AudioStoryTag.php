<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AudioStoryTag extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'audio_story_id', 'tag_id'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'audio_story_tags';

    public $timestamps = true;

    protected $with = array('tag', 'audio_story');

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

    public function tag() {
        return $this->belongsTo('App\Models\Tag');
    }

    public function audio_story() {
        return $this->belongsTo('App\Models\AudioStory');
    }
}
