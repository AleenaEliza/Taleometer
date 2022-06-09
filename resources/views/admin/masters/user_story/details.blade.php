<style>
    span.select2, #select2{
        width: 100% !important;
    }
    .select2-results__message
    {
        display: none !important;
    }
    .select2-dropdown
    {
        display: none !important;
    }
</style>
<div class="card-body">
    {{ Form::open(array('url' => "/user-story/store", 'id' => 'userStoryForm', 'name' => 'userStoryForm', 'class' => '','files'=>'true')) }}
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','user_story',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','user_stories',['id'=>'pg_name'])}}
    <div class="row">
        
        <div class="col-sm-12 col-md-5">
             <div class="form-group">
                <label>Story Title <span class="text-red">*</span></label>
               <input type="text" class="form-control" name="title" id="title" placeholder="Story Title" value="">
                <span class="error"></span>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="form-group">
                <label>Type <span class="text-red">*</span></label>
               {{Form::select('type',['text'=>'Text Field','choice'=>'Multiple Choice', 'radio' => 'Radio Buttons'],'text',['id'=>'type','class'=>'form-control'])}}
            </div>
        </div>
        <div class="col-sm-12 col-md-5" id="option_div" style="display:none;">
            <div class="form-group">
                <label>Options <span class="text-red">*</span></label>
               {{Form::select('options[]',[],'',['id'=>'options','class'=>'form-control', 'multiple' => ''])}}
               <span class="error"></span><br/>
               <!-- <span class="text-info">Add multiple option by using "Enter <strong style="font-size:20px;">↵</strong>" Button.</span> -->
               <span class="text-info">Add multiple options by using Comma (<strong style="font-size:20px;">,</strong>) .</span>
            </div>
        </div>
         <div class="col-sm-12 col-md-2">
                <input class="mt-5 btn btn-primary" type="submit" id="frontval" value="Add User Story">
        </div>
    </div>
    {{Form::close()}}
</div>