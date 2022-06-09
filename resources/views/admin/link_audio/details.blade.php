<div class="card-body">
    {{ Form::open(array('url' => "/link-audio/store", 'id' => 'linkAudioForm', 'name' => 'linkAudioForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','audio_stories',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','audio_stories',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-6 col-md-5">
             <div class="form-group">
                <label>Link Audio Title <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="title" id="title" placeholder="Link Audio Title" value="">
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-6 col-md-5">
            <div class="row">
                <div class="col-sm-7 col-md-8">
                    <div class="form-group">
                        <label>Story Audio File <span class="text-red">*</span></label>
                        {{Form::file('file',['id'=>'file','class'=>'form-control', 'accept' => 'audio/*', 'onchange' => "PreviewAudio(this, $('#audio_file'))"])}}
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
         <div class="col-sm-12 col-md-3">
                <input class="mt-5 btn btn-primary" type="submit" id="save_btn" value="Add Link Audio">
        </div>
    </div>
    {{Form::close()}}
</div>