<div class="card-body">
    {{ Form::open(array('url' => "/genre/store", 'id' => 'genreForm', 'name' => 'genreForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','genre',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','genres',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-5">
             <div class="form-group">
                <label>Genre Name <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="name" id="name" placeholder="Genre Name" value="">
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="form-group">
                <label>Status <span class="text-red">*</span></label>
               {{Form::select('is_active',['1'=>'Active','0'=>'Inactive'],1,['id'=>'is_active','class'=>'form-control'])}}
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="submit" id="frontval" value="Add Genre">
        </div>
    </div>
    {{Form::close()}}
</div>