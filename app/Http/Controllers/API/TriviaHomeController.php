<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CategoryTrivia;
use App\Models\TriviaPost;
use App\Models\Country;
use Validator;

class TriviaHomeController extends Controller
{
    public function home(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
        {
            return response()->json(["status" => false, "message" => "Unauthorized."]);
        }

        $data=$cat_list=[];
        $user_id = $user->id;
        //$today_quiz = TriviaPost::whereDate('created_at', date('Y-m-d'))->whereNotIn('id',function($query) use ($user_id){$query->select('post_id')->from('trivia_post_logs')->where('user_id',$user_id)->where('is_active',1)->where('is_deleted',0);})->where('is_deleted',0)->where('is_active',1)->get();
        //$today_only_post = TriviaPost::whereDate('created_at', date('Y-m-d'))->where('is_deleted',0)->where('is_active',1)->count();
        
        $today_quiz = TriviaPost::whereNotIn('id',function($query) use ($user_id){$query->select('post_id')->from('trivia_post_logs')->where('user_id',$user_id)->where('is_active',1)->where('is_deleted',0);})->where('is_deleted',0)->where('is_active',1)->where(function ($query) {
        $query->where('schedule', '<', date('Y-m-d H:i:s'))
            ->orWhereNull('schedule');
    })->whereIn('category',function($query){$query->select('id')->from('category_trivia')->where('is_active',1)->where('is_deleted',0);})->get();
        $today_only_post = TriviaPost::where('is_deleted',0)->where('is_active',1)->where(function ($query) {
        $query->where('schedule', '<', date('Y-m-d H:i:s'))
            ->orWhereNull('schedule');
    })->whereIn('category',function($query){$query->select('id')->from('category_trivia')->where('is_active',1)->where('is_deleted',0);})->count();
        $daily['title'] = 'Daily';
        $daily['post_count'] = count($today_quiz);
        $daily['post_count_today']=$today_only_post;
        if($today_only_post==0)
        {
            $daily['post_msg'] = 'No new daily questions'; 
        }
        else
        {
             $daily['post_msg'] = 'New '.$today_only_post.' daily questions'; 
        }
        $category_daily = CategoryTrivia::where('is_active',1)->where('is_deleted',0)->where('category_name','Daily')->first();
        if($category_daily)
        {
         $daily['image'] = url($category_daily->image); 
         $daily['image_path'] =$category_daily->image; 
        }
        else
        {
           $daily['image'] = '';  
           $daily['image_path'] ='';
        }
        $data['trivia_daily'] = $daily;

        $category_list = CategoryTrivia::where('is_active',1)->where('is_deleted',0)->whereIn('id',function($query){
            $query->select('category')->from('trivia_posts')->where('is_active',1)->where('is_deleted',0)->where(function ($querys) {
        $querys->where('schedule', '<', date('Y-m-d H:i:s'))
            ->orWhereNull('schedule');
    });
        })->orderBy('sort_order','ASC')->get();

        foreach($category_list as $row)
        {
            $list['category_id']      =$row->id;
            $list['category_name']    =ucfirst($row->category_name);
            $list['post_count']       =$row->post_count($row->id,$user_id); 
            $list['category_image']   =url($row->image);
            $list['category_image_path']=$row->image;
            $cat_list[]               =$list;
        }
        $data['trivia_category'] = $cat_list;

        return response()->json(["status" => true, "message" => "Trivia Home.", "data" => $data]);
    }
    public function country(Request $request)
    {
        $data=[];
        $country = Country::all();
        foreach($country as $row)
        {
            $list['country_code'] = $row->phonecode;
            $list['country_name'] = $row->country_name;
            $data[]               = $list;
        }
        return response()->json(["status" => true, "message" => "Country.", "data" => $data]);
    }
}
