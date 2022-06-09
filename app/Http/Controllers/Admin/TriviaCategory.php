<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CategoryTrivia;
use Storage;
use App\Http\Requests\TrivaCategoryRequest;
use Session;
use DB;
use App\Rules\Name;
use Validator;

class TriviaCategory extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');


    }
    public function index()
    {
        $data['title']              =   'Category';
        $data['menuGroup']          =   'trivia';
        $data['menu']               =   'trivia-category'; 
        $data['category']           =   CategoryTrivia::orderBy('created_at', 'DESC')->where('is_deleted',0)->get();
        $data['category_sort']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_deleted',0)->where('category_name','!=','Daily')->where('id','!=',1)->get();
        return view('admin.trivia.category.list',$data);
    }

    public function save_category(TrivaCategoryRequest $request)
    {
        
        if(isset($request->id) && $request->id > 0)
        {
            $category = CategoryTrivia::find($request->id);
            $category->id = $request->id;
            if ($request->hasFile('image')) {
                // @unlink($category->image);
                // $category->image = 'storage/app/public/'.Storage::disk('public')->putFile('trivia_category', $request->file('image'));
                
            $path = "trivia_category/".$category->id."/image";
            $imgname = "trivia_category".date('YmdHis').rand(100,999).".".$request->image->getClientOriginalExtension();
            $file =$request->file('image');
            Storage::disk('s3')->delete($path."/".$imgname);
            $file->storeAs($path,$imgname,'s3');
            $category->image = Storage::disk('s3')->url($path."/".$imgname);
            }
        }
        else
        {
            $category = new CategoryTrivia();
            
            if(CategoryTrivia::count()>0)
            {
            $sort = $category->orderBy('sort_order','DESC')->first()->sort_order;
            $sort_order= $sort+1;
            }
            else
            {
             $sort_order= 1;
            }
            
          
            
            $category->sort_order=$sort_order;
            $category->is_active=1;
            $category->is_deleted=0;
            if ($request->hasFile('image')) {
                //$category->image = 'storage/app/public/'.Storage::disk('public')->putFile('trivia_category', $request->file('image'));
                $catidlasts = CategoryTrivia::orderBy('id','desc')->first()->id;
                $catidlast  = $catidlasts+1;
                $path = "trivia_category/".$catidlast."/image";
            $imgname = "trivia_category".date('YmdHis').rand(100,999).".".$request->image->getClientOriginalExtension();
            $file =$request->file('image');
            Storage::disk('s3')->delete($path."/".$imgname);
            $file->storeAs($path,$imgname,'s3');
            $category->image = Storage::disk('s3')->url($path."/".$imgname);
           
             
            }
            
            
        }
        $category->category_name = $request->name;
        $category->save();
        
       

        $data['category']              =   CategoryTrivia::orderBy('created_at', 'DESC')->where('is_deleted',0)->get();
        $data['category_sort']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_deleted',0)->where('category_name','!=','Daily')->where('id','!=',1)->get();

        return view('admin.trivia.category.list.content',$data);
    }

    public function view_category($id)
    {
        return CategoryTrivia::where('id', $id)->first();
    }

    public function delete_category($id)
    {
        $update = CategoryTrivia::where('id', $id)->update(['is_active'=>0,'is_deleted'=>1]);
        $data['category']              =   CategoryTrivia::orderBy('created_at', 'DESC')->where('is_deleted',0)->get();
        $data['category_sort']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_deleted',0)->where('category_name','!=','Daily')->where('id','!=',1)->get();
        return view('admin.trivia.category.list.content',$data);
    }

    public function updateStatus(Request $request)
    {
        $post                       =   (object)$request->post();  //echo '<pre>'; print_r($post); echo '</pre>'; die;
        if($post->req == 'is_active')
        {
        $result                 =   CategoryTrivia::where('id',$post->id)->update([$post->req => $post->value]);
        }
        $data['category']              =   CategoryTrivia::orderBy('created_at', 'DESC')->where('is_deleted',0)->get();
        $data['category_sort']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_deleted',0)->where('category_name','!=','Daily')->where('id','!=',1)->get();
        return view('admin.trivia.category.list.content',$data);

        
    }

    public function sort_order(Request $request)
    {
        $id_ary = explode(",",$request->row_order);
       
        for($i=1;$i<=count($id_ary);$i++) 
        {
            CategoryTrivia::where('id', $id_ary[$i-1])
            ->update(['sort_order' => $i]);
            
        }
        Session::flash('message', ['text'=>'Sorted successfully','type'=>'success']);
        $data['category']           =   CategoryTrivia::orderBy('created_at', 'DESC')->where('is_deleted',0)->get();
        $data['category_sort']           =   CategoryTrivia::orderBy('sort_order', 'ASC')->where('is_deleted',0)->where('category_name','!=','Daily')->where('id','!=',1)->get();
        return redirect()->route('trivia.category');

    }
}
