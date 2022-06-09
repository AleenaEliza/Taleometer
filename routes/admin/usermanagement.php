<?php

use Illuminate\Support\Facades\Route;

Route::get('/roles', [App\Http\Controllers\Admin\UserManagementController::class, 'roles']);
Route::post('/role/save', [App\Http\Controllers\Admin\UserManagementController::class, 'saveRole']);
Route::get('/role/{id}', [App\Http\Controllers\Admin\UserManagementController::class, 'editRole']);

Route::get('/users', [App\Http\Controllers\Admin\UserManagementController::class, 'users']);
Route::post('/user/save', [App\Http\Controllers\Admin\UserManagementController::class, 'saveUser']);
Route::get('/user/{id}', [App\Http\Controllers\Admin\UserManagementController::class, 'editUser']);

Route::get('/assign/role', [App\Http\Controllers\Admin\UserManagementController::class, 'assign_roles']);
Route::post('/assign/role/save', [App\Http\Controllers\Admin\UserManagementController::class, 'saveAssignRole']);
Route::get('/assign/role/{id}', [App\Http\Controllers\Admin\UserManagementController::class, 'editAssignRole']);

Route::post('user/management/validate', [App\Http\Controllers\Admin\UserManagementController::class, 'validateUserManagement']);
Route::post('/user/management/updateStatus', [App\Http\Controllers\Admin\UserManagementController::class, 'updateStatus']);
Route::post('/user/management/checkEmail', [App\Http\Controllers\Admin\UserManagementController::class, 'checkEmail']);

Route::post('/getDropdown/role',[App\Http\Controllers\Admin\UserManagementController::class, 'roleDropdownData']);

Route::get('/role-privilege', [App\Http\Controllers\Admin\UserManagementController::class, 'role_privileges'])->name('role_privileges');
Route::post('/role-privilege/set', [App\Http\Controllers\Admin\UserManagementController::class, 'set_privileges']);
Route::post('/role-privilege/role', [App\Http\Controllers\Admin\UserManagementController::class, 'getPrivileges']);


Route::get('/access-privilege', [App\Http\Controllers\Admin\UserManagementController::class, 'access_privileges'])->name('access_privileges');
Route::post('/access-privilege/modules', [App\Http\Controllers\Admin\UserManagementController::class, 'role_modules']);
Route::post('/access-privilege/pages', [App\Http\Controllers\Admin\UserManagementController::class, 'role_pages']);
Route::post('/access-privilege/actions', [App\Http\Controllers\Admin\UserManagementController::class, 'role_actions']);
Route::post('/access-privilege/actions/save', [App\Http\Controllers\Admin\UserManagementController::class, 'role_saveActions']);


Route::get('/clear', function() {

    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    // Artisan::call('config:cache');
    Artisan::call('view:clear');
    Artisan::call('route:clear');

    return "Cleared!";

});