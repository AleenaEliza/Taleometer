<?php

use Illuminate\Support\Facades\Route;

Route::post('/master/validate', [App\Http\Controllers\Admin\MasterController::class, 'validateMaster']);
Route::post('/master/updateStatus', [App\Http\Controllers\Admin\MasterController::class, 'updateStatus']);

Route::group(['prefix' => '', 'middleware' => ['auth']], function(){

    Route::resource('/genre', App\Http\Controllers\Admin\GenreController::class);
    Route::post('/genre/updateStatus', [App\Http\Controllers\Admin\GenreController::class, 'updateStatus']);

    Route::resource('/plot', App\Http\Controllers\Admin\PlotController::class);
    Route::resource('/narration', App\Http\Controllers\Admin\NarrationController::class);
    Route::resource('/story', App\Http\Controllers\Admin\StoryController::class);
    Route::resource('/tag', App\Http\Controllers\Admin\TagController::class);
    Route::resource('/preference-category', App\Http\Controllers\Admin\PreferenceCategoryController::class);
    Route::resource('/user-story', App\Http\Controllers\Admin\UserStoryController::class);
    Route::resource('/preference-bubble', App\Http\Controllers\Admin\PreferenceBubbleController::class);
    
    Route::resource('/notification', App\Http\Controllers\Admin\NotificationController::class);
    Route::post('/notification/updateStatus', [App\Http\Controllers\Admin\NotificationController::class, 'updateStatus']);
    Route::post('/notification/send', [App\Http\Controllers\Admin\NotificationController::class, 'sendNotifications']);
    
    Route::resource('/content', App\Http\Controllers\Admin\ContentController::class);

    Route::get('/insights/{type}', [App\Http\Controllers\HomeController::class, 'insights']);
});

