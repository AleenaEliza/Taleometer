<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plot;
use App\Models\AudioStory;
use App\Http\Requests\PlotRequest;
use Storage;

class PlotController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'Plots';
        $data['menuGroup']          =   'plots';
        $data['menu']               =   'plots'; 
        $data['plots']              =   Plot::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.plot.list',$data);
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
    public function store(PlotRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
        {
            $plot = Plot::find($request->id);

            if ($request->hasFile('image')) {
                // @unlink($plot->image);
                // $plot->image = 'storage/app/public/'.Storage::disk('public')->putFile('plot', $request->file('image'));
                @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $plot->image));  
                $path = Storage::disk('s3')->put('plot', $request->image);
                $plot->image = Storage::disk('s3')->url($path);
            }
        }
        else
        {
            $plot = new Plot();
            if ($request->hasFile('image')) {
                // $plot->image = 'storage/app/public/'.Storage::disk('public')->putFile('plot', $request->file('image'));
                $path = Storage::disk('s3')->put('plot', $request->image);
                $plot->image = Storage::disk('s3')->url($path);
            }
        }

        $plot->name = $request->name;
        $plot->save();

        $data['plots']              =   Plot::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.plot.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Plot::find($id);
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
    public function update(PlotRequest $request, $id)
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
        $t = AudioStory::where('plot_id', $id)->whereNull('deleted_at')->first();

        if($t)
            return 0;

        $plot = Plot::find( $id );

        if($plot->image && $plot->image != '')
        {
            // @unlink($plot->image);
            @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $plot->image)); 
        }

        $plot->delete();

        $data['plots']              =   Plot::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.masters.plot.list.content',$data);
    }
}
