@extends('layouts.admin')
@section('title', 'Nonstop Stories')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Nonstop Audios</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/nonstop-audio','add') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card formCard">
                    <div class="card-header">
                        <h3 class="card-title">Add Non Stop Audio</h3>
                    </div>
                    @include('admin.non_stop_audio.details')
                </div>
            </div>
        </div>
        @endif
    <!-- Row -->

    <!-- Row -->
    @if(checkPermission('/nonstop-audio','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card replaceCard">
                    <div class="card-header">
                        <h3 class="card-title">Replace Audio</h3>
                    </div>
                    @include('admin.non_stop_audio.replace')
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
                     <div class="card-title">Nonstop Audios List</div>  
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
                @include('admin.non_stop_audio.list.content')
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
    {{ Form::open(['url' => "nonstop-audio/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
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

$(document).ready(function(){

    localStorage.clear();

    $('#audio_story_id').select2();
    $('#link_audio_id').select2();
    $('#audio_story_id2').select2();
    $('#link_audio_id2').select2();

    $('body').on('submit','#nonstopAudioStoryForm',function(e){ 
        $('#nonstopAudioStoryForm .error').html('');
        if($('#audio_story_id').val() == ''){ $('#nonstopAudioStoryForm #audio_story_id').closest('div').find('.error').html('Select Audio Story'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#nonstopAudioStoryForm #save_btn').attr('disabled',true); $('#nonstopAudioStoryForm #save_btn').text('Validating...'); 
            $('#nonstopAudioStoryForm #save_btn').text('Saving...'); $('#nonstopAudioStoryForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('submit','#nonstopLinkAudioForm',function(e){ 
        $('#nonstopLinkAudioForm .error').html('');
        if($('#link_audio_id').val() == ''){ $('#nonstopLinkAudioForm #link_audio_id').closest('div').find('.error').html('Select Link Audio'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#nonstopLinkAudioForm #save_btn').attr('disabled',true); $('#nonstopLinkAudioForm #save_btn').text('Validating...'); 
            $('#nonstopLinkAudioForm #save_btn').text('Saving...'); $('#nonstopLinkAudioForm #cancel_btn').trigger('click'); submitForm1(formData); return false;
        }
      return false; 
    });

    $('body').on('submit','#nonstopForm',function(e){ 
        $('#nonstopForm .error').html('');
        if($('#audio_story_id2').val() == '' && $('#link_audio_id2').val() == ''){ $('#nonstopForm #link_audio_id2').closest('div').find('.error').html('Audio Story or Link Audio is required.');
            $('#nonstopForm #audio_story_id2').closest('div').find('.error').html('Audio Story or Link Audio is required.'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#nonstopForm #save_btn').attr('disabled',true); $('#nonstopForm #save_btn').text('Validating...'); 
            $('#nonstopForm #save_btn').text('Saving...'); $('#nonstopForm #cancel_btn').trigger('click'); submitForm2(formData);
            $('#nonstopForm')[0].reset(); $('#nonstopForm .error').text('');
            return false;
        }
      return false; 
    });

    $('#genre_id').change(function() {
        if($(this).val() == '')
        {
            $('#audio_story_id option').show().removeAttr('disabled');
        }
        else{
            var genre_id = $(this).val();

            $("#audio_story_id > option").each(function() {
                if($(this).data('id') == genre_id || $(this).attr('value') == '')
                    $(this).show().removeAttr('disabled');
                else
                    $(this).hide().attr('disabled', 'disabled');
            });
        }

        $('#nonstopAudioStoryForm #audio_story_id').select2();
    });

    $('#genre_id2').change(function() {
        if($(this).val() == '')
        {
            $('#audio_story_id2 option').show().removeAttr('disabled');
        }
        else{
            var genre_id2 = $(this).val();

            $("#audio_story_id2 > option").each(function() {
                if($(this).data('id') == genre_id2 || $(this).attr('value') == '')
                    $(this).show().removeAttr('disabled');
                else
                    $(this).hide().attr('disabled', 'disabled');
            });
        }

        $('#nonstopForm #audio_story_id2').select2();
    });

    $('.type').change(function() {
        if($(this).val() == "link_audio")
        {
            $('#audioStoryDiv').hide();
            $('#linkAudioDiv').show();
            $('#link_audio_id2').select2();
        }
        else{
            $('#linkAudioDiv').hide();
            $('#audioStoryDiv').show();
            $('#audio_story_id2').select2();
        }
    });

    $('body').on('click','.replacenonstopAudioStory',function(){
        //  $('.card-header h3.card-title').text('Replace Audio Story'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#nonstopAudioStoryForm')[0].reset(); $('#nonstopAudioStoryForm .error').text('');
        $('#repalce_audio_story').hide();
        $('#repalce_link_audio').hide();
        var id      =   this.id.replace('replacenonstopAudioStory-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("nonstop-audio")}}/'+id,
            success: function (data) {

                $('#repalce_audio_story').show();
                
                $('#nonstopAudioStoryForm #title').val(data.nonstop_audio.audio_story.title);
                $('#nonstopAudioStoryForm #id').val(data.nonstop_audio.id);

                $('#genre_id').html('<option selected="selected" value="">All Genre</option>');
                
                for(i=0; i < data.genres.length; i++)
                {
                    $('#genre_id').append('<option value="'+data.genres[i].id+'">'+data.genres[i].name+'</option>');
                }

                $('#audio_story_id').html('<option selected="selected" value="">Select Audio Story</option>');
                $('#audio_story_id2').html('<option selected="selected" value="">Select Audio Story</option>');
                
                for(i=0; i < data.audio_stories.length; i++)
                {
                    $('#audio_story_id').append('<option value="'+data.audio_stories[i].id+'" data-id="'+data.audio_stories[i].genre_id+'">'+data.audio_stories[i].title+'</option>');
                    $('#audio_story_id2').append('<option value="'+data.audio_stories[i].id+'" data-id="'+data.audio_stories[i].genre_id+'">'+data.audio_stories[i].title+'</option>');
                }

                $("#audio_story_id").select2("destroy");
                $("#audio_story_id2").select2("destroy");

                $("#nonstopAudioStoryForm #audio_story_id").select2();
                $("#nonstopForm #audio_story_id2").select2();

                // $('#save_btn').text('Replace Audio'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#title" ).focus();
    });

    $('body').on('click','.replacenonstopLinkAudio',function(){
        //  $('.card-header h3.card-title').text('Replace Audio Story'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#nonstopLinkAudioForm')[0].reset(); $('#nonstopLinkAudioForm .error').text('');
        $('#repalce_audio_story').hide();
        $('#repalce_link_audio').hide();
        var id      =   this.id.replace('replacenonstopLinkAudio-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("nonstop-audio")}}/'+id,
            success: function (data) {

                $('#repalce_link_audio').show();
                
                $('#nonstopLinkAudioForm #title').val(data.nonstop_audio.link_audio.title);
                $('#nonstopLinkAudioForm #id').val(data.nonstop_audio.id);

                $('#link_audio_id').html('<option selected="selected" value="">Select Audio Story</option>');
                $('#link_audio_id2').html('<option selected="selected" value="">Select Audio Story</option>');
                
                for(i=0; i < data.link_audios.length; i++)
                {
                    $('#link_audio_id').append('<option value="'+data.link_audios[i].id+'">'+data.link_audios[i].title+'</option>');
                    $('#link_audio_id2').append('<option value="'+data.link_audios[i].id+'">'+data.link_audios[i].title+'</option>');
                }

                $("#link_audio_id").select2("destroy");
                $("#link_audio_id2").select2("destroy");

                $("#link_audio_id").select2();
                $("#link_audio_id2").select2();

                // $('#save_btn').text('Replace Audio'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#title" ).focus();
    });

    $('body').on('click','.delnonstopAudioStory',function(){ 
        var linkId = $(this).data("linkid");
        var id      =   this.id.replace('delnonstopAudioStory-',''); $('#delModal #delete_btn').attr('data-id',id).attr('data-linkid',linkId);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        var linkid          =   $(this).data('linkid'); 
        $.ajax({
            type: "DELETE",
            url: '{{url("nonstop-audio")}}/'+id,
            data: { "_token": "{{csrf_token()}}"},
            success: function (data) {
                $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click');
                var smsg        =   'Nonstop Audio deleted successfully!';
                if(linkid > 0)
                    smsg = "Link Audio deleted successfully.";
                toastr.success(smsg);
                $('#data_content').html(data);
                $('#nonstopAudioStoryForm #id').val(0);
                $('#nonstopAudioStoryForm')[0].reset();
                $('#repalce_audio_story').hide();
                $('#repalce_link_audio').hide();
                $('#nonstopAudioStoryForm #tag_ids').val('').trigger('change');
                $('#nonstopAudioStoryForm #audio_file').attr('src', '').hide();
                $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
                // $('.card-header h3.card-title').text('Replace Audio Story'); 
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            } 
        });
        
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/nonstop-audio/replace")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#nonstopAudioStoryForm #save_btn').attr('disabled',false); // $('#nonstopAudioStoryForm #save_btn').text('Replace Audio');
            msg = 'Audio Story replaced successfully!';
            
            $('#exampleModal').modal('hide'); 
            $('#nonstopAudioStoryForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#nonstopAudioStoryForm #id').val(0);
            $('#nonstopAudioStoryForm')[0].reset();
            $('#repalce_audio_story').hide();
            $('#repalce_link_audio').hide();
            // $('.card-header h3.card-title').text('Replace Audio Story'); 
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                // $('#nonstopAudioStoryForm #'+key).parent().append('<span class="error">'+value+'</span>');
                $('#nonstopAudioStoryForm #'+key).closest('div').find('.error').html(value);
            }); 
        }
    });

}

function submitForm1(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/nonstop-audio/replace_link_audio")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#nonstopLinkAudioForm #save_btn').attr('disabled',false); // $('#nonstopLinkAudioForm #save_btn').text('Replace Audio');
            msg = 'Link Audio replaced successfully!';
            
            $('#exampleModal').modal('hide'); 
            $('#nonstopLinkAudioForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#nonstopLinkAudioForm #id').val(0);
            $('#nonstopLinkAudioForm')[0].reset();
            $('#repalce_audio_story').hide();
            $('#repalce_link_audio').hide();
            $('.replaceCard .card-header h3.card-title').text('Replace Link Audio'); 
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                // $('#nonstopLinkAudioForm #'+key).parent().append('<span class="error">'+value+'</span>');
                $('#nonstopLinkAudioForm #'+key).closest('div').find('.error').html(value);
            }); 
        }
    });

}

function submitForm2(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/nonstop-audio")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            msg = 'Non Stop Audio added successfully!';
            
            $('#exampleModal').modal('hide'); 
            $('#nonstopForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#repalce_audio_story').hide();
            $('#repalce_link_audio').hide();
            $('.formCard .card-header h3.card-title').text('Add Non Stop Audio'); 
            
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            $('#nonstopForm #save_btn').attr('disabled',false); // $('#nonstopForm #save_btn').text('Replace Audio');
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                // $('#nonstopForm #'+key).parent().append('<span class="error">'+value+'</span>');
                $('#nonstopForm #'+key).closest('div').find('.error').html(value);
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
                $('#nonstopAudioStoryForm #cancel_btn').trigger('click'); 
                toastr.success(smsg);
                $('#data_content').html(data);
            }else{
                if (data.type == 'warning' || data.type == 'error'){ 
                    $('#allert_success #msg').text(smsg); $('#allert_success').show();
                } else { 
                    $('#data_content').html(data);
                    toastr.success(smsg);
                }
            } setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        }
    });
}
</script>
@endsection
