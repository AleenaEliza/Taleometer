<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use DB;

class UserRoleAction extends Model
{  
     use HasFactory, Notifiable;
    protected $table = 'usr_role_action';

    protected $fillable = ['usr_role_id','module_id','page_id','view','edit','delete','approval','is_active','is_deleted','created_by','updated_by','created_at','updated_at'];

    public function module_name(){ return $this->belongsTo(Module ::class, 'module_id'); }
    public function page_name(){ return $this->belongsTo(Module ::class, 'page_id'); }
    public function role_name(){ return $this->belongsTo(Role ::class, 'usr_role_id'); }

}
