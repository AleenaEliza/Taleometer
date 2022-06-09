<?php

use Illuminate\Support\Facades\Route;

//country code
Route::get('country', [App\Http\Controllers\API\TriviaHomeController::class, 'country']);

//TRIVIA
Route::post('trivia-home', [App\Http\Controllers\API\TriviaHomeController::class, 'home']);
Route::post('trivia/daily', [App\Http\Controllers\API\TriviaPostControl::class, 'daily']);
Route::post('trivia/category-post', [App\Http\Controllers\API\TriviaPostControl::class, 'category_post']);
Route::post('trivia/posts', [App\Http\Controllers\API\TriviaPostControl::class, 'trivia_post']);
Route::post('trivia/submit-answer', [App\Http\Controllers\API\TriviaPostControl::class, 'submit_answer']);
Route::post('trivia/view-answer', [App\Http\Controllers\API\TriviaPostControl::class, 'view_answer']);
Route::post('trivia/view-comments', [App\Http\Controllers\API\TriviaPostControl::class, 'view_comment']);
Route::post('trivia/add-comment', [App\Http\Controllers\API\TriviaPostControl::class, 'add_comment']);
Route::post('trivia/posts/view', [App\Http\Controllers\API\TriviaPostControl::class, 'post_viewed']);


Route::get('/clear', function() {

    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    Artisan::call('route:clear');

    return "Cleared!";

});