<div class="card-body">
    {{ Form::open(array('url' => "/preference-bubble/store", 'id' => 'preferenceBubbleForm', 'name' => 'preferenceBubbleForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','preference_bubbles',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','preference_bubbles',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-5">
             <div class="form-group">
                <label>Preference Bubble Name <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="name" id="name" placeholder="Preference Bubble Name" value="">
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="form-group">
                <label>Preference Category <span class="text-red">*</span></label>
               {{Form::select('preference_category_id',$preference_categories, '',['id'=>'preference_category_id','class'=>'form-control'])}}
            </div>
        </div>
        <div class="col-sm-6 col-md-5">
            <div class="form-group">
                <label>Select Tags <span class="text-red">*</span></label>
               {{Form::select('tag_ids[]',$tags, '',['id'=>'tag_ids','class'=>'form-control', 'multiple' => ''])}}
               <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="row">
                <div class="col-sm-8 col-md-9">
                    <div class="form-group">
                        <label>Preference Image <span class="text-red">*</span></label>
                        {{Form::file('image',['id'=>'image','class'=>'form-control', 'accept' => 'image/*'])}}
                        <span class="error"></span>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3 mb-3">
                    <img id="image_img" src="{{url('storage/app/public/default.png')}}" alt="avatar" style="height: 100px;" />
                </div>
            </div>
        </div>
         <div class="col-sm-12 col-md-3">
                <input class="mt-5 btn btn-primary" type="submit" id="frontval" value="Add Preference Bubble">
        </div>
    </div>
    {{Form::close()}}
</div>