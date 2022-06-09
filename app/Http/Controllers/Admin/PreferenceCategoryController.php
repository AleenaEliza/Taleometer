<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PreferenceCategory;
use App\Models\PreferenceBubble;
use App\Http\Requests\PreferenceCategoryRequest;

class PreferenceCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'Preference Categories';
        $data['menuGroup']          =   'preference_category';
        $data['menu']               =   'preference_category'; 
        $data['preference_categories']              =   PreferenceCategory::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.preference_category.list',$data);
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
    public function store(PreferenceCategoryRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
            $preference_category = PreferenceCategory::find($request->id);
        else
            $preference_category = new PreferenceCategory();

        $preference_category->name = $request->name;
        $preference_category->save();

        $data['preference_categories']              =   PreferenceCategory::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.preference_category.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return PreferenceCategory::find($id);
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
    public function update(PreferenceCategoryRequest $request, $id)
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
        $t = PreferenceBubble::where('preference_category_id', $id)->whereNull('deleted_at')->first();

        if($t)
            return 0;

        $preference_category = PreferenceCategory::find( $id );
        $preference_category->delete();

        $data['preference_categories']              =   PreferenceCategory::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.preference_category.list.content',$data);
    }

    public function updateStatus(Request $request)
    {
        $post                       =   (object)$request->post();  //echo '<pre>'; print_r($post); echo '</pre>'; die;
        $result                 =   PreferenceCategory::where('id',$post->id)->update([$post->req => $post->value]);

        $data['preference_categories']              =   PreferenceCategory::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.preference_category.list.content',$data);
    }
}
