<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Role;
use App\Models\User;
use App\Models\Module;
use App\Models\UserRoleAction;
use App\Rules\Name;
use Validator;
use Session;
use Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;

class UserManagementController extends Controller
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

    public function roles()
    { 
        $data['title']              =   'Roles';
        $data['menuGroup']          =   'user-management';
        $data['menu']               =   'roles'; 
        $data['roles']              =   Role::orderBy('id', 'DESC')->where('is_deleted',0)->get();
        return view('admin.usermanagement.roles.list',$data);
    }
    public function users()
    { 
        $data['title']              =   'Users';
        $data['menuGroup']          =   'user-management';
        $data['menu']               =   'user'; 
        $data['users']              =   User::orderBy('id', 'DESC')->where('is_deleted',0)->where('otp_verified', 1)->get();
        return view('admin.usermanagement.users.list',$data);
    }
    public function assign_roles()
    { 
        $data['title']              =   'Assign Role';
        $data['menuGroup']          =   'user-management';
        $data['menu']               =   'assign_role'; 
        $data['roles']              =   User::orderBy('updated_at', 'DESC')->where('is_active',1)->where('is_deleted',0)->where('fname', '!=', "")->where('role_id','!=',NULL)->get();
        $data['users']              =   $this->getDropdownData(User::orderBy('id', 'desc')->where('id','!=',1)->where('is_active',1)->where('fname', '!=', "")->where('is_deleted',0)->get(),'id','fname','lname'); 
        $data['drproles']           =   $this->getDropdownData(Role::orderBy('name', 'ASC')->where('is_active',1)->where('is_deleted',0)->where('id','!=',1)->get(),'id','name');  
        return view('admin.usermanagement.assign_roles.list',$data);
    }
    function validateUserManagement(Request $request){  
        $post                   =   (object)$request->post();
        $dataKey                =   $post->arr_key; $name = $post->pg_name;
        $existName              =   $validEmail = $validPhone = $error = false;
        if($post->arr_key       ==  'user'){
            $rules          =   [
                                    'fname'                 =>  ['required', 'string','max:100', new Name],
                                    'email'                 =>  'required|string|email|max:100',
                                    'phone'                 =>  'required|numeric|digits_between:7,12',
                                ];
            if($post->user['lname'] != ''){ $rules['lname'] =   ['string','max:100', new Name]; }
            if($post->id    ==  0){ $rules['password']      =   'required|string|min:6'; }
            else{ if($post->user['password'] != ''){ $rules['password']=  'string|min:6'; }else{ unset($post->user['password']); } }
        }
        else if($post->arr_key       ==  'arole'){
            $rules              =   ['user' =>  'required','role_id' => 'required'];
        }
        else{
            $rules              =   ['name' =>  'required|string|max:100'];
        }
        $validator              =   Validator::make($post->$dataKey,$rules);
        if ($validator->fails()) {
           foreach($validator->messages()->getMessages() as $k=>$row){ $error[$k] = $row[0]; }
        } 
        if($error == false){ 
            if($name            ==  'roles'){
                $existName      =   Role::ValidateUnique($post->$dataKey['name'],$post->id);
            }else if($name      ==  'users'){
                $validEmail     =   User::ValidateUnique($post->$dataKey['email'],$post->id);
                $validPhone     =   User::ValidatePhone($post->$dataKey['phone'],$post->id);
            }
        }
        if($existName){ $error['name']    =   $existName; }
        else if($validEmail){ $error['email']    =   $validEmail; }
        else if($validPhone){ $error['phone']    =   $validPhone; }
        if($error) { return $error; }else{ return 'success'; } return 'success'; 
    }

   function updateStatus(Request $request){
        $post                       =   (object)$request->post();  //echo '<pre>'; print_r($post); echo '</pre>'; die;
        if($post->page              ==  'roles'){
            $t = User::where('role_id', $post->id)->where('is_deleted', 0)->first();

            if($t)
                return 0;

            $result                 =   Role::where('id',$post->id)->update([$post->req => $post->value]);
        }else if($post->page        ==  'users'){
            $result                 =   User::where('id',$post->id)->update([$post->req => $post->value]);
        }else if($post->page        ==  'assign_roles'){
            $result                 =   User::where('id',$post->id)->update([$post->req => $post->value]);
        }else if($post->page        ==  'access_privileges'){
            $result                 =   UserRoleAction::where('id',$post->id)->update([$post->req => $post->value]);
        }else{ $result              =   Role::where('id',$post->id)->update([$post->field => $post->value]); }
        if($post->field             ==  'status'){
            if($post->page          == 'roles'){
                User::where('role_id',$post->id)->update(['role_id' => null]);
                $data['roles'] =   Role::orderBy('id', 'DESC')->where('is_deleted',0)->get();
            }
            else if($post->page    ==  'users')
            {
                $data['users'] =   User::where('is_deleted',0)->orderBy('id', 'desc')->where('otp_verified', 1)->get();
            }
            else if($post->page    ==  'assign_roles')
            {
                $data['roles']              =   User::orderBy('id', 'DESC')->where('is_deleted',0)->where('role_id','!=',Null)->get();
            }
            else if($post->page    ==  'access_privileges')
            {
                 $data['privileges']        =   UserRoleAction::where('is_active',1)->where('is_deleted',0)->orderBy('id', 'desc')->get();
            }
            else{ $data['roles'] =   Role::orderBy('id', 'DESC')->where('is_deleted',0)->get(); }
            return view('admin.usermanagement.'.$post->page.'.list.content',$data);
        }
        if($post->field             ==  'active'){
            if($post->page          == 'roles'){
                User::where('role_id',$post->id)->update(['role_id' => null]);
                $data['roles'] =   Role::orderBy('id', 'DESC')->where('is_deleted',0)->get();
            }
            else if($post->page    ==  'users')
            {
                $data['users'] =   User::where('is_deleted',0)->orderBy('id', 'desc')->get();
            }
            else{ $data['roles'] =   Role::orderBy('id', 'DESC')->where('is_deleted',0)->get(); }
            return view('admin.usermanagement.'.$post->page.'.list.content',$data);
        }
        else{
            if($result){ return ['type'=>'success','id'=>$post->id]; }else{  return ['type'=>'warning','id'=>$post->id]; } 
        }
    }

    function checkEmail(Request $request)
    {
        if(@$request->id == 0) return 0;
        $user = User::where('email',  @$request->email)->where('id', "!=", @$request->id)->where('is_deleted', 0)->first();

        if($user)
            return 1;
        return 0;
    }

    function saveRole(Request $request){
            $post               =   (object)$request->post(); 
            $role               =   $post->role;
            if($post->id        >   0)
            {
                $role['updated_at'] = date('Y-m-d H:i:s');
                 Role::where('id',$post->id)->update($role);

                $insId = $post->id;
            }
            else
            { 
                $role['created_at'] = date('Y-m-d H:i:s'); 
                $insId = Role::create($role)->id; 
            }
            $data['roles']              =   Role::where('is_deleted',0)->orderBy('id', 'DESC')->get();
            return view('admin.usermanagement.roles.list.content',$data);
    }

    function editRole($id=0)
    {
            $data               =   Role::where('id',$id)->first();
            if($data){ foreach($data->getAttributes() as $k=>$row){ $res[$k] = $row; } } return $res;
    }

    function saveUser(Request $request){
            $post               =   (object)$request->post(); 
            $user               =   $post->user;
            if($post->id        >   0)
            {
                if($user['password']      ==  ''){ unset($user['password']); }
                else{ $user['password']   =   Hash::make($user['password']); }
                $user['updated_at'] = date('Y-m-d H:i:s');
                User::where('id',$post->id)->update($user);

                $insId = $post->id;
            }
            else
            { 
                $user['password']  =   Hash::make($post->user['password']);
                $user['created_at'] = date('Y-m-d H:i:s'); 
                $insId = User::create($user)->id; 
            }
             if($request->file('avatar') && $request->file('avatar') != ''){
                /* $image = $request->file('avatar');
                $input['imagename'] = 'avatar.'.$image->extension();
                $path               =   '/app/public/user/'.$insId;
                $destinationPath = storage_path($path.'/thumbnail');
                $img = Image::make($image->path());
                if (!file_exists($destinationPath)) { mkdir($destinationPath, 755, true);}
                $img->resize(150, 150, function ($constraint) {
                    $constraint->aspectRatio();
                })->save($destinationPath.'/'.$input['imagename']);
                $destinationPath = storage_path($path);
                $image->move($destinationPath, $input['imagename']); */
                // $avatar = 'storage/app/public/'.Storage::disk('public')->putFile('user', $request->file('avatar'));
                // User::where('id',$insId)->update(['avatar'=>$avatar]);
                // if($user['avatar'] != null && $user['avatar'] != '')
                //     @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $user['avatar']));  
                $path = Storage::disk('s3')->put('user', $request->avatar);
                $avatar = Storage::disk('s3')->url($path);
                User::where('id',$insId)->update(['avatar'=>$avatar]); 
            }
            $data['users']              =   User::orderBy('id', 'DESC')->where('is_deleted',0)->where('otp_verified', 1)->get();
            return view('admin.usermanagement.users.list.content',$data);
    }
    function editUser($id=0)
    {
            $data               =   User::where('id',$id)->first();
            if($data){ foreach($data->getAttributes() as $k=>$row){ $res[$k] = $row; } }  
            $res['password']        =   ''; return $res;
    }

    public function getDropdownData($data,$value,$label1,$label2='') { $res =   [];
        if($data){ foreach($data as $row){ $res[$row->$value]   =    $row->$label1.' '.$row->$label2; } } return $res; 
    }

    function saveAssignRole(Request $request){
            $post               =   (object)$request->post(); 
            $arole               =   $post->arole;
            $role['role_id'] = $arole['role_id'];
            $userId = $arole['user'];
            $role['updated_at'] = date('Y-m-d H:i:s');
            User::where('id',$userId)->update($role);
            $insId = $post->id;
          
            $data['users']           =    $this->getDropdownData(User::orderBy('id', 'desc')->where('role_id',NULL)->where('is_active',1)->where('fname', '!=', "")->where('is_deleted',0)->get(),'id','fname'); 
            $data['drproles']           =    $this->getDropdownData(Role::orderBy('name', 'ASC')->where('is_active',1)->where('is_deleted',0)->where('id','!=',1)->get(),'id','name'); 
            $data['roles']              =   User::orderBy('id', 'DESC')->where('id','!=',1)->where('is_deleted',0)->where('role_id','!=',Null)->get();
            return view('admin.usermanagement.assign_roles.list',$data);
    }

    function editAssignRole($id=0)
    {       
        $res                =   [];
        $data               =   User::where('id',$id)->first();
        if($data)
        { 
            $res['user'] = $data->id; 
            $res['role_id'] = $data->role_id;   
        }  
            return $res;
    }
    
     public function role_privileges()
    { 
        $data['title']              =   'Role Privileges';
        $data['menuGroup']          =   'user-management';
        $data['menu']               =   'role_privileges'; 
        $data['roles']              =   $this->getDropdownData(Role::orderBy('name', 'ASC')->where('is_active',1)->where('is_deleted',0)->where('id','!=',1)->get(),'id','name'); 
        $data['modules']           =    Module::getModules(); 
        // dd($data);
        return view('admin.usermanagement.role_privileges.list',$data);
    }

        function set_privileges(Request $request){
            $post               =   (object)$request->post(); 
            $role_id = $post->role_id;
            $modules = $post->modules;
            if($role_id !="") {

                // $exists = UserRoleAction::where('usr_role_id',$role_id)->orderBy('id', 'desc')->where('is_active',1)->where('is_deleted',0)->get();

                // if($exists){
                //     UserRoleAction::where('usr_role_id',$role_id)->update(array('is_deleted'=>1,'is_active'=>0));
                // }

                if(count($modules)>0) {
                    $valid_main = []; $valid_ar = [];
                    foreach($modules as $module=>$pages){

                        if(is_array($pages)){
                            
                            foreach($pages as $page=>$val){
                                
                                $exists_1 = UserRoleAction::where('usr_role_id',$role_id)->where('module_id',$module)->where('page_id',$page)->orderBy('id', 'desc')->where('is_active',1)->where('is_deleted',0)->first();
                                
                                if($exists_1){
                                    if(isset($exists_1->view)){ $view_opt = $exists_1->view; }else { $view_opt =0; }
                                    if(isset($exists_1->edit)){ $edit_opt = $exists_1->edit; }else { $edit_opt =0; }
                                    if(isset($exists_1->delete)) { $delete_opt = $exists_1->delete; }else{ $delete_opt =0; }
                                    if(isset($exists_1->approval)) { $approval_opt = $exists_1->approval;}else { $approval_opt =0; }
                                UserRoleAction::where('usr_role_id',$role_id)->where('module_id',$module)->where('page_id',$page)->update(array('is_deleted'=>1,'is_active'=>0));
                                }else{
                                  $view_opt = 0;$edit_opt = 0;$delete_opt = 0;$approval_opt = 0;  
                                }
                                $valid_ar[] = $page;
                                $insId = $this->createAction($role_id,$module,$page,$view_opt,$edit_opt,$delete_opt,$approval_opt);  
                            }
                            
                                $exists_r = UserRoleAction::where('usr_role_id',$role_id)->where('module_id',$module)->orderBy('id', 'desc')->where('is_active',1)->where('is_deleted',0)->get();
                                foreach($exists_r as $rv=>$rem){
                                if(! in_array($rem->page_id,$valid_ar)) {
                                
                                UserRoleAction::where('usr_role_id',$role_id)->where('module_id',$module)->where('page_id',$rem->page_id)->update(array('is_deleted'=>1,'is_active'=>0));
                                }
                                }
                                
                        }else {
                            
                            $exists_2 = UserRoleAction::where('usr_role_id',$role_id)->where('module_id',$module)->where('page_id',$module)->orderBy('id', 'desc')->where('is_active',1)->where('is_deleted',0)->first();
                            
                            if($exists_2){
                                if(isset($exists_2->view)){ $view_opt = $exists_2->view; }else { $view_opt =0; }
                                if(isset($exists_2->edit)){ $edit_opt = $exists_2->edit; }else { $edit_opt =0; }
                                if(isset($exists_2->delete)) { $delete_opt = $exists_2->delete; }else{ $delete_opt =0; }
                                if(isset($exists_2->approval)) { $approval_opt = $exists_2->approval;}else { $approval_opt =0; }
                            UserRoleAction::where('usr_role_id',$role_id)->where('module_id',$module)->where('page_id',$module)->update(array('is_deleted'=>1,'is_active'=>0));
                            }else{
                            $view_opt = 0;$edit_opt = 0;$delete_opt = 0;$approval_opt = 0;  
                            }
                                 $valid_main[] =$module ;
                                $insId = $this->createAction($role_id,$module,$module,$view_opt,$edit_opt,$delete_opt,$approval_opt);
                        }
                        
                       
                        
                    }
                    // if($valid_main){
                    //   foreach($modules as $module=>$pages){
                    //      if( ! is_array($pages)){
                    //   $exists_r = UserRoleAction::where('usr_role_id',$role_id)->where('module_id',$module)->where('page_id',$module)->orderBy('id', 'desc')->where('is_active',1)->where('is_deleted',0)->get();
                    //     foreach($exists_r as $rv=>$rem){
                    //     if(! in_array($rem->page_id,$valid_main)) {
                        
                    //     UserRoleAction::where('usr_role_id',$role_id)->where('module_id',$module)->where('page_id',$rem->page_id)->update(array('is_deleted'=>1,'is_active'=>0));
                    //     }
                    //     } 
                    //   }
                    // }  
                    // }
                    // echo "<pre>";
                    // print_r($valid_main);
                    // print_r($valid_ar);
                    //  dd($modules);
                    
                   $exists_m = UserRoleAction::where('usr_role_id',$role_id)->orderBy('id', 'desc')->where('is_active',1)->where('is_deleted',0)->get();
                        foreach($exists_m as $rv=>$rem){
                        if((! in_array($rem->page_id,$valid_main)) && (! in_array($rem->page_id,$valid_ar))) {
                        // echo ($rem->page_id);
                        // dd($modules);
                        UserRoleAction::where('usr_role_id',$role_id)->where('page_id',$rem->page_id)->update(array('is_deleted'=>1,'is_active'=>0));
                        }
                        } 
                    
                    
                   
                }
            }
            // dd($post);
          
         
          return redirect(route('role_privileges'))->with("success", "Role Privileges Saved Successfully.");
    }

    public function createAction($role_id,$module,$page,$view_opt,$edit_opt,$delete_opt,$approval_opt) { 
            $actions = [];
            $actions['usr_role_id'] =$role_id;   
            $actions['module_id'] =$module; 
            $actions['page_id'] =$page;
            $actions['view'] = $view_opt;
            $actions['edit'] = $edit_opt;
            $actions['delete'] = $delete_opt;
            $actions['approval'] = $approval_opt;
            $actions['is_active'] = 1;
            $actions['is_deleted'] = 0;
            $insId = UserRoleAction::create($actions)->id; 
            return $insId;
    }
    
    

    public function getPrivileges(Request $request)
    { 
        $post               =   (object)$request->post(); 
        $role_id            = $post->role_id;
        $data['roles']              =   $this->getDropdownData(Role::orderBy('name', 'ASC')->where('is_active',1)->where('is_deleted',0)->where('id','!=',1)->get(),'id','name'); 
        $data['modules']           =    Module::getModules(); 
        $role_actions  = UserRoleAction::select('module_id','page_id')->where('usr_role_id',$role_id)->orderBy('id', 'desc')->where('is_active',1)->where('is_deleted',0)->get()->toArray();
        if($role_actions) {
            $data['role_modules'] = array_unique(array_reduce(array_map('array_values',$role_actions),'array_merge',[]));
        }else {
            $data['role_modules'] = [];
        }
        // dd($data);
        return view('admin.usermanagement.role_privileges.list.content',$data);
    }


      public function access_privileges()
    { 
        $data['title']              =   'Access Privileges';
        $data['menuGroup']          =   'user-management';
        $data['menu']               =   'access_privileges'; 
        $data['roles']              =   $this->getDropdownData(Role::orderBy('name', 'ASC')->where('is_active',1)->where('is_deleted',0)->where('id','!=',1)->get(),'id','name'); 
        $data['modules']           =    Module::getModules(); 
        $data['privileges']        =   UserRoleAction::where('is_active',1)->where('is_deleted',0)->orderBy('id', 'desc')->get();
        // dd($data);
        return view('admin.usermanagement.access_privileges.list',$data);
    }

    public function role_modules(Request $request)
    { 
        $post               =   (object)$request->post(); 
        $role_id            = $post->role_id;
        $modules        =   UserRoleAction::select('module_id')->distinct()->where('usr_role_id',$role_id)->where('is_active',1)->where('is_deleted',0)->get();
         $ret_ar = [];
         if($modules) {
           
            foreach($modules as $k=>$v){
                $ret_ar[$v->module_name->id] = $v->module_name->module_name;
            }
        }        
        return $ret_ar;
    }

    public function role_pages(Request $request)
    { 
        $post               =   (object)$request->post(); 
        $role_id            = $post->role_id;
        $module_id            = $post->module_id;
        $pages        =   UserRoleAction::select('page_id')->where('usr_role_id',$role_id)->where('module_id',$module_id)->where('is_active',1)->where('is_deleted',0)->get();
         $ret_ar = [];
         if($pages) {
           
            foreach($pages as $k=>$v){
                $ret_ar[$v->page_name->id] = $v->page_name->module_name;
            }
        }        
        return $ret_ar;
    }

    public function role_actions(Request $request)
    { 
        $post               =   (object)$request->post(); 
        $role_id            = $post->role_id;
        $page_id            = $post->page_id;
        $actions        =   UserRoleAction::where('page_id',$page_id)->where('usr_role_id',$role_id)->where('is_active',1)->where('is_deleted',0)->get();
         
         $view_only = [1,2,3,4,5,14,18,20,21,23,24,25];
         $approval_only = [18];
         if($actions) {
           
            foreach($actions as $k=>$v){
                // dd($v); 
                $ret_str = "";
                $view = $edit = $delete = $approval = "";
                if($v->view ==1) { $view="checked"; }
                if($v->edit ==1) { $edit="checked"; }
                if($v->delete ==1) { $delete="checked"; }
                if($v->approval ==1) { $approval="checked"; }
                $ret_str .='<div class="col">
                    <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="actions[view]"  value="1" '.$view.' >
                    <span class="custom-control-label">View</span>
                    </label>
                    </div>
                   ';
                   if(! in_array($page_id, $view_only)){
                    $ret_str .='
                    <div class="col">
                    <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="actions[edit]" value="1" '.$edit.' >
                    <span class="custom-control-label">Edit</span>
                    </label>
                    </div>
                    <div class="col">
                    <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="actions[delete]" value="1" '.$delete.' >
                    <span class="custom-control-label">Delete</span>
                    </label>  
                    </div>';
                   }
                   if( in_array($page_id, $approval_only)){
                    $ret_str .='<div class="col">
                    <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="actions[approval]" value="1" '.$approval.' >
                    <span class="custom-control-label">Approval</span>
                    </label>
                    </div>
                   ';
                   }
                    
            }
        }        
        return $ret_str;
    }


    function role_saveActions(Request $request){
            $post               =   (object)$request->post(); 
            $role_id = $post->role_id;
            $module_id = $post->module_id;
            $page_id = $post->page_id;
            $reset_arr = array('view'=>0,'edit'=>0,'delete'=>0,'approval'=>0);
            if(isset($post->actions)) { $actions = $post->actions; }else { $actions = []; }
            $actions = array_replace($reset_arr,$actions);

            UserRoleAction::where('usr_role_id',$role_id)->where('module_id',$module_id)->where('page_id',$page_id)->update($actions);
            Session::flash('message', ['text'=>'Role updated successfully','type'=>'success']);
          return redirect(route('access_privileges'));
    }
    
    public function roleDropdownData(Request $request) { 
        $post       =   (object)$request->post(); 
        $options    = ''; $data = [];
        if($post->value != '')
        {  
            $user       =    User::where('id',$post->value)->where('is_deleted',0)->first();  
            $data       =    Role::orderBy('name', 'ASC')->where('is_deleted',0)->where('id','!=',1)->get();
            $options    .=   '<label>Role <span class="text-red">*</span></label>';
            $options    .=   '<select id="role_id" class="form-control" required="" name="arole[role_id]"><option value="">'.$post->placeholder.'</option>';
            if($data){ foreach($data    as  $row){
                // if($user->role_id == $row->id){$selected = 'selected="selected"'; }else{ $selected = ''; }
                if($user->role_id == $row->id){$selected = 'disabled="true"'; }else{ $selected = ''; }
                $options            .=  '<option value="'.$row->id.'" '.$selected.'>'.$row->name.'</option>';
            }
            $options  .='</select>';
            }
        }
        else
        {
            $data       =    Role::orderBy('name', 'ASC')->where('is_deleted',0)->where('id','!=',1)->get();
            $options    .=   '<label>Role <span class="text-red">*</span></label>';
            $options    .=   '<select id="role_id" class="form-control" required="" name="arole[role_id]"><option value="">'.$post->placeholder.'</option>';
            if($data){ foreach($data    as  $row){
                $selected = ''; 
                $options            .=  '<option value="'.$row->id.'" '.$selected.'>'.$row->name.'</option>';
            }
            $options  .='</select>';
            }
        } return $options;
    }
}