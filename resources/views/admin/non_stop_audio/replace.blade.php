<div class="card-body" id="repalce_audio_story" style="display:none;">
    {{ Form::open(array('url' => "/nonstop-audio/replace", 'id' => 'nonstopAudioStoryForm', 'name' => 'nonstopAudioStoryForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','non_stop_audio',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','non_stop_audio',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-6 col-md-4">
             <div class="form-group">
                <label>Current Story Title <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="title" id="title" placeholder="Current Story Title" value="" disabled>
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="form-group">
                <label>Select Genre (Filter)</label>
               {{Form::select('genre_id',[], '',['id'=>'genre_id','class'=>'form-control', 'placeholder' => 'All Genre'])}}
               <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="form-group">
                <label>Audio Story <span class="text-red">*</span></label>
               {{Form::select('audio_story_id',[], '',['id'=>'audio_story_id','class'=>'form-control', 'placeholder' => 'Select Audio Story'])}}
               <span class="error"></span>
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="submit" id="save_btn" value="Replace Audio">
        </div>
    </div>
    {{Form::close()}}
</div>

<div class="card-body" id="repalce_link_audio"  style="display:none;">
    {{ Form::open(array('url' => "/nonstop-audio/replace_link_audio", 'id' => 'nonstopLinkAudioForm', 'name' => 'nonstopLinkAudioForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','non_stop_audio',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','non_stop_audio',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-6 col-md-4">
             <div class="form-group">
                <label>Current Story Title <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="title" id="title" placeholder="Current Story Title" value="" disabled>
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="form-group">
                <label>Link Audio <span class="text-red">*</span></label>
               {{Form::select('link_audio_id',[], '',['id'=>'link_audio_id','class'=>'form-control', 'placeholder' => 'Select Link Audio'])}}
               <span class="error"></span>
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="submit" id="save_btn" value="Replace Audio">
        </div>
    </div>
    {{Form::close()}}
</div>