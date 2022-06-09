<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PreferenceBubble extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'preference_category_id', 'image'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'preference_bubbles';

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

    public function preference_category() {
        return $this->belongsTo('App\Models\PreferenceCategory');
    }

    public function preference_bubble_tags()
    {
        return $this->hasMany('App\Models\PreferenceBubbleTag','preference_bubble_id');
    }
}
