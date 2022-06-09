@extends('layouts.admin')
@section('title', 'Link Audios')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Link Audios</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/link-audio','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add Link Audio</h3>
                    </div>
                    @include('admin.link_audio.details')
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
                     <div class="card-title">Link Audios List</div>  
                   </div> 
                </div>
                <div id="data_content"> 
                @include('admin.link_audio.list.content')
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
    {{ Form::open(['url' => "link-audio/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
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
    });

    $("body").on('change','#linkAudioForm #image',function(){  readURL(this); }); 

     $('#addDocument').on('click',function(){ 
        $('.modal-header h5.modal-title').text('Add Document'); 
        // $('#exampleModal .modal-content').html($('#exampleModal').html()); 
        $('#typeForm')[0].reset(); $('#typeForm .error').text('');
        $('#linkAudioForm #tag_ids').val('').trigger('change');
        $('#linkAudioForm #audio_file').attr('src', '').hide();
        $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
        $('#typeForm #id').val(0);
    });

    $('body').on('submit','#linkAudioForm',function(e){ 
        $('#linkAudioForm .error').html('');
        if($('#title').val() == ''){ $('#linkAudioForm #title').closest('div').find('.error').html('Enter Link Audio Title'); return false }
        else if($('#file').val() == '' && !($('#linkAudioForm #id').val() > 0)){ $('#linkAudioForm #file').closest('div').find('.error').html('Select Story Audio'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#linkAudioForm #save_btn').attr('disabled',true); $('#linkAudioForm #save_btn').text('Validating...'); 
            $('#linkAudioForm #save_btn').text('Saving...'); $('#linkAudioForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('click','.editlinkAudio',function(){
         $('.card-header h3.card-title').text('Edit Link Audio');
         $('#save_btn').val('Edit Link Audio');  
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#linkAudioForm')[0].reset(); $('#linkAudioForm .error').text('');
        $('#linkAudioForm #tag_ids').val('').trigger('change');
        $('#linkAudioForm #audio_file').attr('src', '').hide();
        $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
        var id      =   this.id.replace('editlinkAudio-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("link-audio")}}/'+id,
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
                        });
                        $('#tag_ids').val(tag_ids).trigger('change');
                    }
                    else{
                        $('#linkAudioForm #'+key).val(value);
                    }
                }); 

                // $('#save_btn').text('Update Link Audio'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#title" ).focus();
    });

    $('body').on('click','.dellinkAudio',function(){ 
        var id      =   this.id.replace('dellinkAudio-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        $.ajax({
            type: "DELETE",
            url: '{{url("link-audio")}}/'+id,
            data: { "_token": "{{csrf_token()}}"},
            success: function (data) {
                $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click');
                var smsg        =   'Link Audio deleted successfully!';
                toastr.success(smsg);
                $('#data_content').html(data);
                $('#linkAudioForm #id').val(0);
                $('#linkAudioForm')[0].reset();
                $('#linkAudioForm #tag_ids').val('').trigger('change');
                $('#linkAudioForm #audio_file').attr('src', '').hide();
                $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
                $('.card-header h3.card-title').text('Add Link Audio'); 
                $('#save_btn').val('Add Link Audio'); 
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            } 
        });
        
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/link-audio")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#linkAudioForm #save_btn').attr('disabled',false); $('#linkAudioForm #save_btn').text('Add Link Audio');
            msg = 'Link Audio added successfully!';
            if($('#linkAudioForm #id').val() > 0){
                var msg = 'Link Audio updated successfully!';
            }
            $('#exampleModal').modal('hide'); 
            $('#linkAudioForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#linkAudioForm #id').val(0);
            $('#linkAudioForm')[0].reset();
            $('#linkAudioForm #tag_ids').val('').trigger('change');
            $('#linkAudioForm #audio_file').attr('src', '').hide();
            $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
            $('.card-header h3.card-title').text('Add Link Audio'); 
            $('#save_btn').val('Add Link Audio'); 
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                // $('#linkAudioForm #'+key).parent().append('<span class="error">'+value+'</span>');
                $('#linkAudioForm #'+key).closest('div').find('.error').html(value);
            }); 
        }
    });

}
</script>
@endsection
