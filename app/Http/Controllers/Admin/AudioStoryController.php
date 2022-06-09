<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\AudioStoryRequest;
use App\Models\AudioStory;
use App\Models\LinkAudio;
use App\Models\NonstopStories;
use App\Models\Genre;
use App\Models\Story;
use App\Models\Plot;
use App\Models\Narration;
use App\Models\Tag;
use App\Models\User;
use App\Models\AudioStoryTag;
use Storage;

class AudioStoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'Audio Stories';
        $data['menuGroup']          =   'audio_story';
        $data['menu']               =   'audio_story'; 
        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        $data['genres']  =   Genre::orderBy('created_at', 'DESC')->where('is_active', 1)->whereNull('deleted_at')->pluck('name', 'id');
        $data['stories']  =   Story::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        $data['plots']  =   Plot::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        $data['narrations']  =   Narration::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        $data['tags']  =   Tag::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        return view('admin.audio_story.list',$data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /* public function getDuration($duration = 0)
    {
        $m = floor(($duration%3600)/60);
        $h = floor($duration/3600);

        if($h > 0)
            return "$h hr $m min";
        return "$m min";
    } */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AudioStoryRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
        {
            $audio_story = AudioStory::find($request->id);

            if ($request->hasFile('image')) {
                // @unlink($audio_story->image);
                // $audio_story->image = 'storage/app/public/'.Storage::disk('public')->putFile('audio_story/image', $request->file('image'));
                @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $audio_story->image));  
                $path = Storage::disk('s3')->put('audio_story/image', $request->image);
                $audio_story->image = Storage::disk('s3')->url($path);
            }

            if ($request->hasFile('file')) {
                // @unlink($audio_story->file);
                // $audio_story->file = 'storage/app/public/'.Storage::disk('public')->putFile('audio_story/audio', $request->file('file'));
                @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $audio_story->file));
                $file = explode(".", $request->file->getClientOriginalName());
                $path = Storage::disk('s3')->put('audio_story/'.@$file[0], $request->file);
                $audio_story->file = Storage::disk('s3')->url($path);
                $audio_story->duration = $request->duration;
            }
        }
        else
        {
            $audio_story = new AudioStory();
            if ($request->hasFile('image')) {
                // $audio_story->image = 'storage/app/public/'.Storage::disk('public')->putFile('audio_story/image', $request->file('image'));
                $path = Storage::disk('s3')->put('audio_story/image', $request->image);
                $audio_story->image = Storage::disk('s3')->url($path);
            }

            if ($request->hasFile('file')) {
                // $audio_story->file = 'storage/app/public/'.Storage::disk('public')->putFile('audio_story/audio', $request->file('file'));
                $file = explode(".", $request->file->getClientOriginalName());
                $path = Storage::disk('s3')->put('audio_story/'.@$file[0], $request->file);
                $audio_story->file = Storage::disk('s3')->url($path);
                $audio_story->duration = $request->duration;
            }
        }

        $audio_story->title = $request->title;
        $audio_story->genre_id = $request->genre_id;
        $audio_story->story_id = $request->story_id;
        $audio_story->plot_id = $request->plot_id;
        $audio_story->narration_id = $request->narration_id;
        $audio_story->is_active = $request->is_active;
        $audio_story->save();

        if($audio_story->id > 0)
        {
            AudioStoryTag::where('audio_story_id', $audio_story->id)->whereNotIn('tag_id', $request->tag_ids)->delete();

            foreach($request->tag_ids as $tag_id)
            {
                $tag = Tag::where("id", $tag_id)->first();

                $tagid = $tag_id; 

                if(!$tag)
                {
                    $tag = new Tag();
                    $tag->name = $tag_id;
                    $tag->save();
                    $tagid = $tag->id;
                }

                if(!AudioStoryTag::where('audio_story_id', $audio_story->id)->where('tag_id', $tag_id)->first())
                {
                    $data = new AudioStoryTag();
                    $data->audio_story_id = $audio_story->id;
                    $data->tag_id = $tagid;
                    $data->save();
                }
            }
        }

        if(!isset($request->id) || $request->id <= 0)
        {
            $deviceTokens = User::where(['is_deleted' => 0, 'push_notify' => 1])->whereNotNull('deviceToken')->pluck('deviceToken')->toArray();

            $deviceTokens = array_chunk($deviceTokens, 100);

            foreach($deviceTokens as $tokens)
            {
                $payload = array(
                    "registration_ids" => $tokens,
                    "notification" => array(
                        "title" => $request->title,
                        "body" => "Added new Audio Story: ".$request->title,
                        "audio_story_id" => $audio_story->id
                    )
                );

                if ($request->hasFile('image'))
                    $payload["notification"]["icon"] = $audio_story->image;

                // return json_encode($payload);

                $curl = curl_init();

                curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://fcm.googleapis.com/fcm/send',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode($payload),
                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/json',
                    'Authorization: key='.env('FIREBASE_SERVER_KEY')
                ),
                ));

                $response = curl_exec($curl);

                curl_close($curl);
            }
        }

        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        // $data['genres']  =   Genre::orderBy('created_at', 'DESC')->where('is_active', 1)->whereNull('deleted_at')->pluck('name', 'id');
        // $data['stories']  =   Story::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        // $data['plots']  =   Plot::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        // $data['narrations']  =   Narration::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        $data['tags']  =   Tag::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        $data['replace_tags']  =  1;
        return view('admin.audio_story.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return AudioStory::with('audio_story_tags')->where('id', $id)->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AudioStoryRequest $request, $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $audio_story = AudioStory::find( $id );

        if($audio_story->image && $audio_story->image != '')
        {
            // @unlink($audio_story->image);
            @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $audio_story->image));
        }

        if($audio_story->file && $audio_story->file != '')
        {
            // @unlink($audio_story->file);
            @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $audio_story->file));
        }

        $audio_story->delete();

        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        // $data['genres']  =   Genre::orderBy('created_at', 'DESC')->where('is_active', 1)->whereNull('deleted_at')->pluck('name', 'id');
        // $data['stories']  =   Story::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        // $data['plots']  =   Plot::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        // $data['narrations']  =   Narration::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        // $data['tags']  =   Tag::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        return view('admin.audio_story.list.content',$data);
    }

    public function updateStatus(Request $request)
    {
        $post                       =   (object)$request->post();  //echo '<pre>'; print_r($post); echo '</pre>'; die;
        $result                 =   AudioStory::where('id',$post->id)->update([$post->req => $post->value]);

        if($post->req == 'is_nonstop')
        {
            $data = new NonstopStories();
            $data->audio_story_id = $post->id;
            $data->type = 'Audio Story';
            $data->save();

            $data->order = $data->id;
            $data->save();

            $data['replace_tags']  =  0;

            /* $link_audio = LinkAudio::where('added_to_nonstop', 0)->whereNull('deleted_at')->orderBy('created_at', 'ASC')->first();

            if($link_audio)
            {
                $data = new NonstopStories();
                $data->link_audio_id = $link_audio->id;
                $data->type = 'Link Audio';
                $data->save();

                $data->order = $data->id;
                $data->save();

                LinkAudio::where('id', $link_audio->id)->update(['added_to_nonstop' => 1]);
            } */
        }

        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        // $data['genres']  =   Genre::orderBy('created_at', 'DESC')->where('is_active', 1)->whereNull('deleted_at')->pluck('name', 'id');
        // $data['stories']  =   Story::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        // $data['plots']  =   Plot::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        // $data['narrations']  =   Narration::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        // $data['tags']  =   Tag::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        return view('admin.audio_story.list.content',$data);
    }
}
