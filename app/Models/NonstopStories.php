<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NonstopStories extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'audio_story_id', 'link_audio_id', 'type'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'non_stop_stories';

    protected $with = ['audio_story', 'link_audio'];

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
        return @$this->belongsTo('App\Models\AudioStory');
    }

    public function link_audio() {
        return @$this->belongsTo('App\Models\LinkAudio');
    }
}
