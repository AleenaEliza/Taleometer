  <div class="card-body" id="asign-role">
    {{ Form::open(array('url' => "/role/save", 'id' => 'roleForm', 'name' => 'roleForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','arole',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','assign_roles',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-5">
             <div class="form-group">
                <label>User <span class="text-red">*</span></label>
               {{Form::select('arole[user]',$users,'',['id'=>'user','class'=>'form-control','placeholder'=>'Select User'])}}
               <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="form-group" id="roledrpdwn">
                <label>Role <span class="text-red">*</span></label>
                {{Form::select('arole[role_id]',$drproles,'',['id'=>'role_id','class'=>'form-control','placeholder'=>'Select Role'])}}
                <span class="error"></span>
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="submit" id="frontval" value="Assign">
        </div>
    </div>
    {{Form::close()}}
</div>