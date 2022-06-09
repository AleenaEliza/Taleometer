<div class="card-body">
    {{ Form::open(array('url' => "/audio-story/store", 'id' => 'audioStoryForm', 'name' => 'audioStoryForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','audio_stories',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','audio_stories',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-10">
             <div class="form-group">
                <label>Audio Story Title <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="title" id="title" placeholder="Audio Story Title" value="">
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-6 col-md-3">
            <div class="form-group">
                <label>Story <span class="text-red">*</span></label>
               {{Form::select('story_id',$stories, '',['id'=>'story_id','class'=>'form-control', 'placeholder' => 'Select Story'])}}
               <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-6 col-md-3">
            <div class="form-group">
                <label>Plot <span class="text-red">*</span></label>
               {{Form::select('plot_id',$plots, '',['id'=>'plot_id','class'=>'form-control', 'placeholder' => 'Select Plot'])}}
               <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-6 col-md-3">
            <div class="form-group">
                <label>Narration <span class="text-red">*</span></label>
               {{Form::select('narration_id',$narrations, '',['id'=>'narration_id','class'=>'form-control', 'placeholder' => 'Select Narrator'])}}
               <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-6 col-md-5">
            <div class="form-group">
                <label>Genre <span class="text-red">*</span></label>
               {{Form::select('genre_id',$genres, '',['id'=>'genre_id','class'=>'form-control', 'placeholder' => 'Select Genre'])}}
               <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-6 col-md-5">
            <div class="form-group">
                <label>Tags <span class="text-red">*</span></label>
               {{Form::select('tag_ids[]',$tags, '',['id'=>'tag_ids','class'=>'form-control', 'multiple' => ''])}}
               <span class="error"></span>
               <span class="text-info">Add new tag by using "Enter <strong style="font-size:20px;">↵</strong>" Button.</span>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="row">
                <div class="col-sm-8 col-md-9">
                    <div class="form-group">
                        <label>Upload Story Album <span class="text-red">*</span></label>
                        {{Form::file('image',['id'=>'image','class'=>'form-control', 'accept' => 'image/*'])}}
                        <span class="error"></span>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3 mb-3">
                    <img id="image_img" src="{{url('storage/app/public/default.png')}}" alt="avatar" style="height: 100px;" />
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-6">
            <div class="row">
                <div class="col-sm-7 col-md-8">
                    <div class="form-group">
                        <label>Upload Audio File <span class="text-red">*</span></label>
                        {{Form::file('file',['id'=>'file','class'=>'form-control', 'accept' => 'audio/*', 'onchange' => "PreviewAudio(this, $('#audio_file'))"])}}
                        <input type="hidden" name="duration" id="duration" value="0" />
                        <span class="error"></span>
                    </div>
                </div>
                <div class="col-sm-5 col-md-4 mb-3">
                    <audio controls="controls" id="audio_file" style="display:none; margin-top: 25px;">
                        <source src="" type="audio/mp4" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="form-group">
                <label>Status <span class="text-red">*</span></label>
               {{Form::select('is_active',['1'=>'Active','0'=>'Inactive'],1,['id'=>'is_active','class'=>'form-control'])}}
            </div>
        </div>
         <div class="col-sm-12 col-md-3">
                <input class="mt-5 btn btn-primary" type="submit" id="save_btn" value="Add Audio Story">
        </div>
    </div>
    {{Form::close()}}
</div>