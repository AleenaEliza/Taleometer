<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

foreach (glob(__DIR__ . '/triviapi/*.php') as $filename) { require_once($filename); }

Route::post('register', [App\Http\Controllers\API\UserController::class, 'register']);
Route::post('sendOtp', [App\Http\Controllers\API\UserController::class, 'sendOtp']);
Route::post('verifyOtp', [App\Http\Controllers\API\UserController::class, 'verifyOtp']);
Route::get('genres', [App\Http\Controllers\API\GenreController::class, 'getGenreList']);
Route::get('guest-audio-stories', [App\Http\Controllers\API\AudioStoryController::class, 'getGuestAudioStoryList']);


// Auth Apis (requires token)
Route::get('logout', [App\Http\Controllers\API\UserController::class, 'logout']);
Route::get('getProfile', [App\Http\Controllers\API\UserController::class, 'getProfile']);
Route::post('update-profile/sendOtp', [App\Http\Controllers\API\UserController::class, 'updateProfile_sendOtp']);
Route::post('update-profile/verifyOtp', [App\Http\Controllers\API\UserController::class, 'updateProfile_verifyOtp']);
Route::post('update-profile/image', [App\Http\Controllers\API\UserController::class, 'updateProfile_image']);
Route::delete('update-profile/image', [App\Http\Controllers\API\UserController::class, 'removeProfile_image']);
Route::post('update-profile/details', [App\Http\Controllers\API\UserController::class, 'updateProfile_details']);
Route::get('preference-bubbles', [App\Http\Controllers\API\UserPreferenceController::class, 'getPreferenceBubbles']);
Route::post('autoplay', [App\Http\Controllers\API\UserController::class, 'setAutoplay']);

Route::get('preference-categories', [App\Http\Controllers\API\UserPreferenceController::class, 'getPreferenceCategories']);
Route::get('stories', [App\Http\Controllers\API\MasterController::class, 'getStories']);
Route::get('plots', [App\Http\Controllers\API\MasterController::class, 'getPlots']);
Route::get('narrations', [App\Http\Controllers\API\MasterController::class, 'getNarrations']);
Route::get('user-stories', [App\Http\Controllers\API\MasterController::class, 'getUserStories']);

// User preferences apis
Route::post('user-preferences', [App\Http\Controllers\API\UserPreferenceController::class, 'setUserPreferences']);
Route::get('user-preferences', [App\Http\Controllers\API\UserPreferenceController::class, 'getUserPreferences']);

// Audio Story Apis
Route::post('audio-stories', [App\Http\Controllers\API\AudioStoryController::class, 'getAudioStoryList']);
Route::post('audio-stories/plot', [App\Http\Controllers\API\AudioStoryController::class, 'getAudioStoryByPlot']);
Route::post('audio-stories/narration', [App\Http\Controllers\API\AudioStoryController::class, 'getAudioStoryByNarration']);
Route::post('audio-stories/story', [App\Http\Controllers\API\AudioStoryController::class, 'getAudioStoryByStory']);
Route::post('audio-stories/genre', [App\Http\Controllers\API\AudioStoryController::class, 'getAudioStoryByGenre']);
Route::post('audio-stories/non-stop', [App\Http\Controllers\API\AudioStoryController::class, 'getNonStopAudioStories']);
Route::post('audio-stories/surprise', [App\Http\Controllers\API\AudioStoryController::class, 'getSurpriseAudioStories']);
Route::post('audio-story/action', [App\Http\Controllers\API\AudioStoryController::class, 'addAudioStoryAction']);
Route::post('/audio-story/end-playing', [App\Http\Controllers\API\AudioStoryController::class, 'endPlayingAudioStory']);
Route::post('add-audio-history', [App\Http\Controllers\API\AudioStoryController::class, 'addAudioHistory']);
Route::get('get-audio-history', [App\Http\Controllers\API\AudioStoryController::class, 'getAudioHistory']);
Route::post('update-audio-history', [App\Http\Controllers\API\AudioStoryController::class, 'updateAudioHistory']);

Route::post('search-audio', [App\Http\Controllers\API\AudioStoryController::class, 'searchAudio']);
Route::get('search-audio/recent', [App\Http\Controllers\API\AudioStoryController::class, 'getRecentSearchAudio']);
Route::delete('search-audio/remove', [App\Http\Controllers\API\AudioStoryController::class, 'removeSearchAudio']);
Route::delete('search-audio/remove-all', [App\Http\Controllers\API\AudioStoryController::class, 'removeAllSearchAudio']);

Route::get('favorite-audio/get', [App\Http\Controllers\API\AudioStoryController::class, 'getFavoriteAudio']);
Route::post('favorite-audio/add', [App\Http\Controllers\API\AudioStoryController::class, 'addFavoriteAudio']);
Route::delete('favorite-audio/remove', [App\Http\Controllers\API\AudioStoryController::class, 'removeFavoriteAudio']);


Route::post('user-stories/response', [App\Http\Controllers\API\UserController::class, 'userStoryResponse']);

Route::get('notifications', [App\Http\Controllers\API\NotificationController::class, 'getNotifications']);
Route::post('notification', [App\Http\Controllers\API\NotificationController::class, 'setNotificationSetting']);
Route::post('notification/token', [App\Http\Controllers\API\NotificationController::class, 'setDeviceToken']);



Route::post('usage/start', [App\Http\Controllers\API\UserController::class, 'setUsageStart']);
Route::post('usage/end', [App\Http\Controllers\API\UserController::class, 'setUsageEnd']);

Route::post('feedback', [App\Http\Controllers\API\UserController::class, 'addFeedback']);

Route::get('about-us', [App\Http\Controllers\API\ContentController::class, 'getAboutUs']);
Route::get('terms-and-conditions', [App\Http\Controllers\API\ContentController::class, 'getTermsAndConditions']);


