<div class="card-body" id="addNonStopAudio">
    {{ Form::open(array('url' => "/nonstop-audio", 'id' => 'nonstopForm', 'name' => 'nonstopForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('arr_key','non_stop_audio',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','non_stop_audio',['id'=>'pg_name'])}}
    <div class="row">

        <div class="col-sm-12 col-md-12">
            <div class="form-group">
                <label>
                    {{Form::radio('type','audio_story', '', ['style' => 'width: 15px; display:inline-block;', 'class'=>'type', 'checked'])}}
                    Audio Story
                </label>
                <label>
                    {{Form::radio('type','link_audio', '', ['style' => 'width: 15px; display:inline-block;', 'class'=>'type'])}}
                    Link Audio
                </label>
            </div>
        </div>
        
        <div id="audioStoryDiv" class="row" style="width:100%;">
            <div class="col-sm-6 col-md-4">
                <div class="form-group">
                    <label>Select Genre (Filter)</label>
                {{Form::select('genre_id2',$genres, '',['id'=>'genre_id2','class'=>'form-control', 'placeholder' => 'All Genre', 'style' => 'width: 100%;'])}}
                <span class="error"></span>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="form-group">
                    <label>Audio Story</label>
                <!-- {{Form::select('audio_story_id2',$audio_stories, '',['id'=>'audio_story_id2','class'=>'form-control', 'placeholder' => 'Select Audio Story', 'style' => 'width: 100%;'])}} -->
                <select id="audio_story_id2" class="form-control select2-hidden-accessible" style="width: 100%;" name="audio_story_id2" tabindex="-1" aria-hidden="true">
                    <option selected="selected" value="">Select Audio Story</option>
                    @foreach($audio_stories as $audio_story)
                    <option value="{{$audio_story->id}}" data-id="{{$audio_story->genre_id}}">{{$audio_story->title}}</option>
                    @endforeach
                </select>
                <span class="error"></span>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="form-group">
                    <label>Position</label>
                {{Form::number('position',$order, ['max' => $order, 'class'=>'form-control position', 'style' => 'width: 100%;'])}}
                <span class="error"></span>
                </div>
            </div>
        </div>
        <div id="linkAudioDiv" style="display:none; width: 100%;" class="row">
            <div class="col-sm-6 col-md-4">
                <div class="form-group">
                    <label>Link Audio</label>
                {{Form::select('link_audio_id2',$link_audios, '',['id'=>'link_audio_id2','class'=>'form-control', 'placeholder' => 'Select Link Audio'])}}
                <span class="error"></span>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="form-group">
                    <label>Position</label>
                {{Form::number('position2',$order, ['max' => $order, 'class'=>'form-control position', 'style' => 'width: 100%;'])}}
                <span class="error"></span>
                </div>
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="submit" id="save_btn" value="Add To Nonstop">
        </div>
    </div>
    {{Form::close()}}
</div>