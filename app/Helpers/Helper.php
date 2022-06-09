<?php

use App\Models\Module;
use App\Models\Branch;

// if (!function_exists('sidebarMenu')) {
//     function sidebarMenu(){ 

//         $menu_list = Module::visibleModules(1);
//         if(count($menu_list) >0){
//             return $menu_list;
//         }else {
//           return Module::visibleModules(1); 
//         }
        
        
//     }
// }

if (!function_exists('sidebarMenu')) {
    function sidebarMenu(){ 

        $menu_list = Module::visibleModules(auth()->user()->role_id);
        if($menu_list){
        if(count($menu_list) >0){
            return $menu_list;
        }else {
           return array(); 
        }    
        }else {
            
           return array(); 
        } 
        
    }
}

if (!function_exists('checkPermission')) {
    function checkPermission($slug,$act){ 
    if(auth()->user()->role_id ==1) {
        return true;
    }
    $check_perm = Module::checkPermission($slug,auth()->user()->role_id,$act);
        // dd($check_perm);
    return $check_perm;        
    }
}
if (!function_exists('branchName')) {

    function branchName($id) {
        $data = Branch::where('id', $id)->where('is_deleted', 0)->first();
        if ($data) {
            return $data->name;
        } else {
            return '';
        }
    }

}