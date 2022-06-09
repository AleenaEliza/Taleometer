       {{ Form::open(array('url' => "access-privilege/actions/save", 'id' => 'actionsForm', 'name' => 'actionsForm', 'class' => '','files'=>'true')) }}
        <div class="card-body" id="asign-role">
    <div class="row">
   
        <div class="col-sm-12 col-md-4">
            <div class="form-group">
                <label>Role <span class="text-red">*</span></label>
                {{Form::select('role_id',$roles,'',['id'=>'role_id','class'=>'form-control','placeholder'=>'Select Role'])}}
                <span class="error role_id"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-4">
            <div class="form-group">
                <label>Module <span class="text-red">*</span></label>
                {{Form::select('module_id',[],'',['id'=>'module_id','class'=>'form-control','placeholder'=>'Select Module'])}}
                <span class="error module_id"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-4">
            <div class="form-group">
                <label>Page <span class="text-red">*</span></label>
                {{Form::select('page_id',[],'',['id'=>'page_id','class'=>'form-control','placeholder'=>'Select Page'])}}
                <span class="error page_id"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-4">
            <div class="form-group">
                <div class="act_opt row">
                  <!--   <div class="col">
                    <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="view_opt" id="view_opt" value="1" >
                    <span class="custom-control-label">View</span>
                    </label>
                    </div>
                    <div class="col">
                    <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="edit_opt" id="edit_opt" value="1" >
                    <span class="custom-control-label">Edit</span>
                    </label>
                    </div>
                    <div class="col">
                    <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="delete_opt" id="delete_opt" value="1" >
                    <span class="custom-control-label">Delete</span>
                    </label>  
                    </div> -->
                    
                </div>
                
                
                
            </div>
        </div>
         <div class="col-sm-12 col-md-8">
                <input class=" btn btn-primary fr" type="button" id="set_priv" value="Set Privilege">
        </div>
       
    </div>

</div>  {{Form::close()}}