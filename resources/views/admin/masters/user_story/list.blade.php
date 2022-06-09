@extends('layouts.admin')
@section('title', 'User Stories')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">User Stories</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/user-story','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add User Story</h3>
                    </div>
                    @include('admin.masters.user_story.details')
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
                     <div class="card-title">User Stories List</div>  
                   </div> 
                </div>
                <div id="data_content"> 
                @include('admin.masters.user_story.list.content')
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
    {{ Form::open(['url' => "user-story/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
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
    $("#options").select2({
        tags: true,
        tokenSeparators: [","]
    });
     $('#addDocument').on('click',function(){ 
        $('.modal-header h5.modal-title').text('Add Document'); 
        // $('#exampleModal .modal-content').html($('#exampleModal').html()); 
        $('#typeForm')[0].reset(); $('#typeForm .error').text('');
        $("#options").html('').select2().trigger('change');
        $('#typeForm #id').val(0);
    });

    $('#type').change(function() {
        if($(this).val() == 'choice' || $(this).val() == 'radio')
        {
            $('#options').val('');
            $('#option_div').show();
        }
        else{
            $('#options').val('');
            $('#option_div').hide();
        }
    });

    $('body').on('submit','#userStoryForm',function(e){ 
        $('#userStoryForm .error').html('');
        if($('#title').val() == ''){ $('#userStoryForm #title').closest('div').find('.error').html('Enter User Story Title'); return false }
        else if($('#type').val() == ''){ $('#userStoryForm #type').closest('div').find('.error').html('Select Story Type'); return false }
        else if($('#order').val() == ''){ $('#userStoryForm #order').closest('div').find('.error').html('Enter Story Order'); return false }
        else if($('#type').val() == 'choice' && $('#options').val() == ''){ $('#userStoryForm #options').parents('.form-group').find('.error').html('Enter Story Options'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#userStoryForm #save_btn').attr('disabled',true); $('#userStoryForm #save_btn').text('Validating...'); 
            $('#userStoryForm #save_btn').text('Saving...'); $('#userStoryForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('click','.edituserStory',function(){
         $('.card-header h3.card-title').text('Edit User Story');
         $('#frontval').val('Edit User Story');  
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#userStoryForm')[0].reset(); $('#userStoryForm .error').text('');
        $("#options").html('').select2().trigger('change');
        var id      =   this.id.replace('edituserStory-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("user-story")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                console.log(data);
                $.each( data, function( key, value ) {
                    if(key=="type" && (value=="choice" || value=="radio"))
                    {
                        $('#option_div').show();
                    }
                    else if(key=="type" && value=="text"){
                        $('#option_div').hide();
                    }
                    if(key == 'options' && value != null)
                    {
                        $("#options").html('');
                        var tmp = JSON.parse(value);
                        for(i=0; i < tmp.length; i++)
                        {
                            var newOption = new Option(tmp[i], tmp[i], true, true);
                            $('#options').append(newOption).trigger('change');
                        }

                    }
                    else
                    {
                        $('#userStoryForm #'+key).val(value);
                    }
                }); 
                $("#options").select2({
                    tags: true,
                    tokenSeparators: [","]
                });
                // $('#frontval').text('Update User Story'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#title" ).focus();
    });

    $('body').on('click','.deluserStory',function(){ 
        var id      =   this.id.replace('deluserStory-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        $.ajax({
            type: "DELETE",
            url: '{{url("user-story")}}/'+id,
            data: { "_token": "{{csrf_token()}}"},
            success: function (data) {
                $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click');

                if(data == "0")
                {
                    toastr.error("Sorry, you can't delete! User Story Responses are mapped to this record.");
                    setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
                    return false;
                }

                var smsg        =   'User Story deleted successfully!';
                toastr.success(smsg);
                $('#data_content').html(data);
                $('#userStoryForm #id').val(0);
                $('#userStoryForm')[0].reset();
                $("#options").html('').select2().trigger('change');
                $('.card-header h3.card-title').text('Add User Story'); 
                $('#frontval').val('Add User Story');  
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            } 
        });
        
    });

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("user-story/updateStatus")}}';
        var smsg        =   'User Story activated successfully!';
        if (sts == true){ var status = 1; }else if (sts == false){var status = 0; smsg = 'User Story deactivated successfully!'; }
        updateStatus(id,bId,status,url,'user_stories','active','is_active',smsg);
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/user-story")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#userStoryForm #save_btn').attr('disabled',false); $('#userStoryForm #save_btn').text('Save');
            msg = 'User Story added successfully!';
            if($('#userStoryForm #id').val() > 0){
                var msg = 'User Story updated successfully!';
            }
            $('#exampleModal').modal('hide'); 
            $('#userStoryForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#userStoryForm #id').val(0);
            $('#userStoryForm')[0].reset();
            $("#options").html('').select2().trigger('change');
            $('.card-header h3.card-title').text('Add User Story'); 
            $('#frontval').val('Add User Story');  
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                $('#userStoryForm #'+key).parent().append('<span class="error">'+value+'</span>');
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
                $('#userStoryForm #cancel_btn').trigger('click'); 
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
