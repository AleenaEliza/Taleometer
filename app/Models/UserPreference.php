<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPreference extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'preference_bubble_id', 'user_id'
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'user_preferences';

    public $timestamps = true;

    // protected $with = array('preference_bubble');

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

    public function preference_bubble() {
        return $this->belongsTo('App\Models\PreferenceBubble');
    }
}
