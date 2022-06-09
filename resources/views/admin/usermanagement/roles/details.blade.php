  <div class="card-body">
    {{ Form::open(array('url' => "/role/save", 'id' => 'roleForm', 'name' => 'roleForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','role',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','roles',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-5">
             <div class="form-group">
                <label>Role Name <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="role[name]" id="name" placeholder="Role Name" value="">
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="form-group">
                <label>Status <span class="text-red">*</span></label>
               {{Form::select('role[is_active]',['1'=>'Active','0'=>'Inactive'],1,['id'=>'is_active','class'=>'form-control'])}}
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="submit" id="frontval" value="Add Role">
        </div>
    </div>
    {{Form::close()}}
</div>