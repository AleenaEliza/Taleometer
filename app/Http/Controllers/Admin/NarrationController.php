<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Narration;
use App\Models\AudioStory;
use App\Http\Requests\NarrationRequest;
use Storage;

class NarrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'Narrations';
        $data['menuGroup']          =   'narrations';
        $data['menu']               =   'narrations'; 
        $data['narrations']              =   Narration::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.narration.list',$data);
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
    public function store(NarrationRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
        {
            $narration = Narration::find($request->id);

            if ($request->hasFile('image')) {
                // @unlink($narration->image);
                // $narration->image = 'storage/app/public/'.Storage::disk('public')->putFile('narration', $request->file('image'));
                @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $narration->image)); 
                $path = Storage::disk('s3')->put('narration', $request->image);
                $narration->image = Storage::disk('s3')->url($path);
            }
        }
        else
        {
            $narration = new Narration();
            if ($request->hasFile('image')) {
                // $narration->image = 'storage/app/public/'.Storage::disk('public')->putFile('narration', $request->file('image'));
                $path = Storage::disk('s3')->put('narration', $request->image);
                $narration->image = Storage::disk('s3')->url($path);
            }
        }

        $narration->name = $request->name;
        $narration->save();

        $data['narrations']              =   Narration::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.narration.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Narration::find($id);
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
    public function update(NarrationRequest $request, $id)
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
        $t = AudioStory::where('narration_id', $id)->whereNull('deleted_at')->first();

        if($t)
            return 0;

        $narration = Narration::find( $id );

        if($narration->image && $narration->image != '')
        {
            // @unlink($narration->image);
            @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $narration->image)); 
        }

        $narration->delete();

        $data['narrations']              =   Narration::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.narration.list.content',$data);
    }
}
