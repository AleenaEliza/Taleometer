<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Genre;
use App\Models\NonstopStories;
use App\Models\AudioStory;
use App\Http\Requests\GenreRequest;


class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'Genres';
        $data['menuGroup']          =   'genres';
        $data['menu']               =   'genres'; 
        $data['genres']              =   Genre::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.genre.list',$data);
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
    public function store(GenreRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
            $genre = Genre::find($request->id);
        else
            $genre = new Genre();

        $genre->name = $request->name;
        $genre->is_active = $request->is_active;
        $genre->save();

        $data['genres']              =   Genre::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.genre.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Genre::find($id);
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
    public function update(GenreRequest $request, $id)
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
        $t = AudioStory::where('genre_id', $id)->whereNull('deleted_at')->first();

        if($t)
            return 0;

        $genre = Genre::find( $id );
        $genre->delete();

        NonstopStories::whereHas('audio_story', function ($q) use ($id) {
            $q->where('genre_id', $id);
          })->delete();

        $data['genres']              =   Genre::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.genre.list.content',$data);
    }

    public function updateStatus(Request $request)
    {
        $post                       =   (object)$request->post();  //echo '<pre>'; print_r($post); echo '</pre>'; die;
        $t = AudioStory::where('genre_id', $post->id)->whereNull('deleted_at')->first();

        if($t && $post->value == '0')
            return 0;

        $result                 =   Genre::where('id',$post->id)->update([$post->req => $post->value]);

        $data['genres']              =   Genre::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.genre.list.content',$data);
    }
}
