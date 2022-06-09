<div class="card-body">
    {{ Form::open(array('url' => "/trivia/category/save", 'id' => 'storyForm', 'name' => 'storyForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','story',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','storys',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-5">
             <div class="form-group">
                <label>Category Name <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="name" id="name" placeholder="Category Name" value="">
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="row">
                <div class="col-sm-8 col-md-9">
                    <div class="form-group">
                        <label>Image <span class="text-red">*</span></label>
                        {{Form::file('image',['id'=>'image','class'=>'form-control', 'accept' => 'image/*'])}}
                        <span class="error"></span>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3 mb-3">
                    <img id="image_img" src="{{url('storage/app/public/default.png')}}" alt="avatar" style="height: 100px;" />
                </div>
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="submit" id="frontval" value="Submit">
        </div>
    </div>
    {{Form::close()}}
</div>