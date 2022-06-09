@extends('layouts.admin')
@section('title', 'Stories')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Audio Stories</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/audio-story','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add Audio Story</h3>
                    </div>
                    @include('admin.audio_story.details')
                </div>
            </div>
        </div>
        @endif
    <!-- Row -->
    <div class="row">
        <div class="col-12">
            <!--div-->
            <div id="" class="main-card mb-3 card">
                <div class="card-header">
                   <div class="col-10">
                     <div class="card-title">Audio Stories List</div>  
                   </div> 
                   <!-- <div class="col-2 text-right">
                        <select class="form-control" id="filterstatus" style="margin-right: 30px;">
                        <option value="">All Status</option>
                        <option value="Active1">Active</option>
                        <option value="Inactive">Inactive</option>
                        </select>
                   </div> -->
                </div>
                <div id="data_content"> 
                @include('admin.audio_story.list.content')
                </div>
            </div>
            <!--/div-->

            
        </div>
    </div>
    <div id="delModal" style="display: none">   
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Are You Sure?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    {{ Form::open(['url' => "audio-story/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
    <div class="modal-body"><p>Do you really want to delete this record?</div>
    <div class="modal-footer">
       {{Form::hidden('del_id',0,['id'=>'del_id'])}}
        <button id="cancel_btn" type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button id="delete_btn" type="button" data-id='0' class="btn btn-primary delUser">Yes</button>
    </div>
    {{Form::close()}}
</div>
<script type="text/javascript">
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
}); 

function PreviewAudio(inputFile, previewElement) {

    if (inputFile.files && inputFile.files[0] && $(previewElement).length > 0) {

        $(previewElement).stop();

        var reader = new FileReader();

        reader.onload = function (e) {

            $(previewElement).attr('src', e.target.result);
            var playResult = $(previewElement).get(0).play();

            $(previewElement).on("canplay", function () {
                $('#duration').val(parseInt(this.duration));
            });

            if (playResult !== undefined) {
                playResult.then(_ => {
                    $(previewElement).get(0).pause();
                    $(previewElement).show();
                })
                .catch(error => {

                    $(previewElement).hide();
                    $('#file').parent().find('.error').html("File Is Not Valid Media File");
                });
            }
        };

        reader.readAsDataURL(inputFile.files[0]);
    }
    else {
        $(previewElement).attr('src', '');
        $(previewElement).hide();
        $('#file').parent().find('.error').html("File Not Selected");
    }
}

$(document).ready(function(){

    localStorage.clear();

    $("#tag_ids").select2({
        tags:true
    });

    $("body").on('change','#audioStoryForm #image',function(){  readURL(this); }); 

    function readURL(input) { 
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { $('body #'+input.id+'_img').attr('src', e.target.result); $('body #'+input.id+'_img').show(); }
            reader.readAsDataURL(input.files[0]);
        }
    }

     $('#addDocument').on('click',function(){ 
        $('.modal-header h5.modal-title').text('Add Document'); 
        // $('#exampleModal .modal-content').html($('#exampleModal').html()); 
        $('#typeForm')[0].reset(); $('#typeForm .error').text('');
        $('#audioStoryForm #tag_ids').val('').trigger('change');
        $('#audioStoryForm #audio_file').attr('src', '').hide();
        $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
        $('#typeForm #id').val(0);
    });

    $('body').on('submit','#audioStoryForm',function(e){ 
        $('#audioStoryForm .error').html('');
        if($('#title').val() == ''){ $('#audioStoryForm #title').closest('div').find('.error').html('Enter Audio Story Title'); return false }
        else if($('#story_id').val() == ''){ $('#audioStoryForm #story_id').closest('div').find('.error').html('Select Story'); return false }
        else if($('#plot_id').val() == ''){ $('#audioStoryForm #plot_id').closest('div').find('.error').html('Select Plot'); return false }
        else if($('#narration_id').val() == ''){ $('#audioStoryForm #narration_id').closest('div').find('.error').html('Select Narration'); return false }
        else if($('#genre_id').val() == ''){ $('#audioStoryForm #genre_id').closest('div').find('.error').html('Select Genre'); return false }
        else if($('#tag_ids').val() == ''){ $('#audioStoryForm #tag_ids').closest('div').find('.error').html('Select Tag(s)'); return false }
        else if($('#image').val() == '' && !($('#audioStoryForm #id').val() > 0)){ $('#audioStoryForm #image').closest('div').find('.error').html('Select Story Image'); return false }
        else if($('#file').val() == '' && !($('#audioStoryForm #id').val() > 0)){ $('#audioStoryForm #file').closest('div').find('.error').html('Select Story Audio'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#audioStoryForm #save_btn').attr('disabled',true); $('#audioStoryForm #save_btn').text('Validating...'); 
            $('#audioStoryForm #save_btn').text('Saving...'); $('#audioStoryForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('click','.editaudioStory',function(){
         $('.card-header h3.card-title').text('Edit Audio Story'); 
         $('#save_btn').val('Edit Audio Story');  
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#audioStoryForm')[0].reset(); $('#audioStoryForm .error').text('');
        $('#audioStoryForm #tag_ids').val('').trigger('change');
        $('#audioStoryForm #audio_file').attr('src', '').hide();
        $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
        var id      =   this.id.replace('editaudioStory-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("audio-story")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                
                $.each( data, function( key, value ) { 
                    if(key == 'image')
                    {
                        if(value && value != '')
                        {
                            $('#image_img').attr('src', value);
                        }
                        else
                            $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
                    }
                    else if(key == 'file')
                    {
                        if(value && value != '')
                        {
                            $('#audio_file').attr('src', value).show();
                        }
                        else
                            $('#audio_file').hide();
                    }
                    else if(key == 'audio_story_tags')
                    {
                        var tmp = value;
                        var tag_ids = [];
                        for(i=0; i < tmp.length; i++)
                        {
                            tag_ids.push(tmp[i].tag_id);
                        }
                        
                        $("#tag_ids").select2({
                            multiple: true,
                            tags:true
                        });
                        $('#tag_ids').val(tag_ids).trigger('change');
                    }
                    else{
                        $('#audioStoryForm #'+key).val(value);
                    }
                }); 

                // $('#save_btn').text('Update Audio Story'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#title" ).focus();
    });

    $('body').on('click','.delaudioStory',function(){ 
        var id      =   this.id.replace('delaudioStory-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        $.ajax({
            type: "DELETE",
            url: '{{url("audio-story")}}/'+id,
            data: { "_token": "{{csrf_token()}}"},
            success: function (data) {
                $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click');
                var smsg        =   'Audio Story deleted successfully!';
                toastr.success(smsg);
                $('#data_content').html(data);
                $('#audioStoryForm #id').val(0);
                $('#audioStoryForm')[0].reset();
                $('#audioStoryForm #tag_ids').val('').trigger('change');
                $('#audioStoryForm #audio_file').attr('src', '').hide();
                $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
                $('.card-header h3.card-title').text('Add Audio Story'); 
                $('#save_btn').val('Add Audio Story');  
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            } 
        });
        
    });

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("audio-story/updateStatus")}}';
        var smsg        =   'Audio Story activated successfully!';
        if (sts == true){ var status = 1; }else if (sts == false){var status = 0; smsg = 'Audio Story deactivated successfully!'; }
        updateStatus(id,bId,status,url,'stories','active','is_active',smsg);
    });

    $("body").on("click", ".addToNonstop", function () {

        $(this).attr("disabled", "");
        var id          =   this.id.replace('addToNonstop-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("audio-story/updateStatus")}}';
        var smsg        =   'Audio Story added to non stop successfully!';
        
        updateStatus(id,bId,1,url,'stories','active','is_nonstop',smsg);
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/audio-story")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#audioStoryForm #save_btn').attr('disabled',false); $('#audioStoryForm #save_btn').text('Add Audio Story');
            msg = 'Audio Story added successfully!';
            if($('#audioStoryForm #id').val() > 0){
                var msg = 'Audio Story updated successfully!';
            }
            $('#exampleModal').modal('hide'); 
            $('#audioStoryForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#audioStoryForm #id').val(0);
            $('#audioStoryForm')[0].reset();
            $('#audioStoryForm #tag_ids').val('').trigger('change');
            
            $('#audioStoryForm #audio_file').attr('src', '').hide();
            $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
            $('.card-header h3.card-title').text('Add Audio Story'); 
            $('#save_btn').val('Add Audio Story');  
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                // $('#audioStoryForm #'+key).parent().append('<span class="error">'+value+'</span>');
                $('#audioStoryForm #'+key).closest('div').find('.error').html(value);
            }); 
        }
    });

}

function updateStatus(id,rowId,status,url,row,field,req,smsg){
    $.ajax({
        type: "POST",
        url: url,
        data: { "_token": "{{csrf_token()}}", id: id, value: status,field: field, field, req:req, page: row},
        success: function (data) {
            if(field == 'status'){
                // $('#small-modal').modal('hide'); $('#delForm #cancel_btn').trigger('click'); 
                // // $('#allert_success #msg').text(smsg); 
                // // $('#allert_success').show(); 
                $('#exampleModal').modal('hide'); 
                $('#audioStoryForm #cancel_btn').trigger('click'); 
                toastr.success(smsg);
                $('#data_content').html(data);
            }else{
                if (data.type == 'warning' || data.type == 'error'){ 
                    $('#allert_success #msg').text(smsg); $('#allert_success').show();
                } else { 
                    if(req != 'is_active')
                        $('#data_content').html(data);
                    toastr.success(smsg);
                }
            } setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        }
    });
}
</script>
@endsection
