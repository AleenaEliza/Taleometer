<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AudioStory extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'image', 'file', 'genre_id', 'story_id', 'plot_id', 'narration_id', 'is_nonstop'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'audio_stories';

    protected $withCount = ['views', 'favorites'];
    
    protected $with = ['story','plot','narration'];

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

    public function genre() {
        return $this->belongsTo('App\Models\Genre');
    }

    public function story() {
        return $this->belongsTo('App\Models\Story');
    }

    public function plot() {
        return $this->belongsTo('App\Models\Plot');
    }

    public function narration() {
        return $this->belongsTo('App\Models\Narration');
    }

    public function audio_story_tags()
    {
        return $this->hasMany('App\Models\AudioStoryTag','audio_story_id');
    }

    public function views()
    {
        return $this->hasMany('App\Models\AudioStoryHistory');
    }

    public function favorites()
    {
        return $this->hasMany('App\Models\AudioStoryFavorite');
    }

    public function duration()
    {
        return $this->hasMany('App\Models\AudioStoryFavorite');
    }
    
}
