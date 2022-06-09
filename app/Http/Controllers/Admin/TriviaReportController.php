<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CategoryTrivia;
use App\Models\TriviaPost;
use Storage;
use App\Http\Requests\TrivaPostsRequest;
use App\Models\TriviaPostComment;
use App\Models\User;
use App\Models\TriviaTag;
use Session;
use DB;
use App\Rules\Name;
use Validator;
use Carbon\Carbon;

class TriviaReportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index()
    {
        $data['title']              =   'Trivia Report';
        $data['menuGroup']          =   'trivia';
        $data['menu']               =   'trivia-report'; 
        $data['view_type']          =   'view';
        $data['category']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_active',1)->where('is_deleted',0)->where('category_name','!=','Daily')->get();
        $data['question']           =   TriviaPost::where('is_deleted',0)->groupBy('question')->get();
        $data['posts']              =   TriviaPostComment::where('is_answer',1)->where('is_active',1)->where('is_deleted',0)->whereIn('post_id',function($query){$query->select('id')->from('trivia_posts')->where('is_deleted',0);})->orderBy('id','DESC')->get();
        return view('admin.trivia.report.list',$data);
    }
    
    public function filter_report(Request $request)
    {
        $posts                   =   (object)$request->post();
        
        $commentpost             =    TriviaPostComment::where('is_answer',1)->whereIn('post_id',function($query){$query->select('id')->from('trivia_posts')->where('is_deleted',0);})->where('is_active',1)->where('is_deleted',0);
        
        if($posts->category)
        {
          $postids = TriviaPost::where('category',$posts->category)->where('is_active',1)->where('is_deleted',0)->pluck('id');
          $commentpost = $commentpost->whereIn('post_id',$postids);
        }
        
        if($posts->from)
        {
            $start = Carbon::parse($posts->from);
            $from  = $start->format('Y-m-d');
            $commentpost = $commentpost->whereDate('created_at','>=',$from);
           // return $from;die;
        }
        
        if($posts->to)
        {
            $end = Carbon::parse($posts->to);
            $to  = $end->format('Y-m-d');
            $commentpost = $commentpost->whereDate('created_at','<=',$to);
        }
        
        if($posts->question)
        {
            $postids_q = TriviaPost::where('question',$posts->question)->where('is_active',1)->where('is_deleted',0)->pluck('id');
            $commentpost = $commentpost->whereIn('post_id',$postids_q);
            //return $commentpost->get();die;
        }
        
        
        $data['posts']            =  $commentpost->orderBy('id','DESC')->get();
        return view('admin.trivia.report.content',$data);
    }
}
