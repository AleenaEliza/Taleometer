<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class Role extends Model
{  
    protected $fillable = ['name','is_active'];

    static function ValidateUnique($name,$id) {
        $query                  =   Role::where('name',$name)->where('is_deleted',0)->first();
        if($query){
            if($query->id       !=  $id){ 
                return 'This role name already has been taken'; 
            }else{ return false; }
        }else{ return false; }
    }
}
