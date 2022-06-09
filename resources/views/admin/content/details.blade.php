<div class="card-body">
    {{ Form::open(array('url' => "/content/store", 'id' => 'contentForm', 'name' => 'contentForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','content',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','contents',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-10">
             <div class="form-group">
                <label>Content Title <span class="text-red">*</span></label>
               <input type="text" class="form-control readonly" name="title" id="title" placeholder="Content Title" value="" readonly>
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-10">
             <div class="form-group">
                <label>Slug <span class="text-red">*</span></label>
               <input type="text" class="form-control readonly" name="slug" id="slug" placeholder="Slug" value="" readonly>
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-10">
             <div class="form-group">
                <label>Content Text <span class="text-red">*</span></label>
               <textarea class="form-control" name="value" id="value" placeholder="Content Text"></textarea>
                <span class="error"></span>
            </div>
        </div>
         <div class="col-sm-12 col-md-3">
                <input class="mt-5 btn btn-primary" type="submit" id="frontval" value="Save Content">
        </div>
    </div>
    {{Form::close()}}
</div>