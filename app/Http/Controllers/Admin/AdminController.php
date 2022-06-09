<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
// use Intervention\Image\Facades\Image;
// use Intervention\Image\ImageManagerStatic as Image;

use Session;
use Storage;
use DB;
use App\Rules\Name;
use App\Models\User;
use Validator;
use Intervention\Image\Facades\Image;

class AdminController extends Controller
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
   
    
    function profile(){
        return view('admin.profile');
    }

    function validateUser(Request $request){
        $profile                =   $request->post('profile');
        $rules                  =   [
                                        'fname'                 =>  ['required', 'string','max:100', new Name],
                                        'email'                 =>  'required|string|email|max:100',
                                        'phone'                 =>  'required|numeric|digits_between:7,12',
                                    ];
        if($profile['lname']   !=  ''){ $rules['lname']        =   ['required', 'string','max:100', new Name]; }
        $validator              =   Validator::make($profile,$rules);
        $validEmail             =   User::ValidateUnique('email',(object)$profile,auth()->user()->id);
        $validPhone             =   User::ValidatePhone('phone',(object)$profile,auth()->user()->id);
        if ($validator->fails()) {
           foreach($validator->messages()->getMessages() as $k=>$row){ $error[$k] = $row[0]; }
        }
        if($validEmail){ $error['email']    =   $validEmail; }
        if($validPhone){ $error['phone']    =   $validPhone; }
        if(isset($error)) { return $error; }else{ return 'success'; }
    }
    
    function saveProfile(Request $request){
        $profile                =   User::where('id',auth()->user()->id)->update($request->post('profile'));
        /* if($request->file('avatar') && $request->file('avatar') != ''){
            $image = $request->file('avatar');
            $input['imagename'] = 'avatar.'.$image->extension();
            $path               =   '/app/public/user/'.auth()->user()->id;
            $destinationPath = storage_path($path.'/thumbnail');
            $destinationPath = storage_path($path);
            $image->move($destinationPath, $input['imagename']);
        
            User::where('id',auth()->user()->id)->update(['avatar'=>$path.'/'.$input['imagename']]); 
            } */
        if($request->file('avatar') && $request->file('avatar') != ''){
                /* $image = $request->file('avatar');
                $input['imagename'] = 'avatar.'.$image->extension();
                $path               =   '/app/public/user/'.auth()->user()->id;
                $destinationPath = storage_path($path.'/thumbnail');
                $img = Image::make($image->path());
                if (!file_exists($destinationPath)) { mkdir($destinationPath, 755, true);}
                $img->resize(150, 150, function ($constraint) {
                    $constraint->aspectRatio();
                })->save($destinationPath.'/'.$input['imagename']);
                $destinationPath = storage_path($path);
                $image->move($destinationPath, $input['imagename']); */
                // $avatar = 'storage/app/public/'.Storage::disk('public')->putFile('user', $request->file('avatar'));
                if(auth()->user()->avatar != null && auth()->user()->avatar != '')
                    @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", auth()->user()->avatar));  
                $path = Storage::disk('s3')->put('user', $request->avatar);
                $avatar = Storage::disk('s3')->url($path);
                User::where('id',auth()->user()->id)->update(['avatar'=>$avatar]); 
            }
        if($profile){   return      back()->with('success',' Profile updated successfully! '); }else{ return back(); }
    }
    
    function validatePassword(Request $request){
        $post                   =   (object)$request->post();
        $validator              =   Validator::make($request->post(),['curr_password' => 'required|string|regex:/^\S*$/u','password' => 'required|string|min:6|regex:/^\S*$/u|confirmed']);
        $user                   =   User::where('id',auth()->user()->id)->first();
        if ($validator->fails()) {
           foreach($validator->messages()->getMessages() as $k=>$row){ $error[$k] = $row[0]; }
        }
    
        if (Hash::check($request->curr_password, auth()->user()->password)) {
        }else{ $error['curr_password'] = 'Invalid current password'; }
        if(isset($error)) { return $error; }else{ return 'success';  }
    }
    
    function savePassword(Request $request){
        $res        =   User::where('id',auth()->user()->id)->update(['password' => Hash::make($request->post('password'))]);
        if($res){ return 'success'; }else{ return 'error'; }
    }
    
    function adminLogout(){ 
        Auth::logout(); return redirect('admin/login')->header('Cache-Control', 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0');
    }
    
    
    
        
    
  
}
