<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TriviaTag extends Model
{
    use HasFactory;
    protected $table = 'trivia_tags';
    protected $fillable = ['tag', 'is_active', 'is_deleted','created_at','updated_at'
    ];
}
