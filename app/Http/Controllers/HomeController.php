<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\IndividualContractor;
use App\Models\AudioStory;
use App\Models\AudioStoryHistory;
use App\Models\Log;
use App\Models\Genre;
use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $data['title']              =   'Dashboard';
        $data['menuGroup']          =   'dashboard';
        $data['menu']               =   'dashboard'; 
        $data['customer']           =   User::where('is_deleted',0)->where('is_active',1)->where('otp_verified', 1)->whereHas('role', function($q) { $q->where('name', 'Customer'); })->count();
        $data['audio_story']        =   AudioStory::whereNull('deleted_at')->where('is_active',1)->count();
        $data['active_customer']    =   User::where('is_deleted',0)->where('is_active',1)->where('current_active', 1)->where('otp_verified', 1)->whereHas('role', function($q) { $q->where('name', 'Customer'); })->count();
        $data['today_customer']    =   User::where('is_deleted',0)->where('is_active',1)->where('created_at', 'like', '%' . date('Y-m-d') . '%')->whereHas('role', function($q) { $q->where('name', 'Customer'); })->count();

        // User Chart
        $uc['x'] = ["1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM", "12:00 AM"];
        $date = date('Y-m-d');

        $uc['y'] = array();

        foreach($uc['x'] as $x)
        {
            $dateTmp = $date.' '.date('H:', strtotime($x));
            $uc['y'][] = count(Log::where('created_at', 'LIKE', '%'.$dateTmp.'%')->groupBy('user_id')->get());
        }

        $data['uc'] = $uc;

        // Access Chart

        $colors = ["blue", "orange", "gray", "black", "purple", "red", "green", "yellow"];
        $time = strtotime(date('Y-m-01'));

        $ac['x'] = [date('F', strtotime("-11 month", $time)), date('F', strtotime("-10 month", $time)), date('F', strtotime("-9 month", $time)), date('F', strtotime("-8 month", $time)), date('F', strtotime("-7 month", $time)), date('F', strtotime("-6 month", $time)), date('F', strtotime("-5 month", $time)), date('F', strtotime("-4 month", $time)), date('F', strtotime("-3 month", $time)), date('F', strtotime("-2 month", $time)), date('F', strtotime("-1 month", $time)), date('F')];

        $ac['genres'] = Genre::where('is_active', 1)->whereNull('deleted_at')->get();

        $ac['y'] = array();

        $i=0;
        foreach($ac['genres'] as $genre)
        {
            $date = date('Y');

            if(date('m') < 12)
                $date -= 1;
                
            $tmp = array(
                "data" => array(),
                "backgroundColor" => $colors[$i++],
                "label" => $genre->name
            );
            
            foreach($ac['x'] as $x)
            {
                $dateTmp = $date.'-'.date('m', strtotime($x." 01"));

                if(date('m', strtotime($x." 01")) == "12")
                    $date += 1;

                $tmp['data'][] = AudioStoryHistory::whereHas('audio_story', function($q) use($genre) { $q->where('genre_id', $genre->id); })->where('created_at', 'LIKE', '%'.$dateTmp.'%')->count();
            }

            $ac['y'][] = $tmp;
        }

        $data['ac'] = $ac;

        return view('admin.dashboard',$data);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function insights($type = 'listeners')
    {
        $data['title']              =   'Insights';
        $data['menuGroup']          =   'insights';
        $data['menu']               =   'insights'; 

        $data['trending'] = AudioStoryHistory::whereHas('audio_story')->select("*", DB::raw('count(id) as count'))->groupBy('audio_story_id')->orderBy("count", "desc")->orderBy("created_at", "desc")->first();

        if($data['trending'])
        {
            $data['con_users'] = $this->custom_number_format(AudioStoryHistory::where(['audio_story_id' => $data['trending']->audio_story_id, 'is_playing' => 1])->count());
            $data['trending']->audio_story->views_count = $this->custom_number_format($data['trending']->audio_story->views_count);
        }


        // Inspire Chart

        $colors = ["blue", "orange", "gray", "black", "purple", "red", "green", "yellow"];
        $time = strtotime(date('Y-m-01'));

        $ic['x'] = [date('F', strtotime("-11 month", $time)), date('F', strtotime("-10 month", $time)), date('F', strtotime("-9 month", $time)), date('F', strtotime("-8 month", $time)), date('F', strtotime("-7 month", $time)), date('F', strtotime("-6 month", $time)), date('F', strtotime("-5 month", $time)), date('F', strtotime("-4 month", $time)), date('F', strtotime("-3 month", $time)), date('F', strtotime("-2 month", $time)), date('F', strtotime("-1 month", $time)), date('F')];

        $ic['genres'] = Genre::where('is_active', 1)->whereNull('deleted_at')->get();

        if($type == 'listeners')
            $ic['title'] = "No. Of Listeners";
        else if($type == 'pauses')
            $ic['title'] = "No. Of Pauses";
        else if($type == 'resumes')
            $ic['title'] = "No. Of Pauses & Resumes";
            
        $ic['type'] = $type;

        $ic['y'] = array();

        $i=0;
        foreach($ic['genres'] as $genre)
        {
            $date = date('Y');

            if(date('m') < 12)
                $date -= 1;
                
            $tmp = array(
                "data" => array(),
                "borderColor" => $colors[$i],
                "label" => $genre->name,
                "fill" => false,
                "pointBackgroundColor" => $colors[$i++],
                "lineTension" => 0
            );
            
            foreach($ic['x'] as $x)
            {
                
                $dateTmp = $date.'-'.date('m', strtotime($x." 01"));
                
                if(date('m', strtotime($x." 01")) == "12")
                    $date += 1;

                if($type == 'pauses')
                    $tmp['data'][] = AudioStoryHistory::whereHas('audio_story', function($q) use($genre) { $q->where('genre_id', $genre->id); })->where('created_at', 'LIKE', '%'.$dateTmp.'%')->sum('pause');
                else if($type == 'resumes')
                    $tmp['data'][] = AudioStoryHistory::whereHas('audio_story', function($q) use($genre) { $q->where('genre_id', $genre->id); })->where('created_at', 'LIKE', '%'.$dateTmp.'%')->sum('resume');
                else
                    $tmp['data'][] = count(AudioStoryHistory::whereHas('audio_story', function($q) use($genre) { $q->where('genre_id', $genre->id); })->where('created_at', 'LIKE', '%'.$dateTmp.'%')->groupBy('user_id')->get());
            }

            $ic['y'][] = $tmp;
        }

        $data['ic'] = $ic;

        return view('admin.insights',$data);
    }

    public function custom_number_format($n, $precision = 3) {
        if ($n < 1000) {
            // Anything less than a million
            $n_format = number_format($n);
        } else if ($n < 1000000) {
            // Anything less than a billion
            $n_format = number_format($n / 1000000, $precision) . 'K';
        } else if ($n < 1000000000) {
            // Anything less than a billion
            $n_format = number_format($n / 1000000, $precision) . 'M';
        } else {
            // At least a billion
            $n_format = number_format($n / 1000000000, $precision) . 'B';
        }
    
        return $n_format;
    }
}
