<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '', 'middleware' => ['auth']], function(){

    Route::resource('/audio-story', App\Http\Controllers\Admin\AudioStoryController::class);
    Route::post('/audio-story/updateStatus', [App\Http\Controllers\Admin\AudioStoryController::class, 'updateStatus']);

    // Nonstop Audio Story
    Route::get('/nonstop-audio', [App\Http\Controllers\Admin\NonstopStoryController::class, 'index']);
    Route::post('/nonstop-audio', [App\Http\Controllers\Admin\NonstopStoryController::class, 'store']);
    Route::get('/nonstop-audio/{id}', [App\Http\Controllers\Admin\NonstopStoryController::class, 'show']);
    Route::post('/nonstop-audio/replace', [App\Http\Controllers\Admin\NonstopStoryController::class, 'replace']);
    Route::post('/nonstop-audio/replace_link_audio', [App\Http\Controllers\Admin\NonstopStoryController::class, 'replaceLinkAudio']);
    Route::delete('/nonstop-audio/{id}', [App\Http\Controllers\Admin\NonstopStoryController::class, 'destroy']);
    
});