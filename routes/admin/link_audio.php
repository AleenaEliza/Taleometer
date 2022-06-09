<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '', 'middleware' => ['auth']], function(){

    Route::resource('/link-audio', App\Http\Controllers\Admin\LinkAudioController::class);
    
});