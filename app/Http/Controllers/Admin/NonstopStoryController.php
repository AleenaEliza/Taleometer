<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NonstopStories;
use App\Http\Requests\NonstopStoryRequest;
use App\Models\AudioStory;
use App\Models\LinkAudio;
use App\Models\Genre;

class NonstopStoryController extends Controller
{
    public function index()
    {
        $data['title']              =   'Non Stop Stories';
        $data['menuGroup']          =   'non_stop_audio';
        $data['menu']               =   'non_stop_audio'; 
        $data['genres']              =   Genre::orderBy('created_at', 'DESC')->where('is_active', 1)->whereNull('deleted_at')->pluck('name', 'id');
        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->where('is_active', 1)->where('is_nonstop', 0)->whereNull('deleted_at')->get();
        $data['link_audios']              =   LinkAudio::orderBy('created_at', 'DESC')->where('added_to_nonstop', 0)->whereNull('deleted_at')->pluck('title', 'id');
        $data['nonstop_stories']              =   NonstopStories::orderBy('order', 'ASC')->orderBy('created_at', 'ASC')->orderBy('id', 'ASC')->whereNull('deleted_at')->get();
        $data['order'] = NonstopStories::max('order')+1;
        return view('admin.non_stop_audio.list',$data);
    }

    public function store(NonstopStoryRequest $request)
    {
        $nonstop = new NonstopStories();

        if(@$request->audio_story_id2 != '')
        {
            $nonstop->audio_story_id = $request->audio_story_id2;
            $nonstop->type = 'Audio Story';
            $nonstop->order = $request->position;
            AudioStory::where('id', $request->audio_story_id2)->update(['is_nonstop' => 1]);

            NonstopStories::where("order", ">=", $request->position)->increment("order");
        }

        else if(@$request->link_audio_id2 != '')
        {
            $nonstop->link_audio_id = $request->link_audio_id2;
            $nonstop->type = 'Link Audio';
            $nonstop->order = $request->position2;
            LinkAudio::where('id', $request->link_audio_id2)->update(['added_to_nonstop' => 1]);

            NonstopStories::where("order", ">=", $request->position2)->increment("order");
        }

        $nonstop->save();

        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->where('is_active', 1)->where('is_nonstop', 0)->whereNull('deleted_at')->get();
        $data['link_audios']              =   LinkAudio::orderBy('created_at', 'DESC')->where('added_to_nonstop', 0)->whereNull('deleted_at')->get();
        $data['nonstop_stories']              =   NonstopStories::orderBy('order', 'ASC')->orderBy('created_at', 'ASC')->orderBy('id', 'ASC')->whereNull('deleted_at')->get();
        $data['reset']              =   '1';
        $data['order'] = NonstopStories::max('order')+1;
        return view('admin.non_stop_audio.list.content',$data);
    }

    public function show($id)
    {
        $data = [];
        $data['genres']              =   Genre::orderBy('created_at', 'DESC')->where('is_active', 1)->whereNull('deleted_at')->get();
        $data['nonstop_audio']              =   NonstopStories::with(['audio_story', 'link_audio'])->find($id);
        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->where('is_active', 1)->where('is_nonstop', 0)->whereNull('deleted_at')->get();
        $data['link_audios']              =   LinkAudio::orderBy('created_at', 'DESC')->where('added_to_nonstop', 0)->whereNull('deleted_at')->get();

        return $data;
    }

    public function replace(Request $request)
    {
        $nonstop = NonstopStories::find($request->id);
        NonstopStories::where('id', $request->id)->update(['audio_story_id' => $request->audio_story_id]);
        AudioStory::where('id', $nonstop->audio_story_id)->update(['is_nonstop' => 0]);
        AudioStory::where('id', $request->audio_story_id)->update(['is_nonstop' => 1]);

        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->where('is_active', 1)->where('is_nonstop', 0)->whereNull('deleted_at')->get();
        $data['link_audios']              =   LinkAudio::orderBy('created_at', 'DESC')->where('added_to_nonstop', 0)->whereNull('deleted_at')->get();
        $data['reset']              =   '1';
        $data['nonstop_stories']              =   NonstopStories::orderBy('order', 'ASC')->orderBy('created_at', 'ASC')->orderBy('id', 'ASC')->whereNull('deleted_at')->get();
        $data['order'] = NonstopStories::max('order')+1;
        return view('admin.non_stop_audio.list.content',$data);
    }

    public function replaceLinkAudio(Request $request)
    {
        $nonstop = NonstopStories::find($request->id);
        NonstopStories::where('id', $request->id)->update(['link_audio_id' => $request->link_audio_id]);
        LinkAudio::where('id', $nonstop->link_audio_id)->update(['added_to_nonstop' => 0]);
        LinkAudio::where('id', $request->link_audio_id)->update(['added_to_nonstop' => 1]);

        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->where('is_active', 1)->where('is_nonstop', 0)->whereNull('deleted_at')->get();
        $data['link_audios']              =   LinkAudio::orderBy('created_at', 'DESC')->where('added_to_nonstop', 0)->whereNull('deleted_at')->get();
        $data['reset']              =   '1';
        $data['nonstop_stories']              =   NonstopStories::orderBy('order', 'ASC')->orderBy('created_at', 'ASC')->orderBy('id', 'ASC')->whereNull('deleted_at')->get();
        $data['order'] = NonstopStories::max('order')+1;
        return view('admin.non_stop_audio.list.content',$data);
    }

    public function destroy($id)
    {
        $data = NonstopStories::find($id);

        if($data)
        {
            NonstopStories::where("order", ">", $data->order)->decrement("order");

            $data->order = 0;
            $data->save();

            if($data->type == 'Audio Story')
                AudioStory::where('id', $data->audio_story_id)->update(['is_nonstop' => 0]);
            else
                LinkAudio::where('id', $data->link_audio_id)->update(['added_to_nonstop' => 0]);

            $data->delete();
        }
        
        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->where('is_active', 1)->where('is_nonstop', 0)->whereNull('deleted_at')->get();
        $data['link_audios']              =   LinkAudio::orderBy('created_at', 'DESC')->where('added_to_nonstop', 0)->whereNull('deleted_at')->get();
        $data['reset']              =   '1';
        $data['nonstop_stories']              =   NonstopStories::orderBy('order', 'ASC')->orderBy('created_at', 'ASC')->orderBy('id', 'ASC')->whereNull('deleted_at')->get();
        $data['order'] = NonstopStories::max('order')+1;
        return view('admin.non_stop_audio.list.content',$data);
    }
}
