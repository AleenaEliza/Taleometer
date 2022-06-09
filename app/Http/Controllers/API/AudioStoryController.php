<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AudioStory;
use App\Models\NonstopStories;
use App\Models\AudioStoryTag;
use App\Models\AudioStoryHistory;
use App\Models\AudioStorySearch;
use App\Models\AudioStoryFavorite;
use App\Models\UserPreference;
use App\Models\PreferenceBubble;
use App\Models\Tag;
use App\Models\Plot;
use App\Models\Genre;
use App\Models\Narration;
use App\Models\Story;
use App\Models\PreferenceBubbleTag;
use Validator;
use DB;

class AudioStoryController extends Controller
{
    public function getGuestAudioStoryList(Request $request)
    {
        $data = AudioStory::where('is_active', 1)->whereNull('deleted_at')->orderBy('created_at', 'DESC')->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Audio stories listed successfully.", "data" => $data]);
    }

    public function getAudioStoryList(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:12;

        $prefs = UserPreference::with('preference_bubble.preference_bubble_tags')->where('user_id', $user->id)->get();

        if(count($prefs) == 0)
            $data = AudioStory::select( 
                '*', DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users')
                )->withCount(['views', 'favorites'])->where('is_active', 1)->whereNull('deleted_at')->orderBy('created_at', 'DESC');
        else
        {
            $tags = [];

            foreach($prefs as $pref)
            {
                foreach($pref->preference_bubble->preference_bubble_tags as $tag)
                {
                    $tags[] = $tag->tag_id;
                }
            }

            // $tags = array_unique($tags);

            $data = AudioStory::select( 
                '*', DB::raw('(SELECT count(*) FROM audio_story_tags WHERE audio_story_id = audio_stories.id AND audio_story_tags.tag_id IN ('.implode(",", $tags).')) as tag_count'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users'),
                DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite')
                )->withCount(['views', 'favorites'])->where('is_active', 1)->whereNull('deleted_at')->orderBy('tag_count', 'DESC')->orderBy('created_at', 'DESC');
        }

        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Audio stories listed successfully.", "data" => $data]);
    }

    public function getSurpriseAudioStories(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:12;

        $listened = AudioStoryHistory::where('user_id', $user->id)->groupBy('audio_story_id')->pluck('audio_story_id')->toArray();

        $prefs = UserPreference::with('preference_bubble.preference_bubble_tags')->where('user_id', $user->id)->get();

        if(count($prefs) == 0)
            $data = AudioStory::select( 
                '*', DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users')
                )->withCount(['views', 'favorites'])->whereNotIn('id', $listened)->where('is_active', 1)->whereNull('deleted_at')->inRandomOrder();// ->orderBy('created_at', 'DESC');
        else
        {
            $tags = [];

            foreach($prefs as $pref)
            {
                foreach($pref->preference_bubble->preference_bubble_tags as $tag)
                {
                    $tags[] = $tag->tag_id;
                }
            }

            // $tags = array_unique($tags);

            $data = AudioStory::select( 
                '*', DB::raw('(SELECT count(*) FROM audio_story_tags WHERE audio_story_id = audio_stories.id AND audio_story_tags.tag_id IN ('.implode(",", $tags).')) as tag_count'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users'),
                DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite')
                )->withCount(['views', 'favorites'])->whereNotIn('id', $listened)->where('is_active', 1)->whereNull('deleted_at')->inRandomOrder(); //->orderBy('tag_count', 'DESC')->orderBy('created_at', 'DESC');
        }

        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "You have listened to all surprise audio stories."]);

        return response()->json(["status" => true, "message" => "Audio stories listed successfully.", "data" => $data]);
    }

    public function getAudioStoryByPlot(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['plot_id' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $plot = Plot::select('*',
            DB::raw('(SELECT count(*) FROM audio_stories WHERE plot_id = '.$request->plot_id.' AND is_active = 1 AND deleted_at IS NULL) as audio_story_count'),
            DB::raw('(SELECT SUM(duration) FROM audio_stories WHERE plot_id = '.$request->plot_id.' AND is_active = 1 AND deleted_at IS NULL) as duration')
        )->first();

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:12;
        $shuffle = isset($request->shuffle)?$request->shuffle:0;

        $prefs = UserPreference::with('preference_bubble.preference_bubble_tags')->where('user_id', $user->id)->get();

        if(count($prefs) == 0)
            $data = AudioStory::select( 
                '*', DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users')
                )->withCount(['views', 'favorites'])->where(['plot_id' => $request->plot_id, 'is_active' => 1])->whereNull('deleted_at');
        else
        {
            $tags = [];

            foreach($prefs as $pref)
            {
                foreach($pref->preference_bubble->preference_bubble_tags as $tag)
                {
                    $tags[] = $tag->tag_id;
                }
            }

            // $tags = array_unique($tags);

            $data = AudioStory::select( 
                '*', DB::raw('(SELECT count(*) FROM audio_story_tags WHERE audio_story_id = audio_stories.id AND audio_story_tags.tag_id IN ('.implode(",", $tags).')) as tag_count'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users'),
                DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite')
                )->withCount(['views', 'favorites'])->where(['plot_id' => $request->plot_id, 'is_active' => 1])->whereNull('deleted_at');
        }

        if($shuffle == 1)
            $data = $data->inRandomOrder();
        else if(count($prefs) == 0)
            $data = $data->orderBy('created_at', 'DESC');
        else
            $data = $data->orderBy('tag_count', 'DESC')->orderBy('created_at', 'DESC');
        
        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found.", "plot" => $plot]);

        return response()->json(["status" => true, "message" => "Audio stories listed successfully.", "data" => $data, "plot" => $plot]);
    }

    public function getAudioStoryByNarration(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['narration_id' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $narration = Narration::select('*',
            DB::raw('(SELECT count(*) FROM audio_stories WHERE narration_id = '.$request->narration_id.' AND is_active = 1 AND deleted_at IS NULL) as audio_story_count'),
            DB::raw('(SELECT SUM(duration) FROM audio_stories WHERE narration_id = '.$request->narration_id.' AND is_active = 1 AND deleted_at IS NULL) as duration')
        )->first();

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:12;
        $shuffle = isset($request->shuffle)?$request->shuffle:0;

        $prefs = UserPreference::with('preference_bubble.preference_bubble_tags')->where('user_id', $user->id)->get();

        if(count($prefs) == 0)
            $data = AudioStory::select( 
                '*', DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users')
                )->withCount(['views', 'favorites'])->where(['narration_id' => $request->narration_id, 'is_active' => 1])->whereNull('deleted_at');
        else
        {
            $tags = [];

            foreach($prefs as $pref)
            {
                foreach($pref->preference_bubble->preference_bubble_tags as $tag)
                {
                    $tags[] = $tag->tag_id;
                }
            }

            // $tags = array_unique($tags);

            $data = AudioStory::select( 
                '*', DB::raw('(SELECT count(*) FROM audio_story_tags WHERE audio_story_id = audio_stories.id AND audio_story_tags.tag_id IN ('.implode(",", $tags).')) as tag_count'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users'),
                DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite')
                )->withCount(['views', 'favorites'])->where(['narration_id' => $request->narration_id, 'is_active' => 1])->whereNull('deleted_at');
        }

        if($shuffle == 1)
            $data = $data->inRandomOrder();
        else if(count($prefs) == 0)
            $data = $data->orderBy('created_at', 'DESC');
        else
            $data = $data->orderBy('tag_count', 'DESC')->orderBy('created_at', 'DESC');
        
        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found.", "narration" => $narration]);

        return response()->json(["status" => true, "message" => "Audio stories listed successfully.", "data" => $data, "narration" => $narration]);
    }

    public function getAudioStoryByStory(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['story_id' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $story = Story::select('*',
            DB::raw('(SELECT count(*) FROM audio_stories WHERE story_id = '.$request->story_id.' AND is_active = 1 AND deleted_at IS NULL) as audio_story_count'),
            DB::raw('(SELECT SUM(duration) FROM audio_stories WHERE story_id = '.$request->story_id.' AND is_active = 1 AND deleted_at IS NULL) as duration')
        )->first();

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:12;
        $shuffle = isset($request->shuffle)?$request->shuffle:0;

        $prefs = UserPreference::with('preference_bubble.preference_bubble_tags')->where('user_id', $user->id)->get();

        if(count($prefs) == 0)
            $data = AudioStory::select( 
                '*', DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users')
                )->withCount(['views', 'favorites'])->where(['story_id' => $request->story_id, 'is_active' => 1])->whereNull('deleted_at');
        else
        {
            $tags = [];

            foreach($prefs as $pref)
            {
                foreach($pref->preference_bubble->preference_bubble_tags as $tag)
                {
                    $tags[] = $tag->tag_id;
                }
            }

            // $tags = array_unique($tags);

            $data = AudioStory::select( 
                '*', DB::raw('(SELECT count(*) FROM audio_story_tags WHERE audio_story_id = audio_stories.id AND audio_story_tags.tag_id IN ('.implode(",", $tags).')) as tag_count'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users'),
                DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite')
                )->withCount(['views', 'favorites'])->where(['story_id' => $request->story_id, 'is_active' => 1])->whereNull('deleted_at');
        }

        if($shuffle == 1)
            $data = $data->inRandomOrder();
        else if(count($prefs) == 0)
            $data = $data->orderBy('created_at', 'DESC');
        else
            $data = $data->orderBy('tag_count', 'DESC')->orderBy('created_at', 'DESC');
        
        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found.", "story" => $story]);

        return response()->json(["status" => true, "message" => "Audio stories listed successfully.", "data" => $data, "story" => $story]);
    }

    public function getAudioStoryByGenre(Request $request)
    {
        $token = @$request->bearerToken();

        if($token != '')
        {
            $user = validateToken($token);

            // if(!$user)
            //     return response()->json(["status" => false, "message" => "Unauthorized."]);
        }
        else
            $user = false;

        $rules   =   ['genre_id' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $genre = Genre::select('*',
            DB::raw('(SELECT count(*) FROM audio_stories WHERE genre_id = '.$request->genre_id.' AND is_active = 1 AND deleted_at IS NULL) as audio_story_count'),
            DB::raw('(SELECT SUM(duration) FROM audio_stories WHERE genre_id = '.$request->genre_id.' AND is_active = 1 AND deleted_at IS NULL) as duration')
        )->first();

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:12;
        $shuffle = isset($request->shuffle)?$request->shuffle:0;

        if(!$user)
            $prefs = [];
        else
            $prefs = UserPreference::with('preference_bubble.preference_bubble_tags')->where('user_id', $user->id)->get();

        if(!$user)
            $data = AudioStory::select('*', DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users'))
            ->withCount(['views', 'favorites'])->where(['genre_id' => $request->genre_id, 'is_active' => 1])->whereNull('deleted_at');
        else if(count($prefs) == 0)
            $data = AudioStory::select( 
                '*', DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users')
                )->withCount(['views', 'favorites'])->where(['genre_id' => $request->genre_id, 'is_active' => 1])->whereNull('deleted_at');
        else
        {
            $tags = [];

            foreach($prefs as $pref)
            {
                foreach($pref->preference_bubble->preference_bubble_tags as $tag)
                {
                    $tags[] = $tag->tag_id;
                }
            }

            // $tags = array_unique($tags);

            $data = AudioStory::select( 
                '*', DB::raw('(SELECT count(*) FROM audio_story_tags WHERE audio_story_id = audio_stories.id AND audio_story_tags.tag_id IN ('.implode(",", $tags).')) as tag_count'),
                DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users'),
                DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite')
                )->withCount(['views', 'favorites'])->where(['genre_id' => $request->genre_id, 'is_active' => 1])->whereNull('deleted_at');
        }

        if($shuffle == 1)
            $data = $data->inRandomOrder();
        else if(count($prefs) == 0)
            $data = $data->orderBy('created_at', 'DESC');
        else
            $data = $data->orderBy('tag_count', 'DESC')->orderBy('created_at', 'DESC');
        
        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found.", "genre" => $genre]);

        return response()->json(["status" => true, "message" => "Audio stories listed successfully.", "data" => $data, "genre" => $genre]);
    }

    public function addAudioHistory(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['audio_story_id' =>  'required', 'time' => 'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $data = new AudioStoryHistory();
        $data->user_id = $user->id;
        $data->audio_story_id = $request->audio_story_id;
        $data->time = $request->time;
        $data->save();

        return response()->json(["status" => true, "message" => "Audio History saved successfully.", "data" => $data]);
    }

    public function getAudioHistory(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:12;

        // DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_story_history.audio_story_id AND user_id = '.$user->id.') as is_favorite')
        
        $data = AudioStoryHistory::with([
            'audio_story' => function($query) use($user) {
                        $query->select('*', DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite'),
                        DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users'));
                        $query->withCount(['views', 'favorites']);
                            }
         ])->where('user_id', $user->id)->orderBy('created_at', 'desc')->groupBy("audio_story_id");

        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Audio history listed successfully.", "data" => $data]);
    }

    public function updateAudioHistory(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['audio_history_id' =>  'required', 'time' => 'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $data = AudioStoryHistory::where(['user_id' => $user->id, 'id' => $request->audio_history_id])->first();

        if(!$data)
            return response()->json(["status" => false, "message" => "Invalid Audio History."]);

        $data->time = $request->time;
        $data->save();

        return response()->json(["status" => true, "message" => "Audio History updated successfully.", "data" => $data]);
    }

    public function searchAudio(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['text' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()->get('text')[0]]);
        }

        $search = new AudioStorySearch();
        $search->user_id = $user->id;
        $search->text = $request->text;
        $search->save();

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:1;

        $text = $request->text;

        $data = AudioStory::select( 
            '*', DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite'),
            DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users')
            )->withCount(['views', 'favorites'])->where('title', 'like', '%'.$text.'%')->orWhereHas('audio_story_tags', function($query) use ($text) {
                $query->whereHas('tag', function($query) use ($text) {
                    $query->where('name', $text);
                });
            })->whereNull('deleted_at')->orderBy('created_at', 'DESC');

        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Audio stories listed successfully.", "data" => $data]);
    }

    public function getRecentSearchAudio(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:1;

        $data = AudioStorySearch::where('user_id', $user->id)->orderBy('created_at', 'DESC');

        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Audio searches listed successfully.", "data" => $data]);
    }

    public function removeSearchAudio(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['audio_search_id' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $data = AudioStorySearch::where(['user_id' => $user->id, 'id' => $request->audio_search_id])->first();

        if(!$data)
            return response()->json(["status" => false, "message" => "Invalid Audio Search."]);

        $data = AudioStorySearch::where('id', $request->audio_search_id)->delete();

        return response()->json(["status" => true, "message" => "Audio searche deleted successfully."]);
    }

    public function removeAllSearchAudio(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $data = AudioStorySearch::where('user_id', $user->id)->delete();

        return response()->json(["status" => true, "message" => "Audio searches deleted successfully."]);
    }

    public function getFavoriteAudio(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:1;

        $data = AudioStoryFavorite::with([
            'audio_story' => function($query) use($user) {
                        $query->select('*',
                        DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users'));
                        $query->withCount(['views', 'favorites']);
                    }
         ])->where('user_id', $user->id)->orderBy('created_at', 'DESC');

        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Favorite Audios listed successfully.", "data" => $data]);
    }

    public function addFavoriteAudio(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['audio_story_id' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $data = AudioStoryFavorite::where(['user_id' => $user->id, 'audio_story_id' => $request->audio_story_id])->first();

        if(!$data)
        {
            $data = new AudioStoryFavorite();
            $data->user_id = $user->id;
            $data->audio_story_id = $request->audio_story_id;
            $data->save();
        }

        return response()->json(["status" => true, "message" => "Favorite Audio added successfully."]);
    }

    public function removeFavoriteAudio(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['audio_story_id' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $data = AudioStoryFavorite::where(['user_id' => $user->id, 'audio_story_id' => $request->audio_story_id])->first();

        if(!$data)
            return response()->json(["status" => false, "message" => "Invalid Favorite Audio."]);

        AudioStoryFavorite::where(['user_id' => $user->id, 'audio_story_id' => $request->audio_story_id])->delete();

        return response()->json(["status" => true, "message" => "Favorite Audio removed successfully."]);
    }

    public function getNonStopAudioStories(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:12;

        $data = NonstopStories::with([
            'audio_story' => function($query) use($user) {
                        $query->select('*', DB::raw('(SELECT IF(count(*) > 0, 1, 0) FROM audio_story_favorites WHERE audio_story_id = audio_stories.id AND user_id = '.$user->id.') as is_favorite'),
                        DB::raw('(SELECT count(*) FROM audio_story_history WHERE audio_story_id = audio_stories.id AND is_playing = 1) as concurrent_users'));
                        $query->withCount(['views', 'favorites']);
                    }
         ])->whereNull('deleted_at')->orderBy('order', 'ASC')->orderBy('created_at', 'ASC')->orderBy('id', 'ASC');
        
        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Non Stop Audio stories listed successfully.", "data" => $data]);
    }

    public function addAudioStoryAction(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['audio_history_id' =>  'required', 'action' => 'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $data = AudioStoryHistory::where(['user_id' => $user->id, 'id' => $request->audio_history_id])->first();

        if(!$data)
            return response()->json(["status" => false, "message" => "Invalid Audio History."]);

        if($request->action == "pause")
        {
            $data->pause += 1;
            $data->is_playing = 0;
            
            if(@$request->time != "")
                $data->time = $request->time;
        }
        else if($request->action == "resume")
        {
            $data->resume += 1;
            $data->is_playing = 1;
        }

        $data->save();

        return response()->json(["status" => true, "message" => "Audio Story action saved successfully."]);
    }

    public function endPlayingAudioStory(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['audio_history_id' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $data = AudioStoryHistory::with('audio_story')->where(['user_id' => $user->id, 'id' => $request->audio_history_id])->first();

        if(!$data)
            return response()->json(["status" => false, "message" => "Invalid Audio History."]);

        $data->is_playing = 0;
        
        if(@$data->audio_story->duration != '')
            $data->time = @$data->audio_story->duration;

        $data->save();

        return response()->json(["status" => true, "message" => "Audio Story ended successfully."]);
    }
}
