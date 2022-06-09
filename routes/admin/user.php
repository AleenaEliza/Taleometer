<?php

use Illuminate\Support\Facades\Route;

Route::get('/reset/password', [App\Http\Controllers\Seller\Auth\LoginController::class, 'resetPassword']);
Route::get('/reset/password/{token}', [App\Http\Controllers\Seller\Auth\LoginController::class, 'resetPassword']);
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');
Route::get('/profile', [App\Http\Controllers\Admin\AdminController::class, 'profile']);
Route::post('/validate/profile', [App\Http\Controllers\Admin\AdminController::class, 'validateUser']);
Route::post('/profile/update', [App\Http\Controllers\Admin\AdminController::class, 'saveProfile']);
Route::post('/password/validate', [App\Http\Controllers\Admin\AdminController::class, 'validatePassword']);
Route::post('/change/password', [App\Http\Controllers\Admin\AdminController::class, 'savePassword']);


Route::get('/user-story-response', [App\Http\Controllers\Admin\UserStoryController::class, 'responses']);
Route::delete('/user-story-response/{id}', [App\Http\Controllers\Admin\UserStoryController::class, 'deleteResponses']);
Route::post('/user-story-response/export', [App\Http\Controllers\Admin\UserStoryController::class, 'exportResponses']);

Route::resource('/contact-us', App\Http\Controllers\Admin\UserFeedbackController::class);