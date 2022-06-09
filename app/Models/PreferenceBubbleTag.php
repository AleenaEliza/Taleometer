<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreferenceBubbleTag extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'preference_bubble_id', 'tag_id'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'preference_bubble_tags';

    public $timestamps = true;

    protected $with = array('tag');

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

    public function preference_bubble() {
        return $this->belongsTo('App\Models\PreferenceBubble');
    }
}
