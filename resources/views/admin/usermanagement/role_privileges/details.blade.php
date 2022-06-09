  <div class="card-body" id="asign-role">
    <div class="row">
        
        <div class="col-sm-12 col-md-5">
            <div class="form-group">
                <label>Role <span class="text-red">*</span></label>
                {{Form::select('role_id',$roles,'',['id'=>'role_id','class'=>'form-control','placeholder'=>'Select Role'])}}
                <span class="error"></span>
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="button" id="set_priv" value="Set Privilege">
        </div>
    </div>

</div>