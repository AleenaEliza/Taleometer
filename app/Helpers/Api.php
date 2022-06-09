<?php

use App\Models\User;
use App\Models\Log;

if (!function_exists('validateToken')){
    function validateToken($token){
        $query                      =   User::where('access_token',$token)->whereHas('role', function($q) { $q->where('name', 'Customer'); })->where('is_login',1)->where('is_deleted',0);
        if($query->exists()){ 
            $user                   =   User::where('id',$query->first()->id)->first();
            $log = new Log();
            $log->user_id = $user->id;
            $log->action = \Route::currentRouteAction();
            $log->save();

            return $user;
        }else{
            return false;
        }
    }
}
