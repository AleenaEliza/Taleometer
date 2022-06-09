<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PreferenceBubble;
use App\Models\PreferenceBubbleTag;
use App\Models\UserPreference;
use App\Models\PreferenceCategory;
use App\Models\Tag;
use App\Http\Requests\PreferenceBubbleRequest;
use Storage;

class PreferenceBubbleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'Preference Bubbles';
        $data['menuGroup']          =   'preference_bubble';
        $data['menu']               =   'preference_bubble'; 
        $data['preference_bubbles']              =   PreferenceBubble::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        $data['preference_categories']  =   PreferenceCategory::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        $data['preference_categories_search']  =   PreferenceCategory::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        $data['tags']  =   Tag::orderBy('created_at', 'DESC')->whereNull('deleted_at')->pluck('name', 'id');
        return view('admin.masters.preference_bubble.list',$data);
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
    public function store(PreferenceBubbleRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
        {
            $preference_bubble = PreferenceBubble::find($request->id);

            if ($request->hasFile('image')) {
                // @unlink($preference_bubble->image);
                // $preference_bubble->image = 'storage/app/public/'.Storage::disk('public')->putFile('preference_bubble', $request->file('image'));
                @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $preference_bubble->image));  
                $path = Storage::disk('s3')->put('preference_bubble', $request->image);
                $preference_bubble->image = Storage::disk('s3')->url($path);
            }
        }
        else
        {
            $preference_bubble = new PreferenceBubble();
            if ($request->hasFile('image')) {
                // $preference_bubble->image = 'storage/app/public/'.Storage::disk('public')->putFile('preference_bubble', $request->file('image'));
                $path = Storage::disk('s3')->put('preference_bubble', $request->image);
                $preference_bubble->image = Storage::disk('s3')->url($path);
            }
        }

        $preference_bubble->name = $request->name;
        $preference_bubble->preference_category_id = $request->preference_category_id;
        $preference_bubble->save();

        if($preference_bubble->id > 0)
        {
            if(@$request->tag_ids == "") $request->tag_ids =[];

            PreferenceBubbleTag::where('preference_bubble_id', $preference_bubble->id)->whereNotIn('tag_id', $request->tag_ids)->delete();

            foreach($request->tag_ids as $tag_id)
            {
                if(!PreferenceBubbleTag::where('preference_bubble_id', $preference_bubble->id)->where('tag_id', $tag_id)->first())
                {
                    $data = new PreferenceBubbleTag();
                    $data->preference_bubble_id = $preference_bubble->id;
                    $data->tag_id = $tag_id;
                    $data->save();
                }
            }
        }

        $data['preference_bubbles']              =   PreferenceBubble::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.preference_bubble.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return PreferenceBubble::with('preference_bubble_tags')->find($id);
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
    public function update(PreferenceBubbleRequest $request, $id)
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
        $t = PreferenceBubbleTag::where('preference_bubble_id', $id)->first();

        if($t)
            return 0;

        $t = UserPreference::where('preference_bubble_id', $id)->first();

        if($t)
            return -1;

        $preference_bubble = PreferenceBubble::find( $id );

        if($preference_bubble->image && $preference_bubble->image != '')
        {
            // @unlink($preference_bubble->image);
            @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $preference_bubble->image));
        }

        $preference_bubble->delete();

        $data['preference_bubbles']              =   PreferenceBubble::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.preference_bubble.list.content',$data);
    }
}
