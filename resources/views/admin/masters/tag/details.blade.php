<div class="card-body">
    {{ Form::open(array('url' => "/tag/store", 'id' => 'tagForm', 'name' => 'tagForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','tag',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','tags',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-5">
             <div class="form-group">
                <label>Tag Name <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="name" id="name" placeholder="Tag Name" value="">
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-6 col-md-5">
            <div class="form-group">
                <label>Select Preference Bubbles</label>
               {{Form::select('preference_bubble_ids[]',$preference_bubbles, '',['id'=>'preference_bubble_ids','class'=>'form-control', 'multiple' => ''])}}
               <span class="error"></span>
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="submit" id="frontval" value="Add Tag">
        </div>
    </div>
    {{Form::close()}}
</div>