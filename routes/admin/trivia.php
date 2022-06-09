<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '', 'middleware' => ['auth']], function(){

    Route::resource('/trivia/category', App\Http\Controllers\Admin\TriviaCategory::class);
     
});
    // Category
    Route::get('/trivia/category', [App\Http\Controllers\Admin\TriviaCategory::class, 'index'])->name('trivia.category');
    Route::post('/trivia/category/save', [App\Http\Controllers\Admin\TriviaCategory::class, 'save_category']);
    Route::get('/trivia/category/view/{id}', [App\Http\Controllers\Admin\TriviaCategory::class, 'view_category']);
    Route::get('/trivia/category/delete/{id}', [App\Http\Controllers\Admin\TriviaCategory::class, 'delete_category']);
    Route::post('/trivia/category/updateStatus', [App\Http\Controllers\Admin\TriviaCategory::class, 'updateStatus']);
    Route::post('/trivia/category/sort-order', [App\Http\Controllers\Admin\TriviaCategory::class, 'sort_order'])->name('category.sort-order');
    
    
    //Post add
    Route::get('/trivia/post', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'index'])->name('trivia.posts');
    Route::get('/trivia/post/add', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'posts']);
    Route::post('/trivia/posts/save', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'save_posts'])->name('trivia.savepost');
    Route::post('/trivia/posts/updateStatus', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'updateStatus']);
    Route::get('/trivia/posts/edit/{id}', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'edit_posts']);
    Route::post('/trivia/posts/update', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'update_posts'])->name('trivia.updatepost');
    Route::post('/trivia/posts/validate', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'validatePosts']);
    Route::get('/trivia/posts/view/{id}', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'posts_comment']);

    Route::post('/trivia/posts/addComment/', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'addcomment']);

    //tag
    Route::post('/trivia/tag/view', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'view_tag']);
     Route::post('/trivia/tag/validate-tag', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'validate_tag']);
     Route::post('/trivia/tag/add-tag', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'create_tag']);

     //Report
     Route::get('/trivia/report', [App\Http\Controllers\Admin\TriviaReportController::class, 'index'])->name('trivia.report');
     Route::post('/trivia/report/filter', [App\Http\Controllers\Admin\TriviaReportController::class, 'filter_report']);
     Route::post('/trivia/report/questions', [App\Http\Controllers\Admin\TrivaPost_Controller::class, 'view_question']);

     