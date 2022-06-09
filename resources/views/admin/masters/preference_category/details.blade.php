<div class="card-body">
    {{ Form::open(array('url' => "/preference-category/store", 'id' => 'preference_categoryForm', 'name' => 'preference_categoryForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','preference_category',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','preference_categories',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-5">
             <div class="form-group">
                <label>Preference Category Name <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="name" id="name" placeholder="Preference Category Name" value="">
                <span class="error"></span>
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="submit" id="frontval" value="Add Preference Category">
        </div>
    </div>
    {{Form::close()}}
</div>