<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'fname',
        'lname',
        'phone',
        'address1',
        'is_active',
        'avatar',
        'thumb',
        'email',
        'password',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'otp',
        'otp_sent_at',
        'access_token'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    static function ValidateUnique($email,$id) {
        $query                  =   User::where('email',$email)->where('is_deleted',0)->first();
        if($query){
            if($query->id       !=  $id){ 
                return 'This email already has been taken'; 
            }else{ return false; }
        }else{ return false; }
    }
    
    static function ValidatePhone($phone,$id) {
        $query                  =   User::where('phone',$phone)->where('is_deleted',0)->first();
        if($query){
            if($query->id       !=  $id){ 
                return 'This number already has been taken'; 
            }else{ return false; }
        }else{ return false; }
    }


    public function role(){ return $this->belongsTo(Role ::class, 'role_id'); }
}
