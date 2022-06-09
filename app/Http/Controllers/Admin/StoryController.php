<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Story;
use App\Models\AudioStory;
use App\Http\Requests\StoryRequest;
use Storage;

class StoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'Stories';
        $data['menuGroup']          =   'stories';
        $data['menu']               =   'stories'; 
        $data['stories']              =   Story::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.story.list',$data);
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoryRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
        {
            $story = Story::find($request->id);

            if ($request->hasFile('image')) {
                // @unlink($story->image);
                // $story->image = 'storage/app/public/'.Storage::disk('public')->putFile('story', $request->file('image'));
                @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $story->image));  
                $path = Storage::disk('s3')->put('story', $request->image);
                $story->image = Storage::disk('s3')->url($path);
            }
        }
        else
        {
            $story = new Story();
            if ($request->hasFile('image')) {
                // $story->image = 'storage/app/public/'.Storage::disk('public')->putFile('story', $request->file('image'));
                $path = Storage::disk('s3')->put('story', $request->image);
                $story->image = Storage::disk('s3')->url($path);
            }
        }

        $story->name = $request->name;
        $story->save();

        $data['stories']              =   Story::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.story.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Story::find($id);
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
    public function update(StoryRequest $request, $id)
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
        $t = AudioStory::where('story_id', $id)->whereNull('deleted_at')->first();

        if($t)
            return 0;

        $story = Story::find( $id );

        if($story->image && $story->image != '')
        {
            // @unlink($story->image);
            @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $story->image)); 
        }

        $story->delete();

        $data['stories']              =   Story::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.story.list.content',$data);
    }
}
