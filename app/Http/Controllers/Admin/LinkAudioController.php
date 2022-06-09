<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LinkAudio;
use App\Http\Requests\LinkAudioRequest;
use Storage;

class LinkAudioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'Link Audios';
        $data['menuGroup']          =   'link_audio';
        $data['menu']               =   'link_audio'; 
        $data['link_audios']              =   LinkAudio::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.link_audio.list',$data);
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
    public function store(LinkAudioRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
        {
            $link_audio = LinkAudio::find($request->id);

            if ($request->hasFile('file')) {
                // @unlink($link_audio->file);
                // $link_audio->file = 'storage/app/public/'.Storage::disk('public')->putFile('link_audio', $request->file('file'));
                @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $link_audio->file));
                $path = Storage::disk('s3')->put('link_audio', $request->file);
                $link_audio->file = Storage::disk('s3')->url($path);
            }
        }
        else
        {
            $link_audio = new LinkAudio();
            if ($request->hasFile('file')) {
                // $link_audio->file = 'storage/app/public/'.Storage::disk('public')->putFile('link_audio', $request->file('file'));
                $path = Storage::disk('s3')->put('link_audio', $request->file);
                $link_audio->file = Storage::disk('s3')->url($path);
            }
        }

        $link_audio->title = $request->title;
        $link_audio->save();

        $data['link_audios']              =   LinkAudio::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.link_audio.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return LinkAudio::where('id', $id)->first();
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
    public function update(LinkAudioRequest $request, $id)
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
        $link_audio = LinkAudio::find( $id );

        if($link_audio->file && $link_audio->file != '')
        {
            // @unlink($link_audio->file);
            @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $link_audio->file));
        }

        $link_audio->delete();

        $data['link_audios']              =   LinkAudio::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.link_audio.list.content',$data);
    }
}
