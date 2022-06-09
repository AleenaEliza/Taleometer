<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tag;
use App\Models\PreferenceBubble;
use App\Models\PreferenceBubbleTag;
use App\Models\AudioStoryTag;
use App\Http\Requests\TagRequest;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'Tags';
        $data['menuGroup']          =   'tags';
        $data['menu']               =   'tags'; 
        $data['tags']              =   Tag::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        $data['preference_bubbles']              =   PreferenceBubble::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        return view('admin.masters.tag.list',$data);
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
    public function store(TagRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
            $tag = Tag::find($request->id);
        else
            $tag = new Tag();

        $tag->name = $request->name;
        $tag->save();

        if($tag->id > 0)
        {
            if(@$request->preference_bubble_ids == "") $request->preference_bubble_ids =[];

            PreferenceBubbleTag::where('tag_id', $tag->id)->whereNotIn('preference_bubble_id', $request->preference_bubble_ids)->delete();

            foreach($request->preference_bubble_ids as $preference_bubble_id)
            {
                if(!PreferenceBubbleTag::where('tag_id', $tag->id)->where('preference_bubble_id', $preference_bubble_id)->first())
                {
                    $data = new PreferenceBubbleTag();
                    $data->preference_bubble_id = $preference_bubble_id;
                    $data->tag_id = $tag->id;
                    $data->save();
                }
            }
        }

        $data['tags']              =   Tag::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.tag.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Tag::with('preference_bubble_tags')->find($id);
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
    public function update(TagRequest $request, $id)
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
        $t = AudioStoryTag::where('tag_id', $id)->first();

        if($t)
            return 0;
            
        $tag = Tag::find( $id );
        $tag->delete();

        $data['tags']              =   Tag::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.tag.list.content',$data);
    }

    public function updateStatus(Request $request)
    {
        $post                       =   (object)$request->post();  //echo '<pre>'; print_r($post); echo '</pre>'; die;
        $result                 =   Tag::where('id',$post->id)->update([$post->req => $post->value]);

        $data['tags']              =   Tag::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.tag.list.content',$data);
    }
}
