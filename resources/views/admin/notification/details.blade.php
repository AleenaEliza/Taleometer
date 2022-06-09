<div class="card-body">
    {{ Form::open(array('url' => "/notification/store", 'id' => 'notificationForm', 'name' => 'notificationForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','notification',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','notifications',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-10">
             <div class="form-group">
                <label>Notification Title <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="title" id="title" placeholder="Notification Title" value="">
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-10">
             <div class="form-group">
                <label>Notification Content <span class="text-red">*</span></label>
               <!-- <input type="text" class="form-control" name="content" id="content" placeholder="Notification Content" value=""> -->
               <textarea class="form-control" name="content" id="content" placeholder="Notification Content"></textarea>
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="row">
                <div class="col-sm-8 col-md-9">
                    <div class="form-group">
                        <label>Notification Banner</label>
                        {{Form::file('image',['id'=>'image','class'=>'form-control', 'accept' => 'image/*'])}}
                        <span class="error"></span>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3 mb-3">
                    <img id="image_img" src="{{url('storage/app/public/default.png')}}" alt="avatar" style="height: 100px;" />
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="form-group">
                <label>Select Story </label>
               {{Form::select('audio_story_id',$audio_stories, '',['id'=>'audio_story_id','class'=>'form-control', 'placeholder' => 'Select Audio Story'])}}
               <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="form-group">
                <label>Status </label>
               {{Form::select('is_active',['1'=>'Enabled','0'=>'Disabled'],1,['id'=>'is_active','class'=>'form-control'])}}
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="form-group">
                <label>Type </label>
               {{Form::select('type',['Sent'=>'Send & Save','Saved'=>'Save'],'Sent',['id'=>'type','class'=>'form-control'])}}
            </div>
        </div>
         <div class="col-sm-12 col-md-3">
                <input class="mt-5 btn btn-primary" type="submit" id="frontval" value="Add Notification">
        </div>
    </div>
    {{Form::close()}}
</div>