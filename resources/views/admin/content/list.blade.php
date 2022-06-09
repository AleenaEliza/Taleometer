@extends('layouts.admin')
@section('title', 'Contents')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Contents</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/content','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Update Content</h3>
                    </div>
                    @include('admin.content.details')
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
                     <div class="card-title">Contents List</div>  
                   </div> 
                   <!-- <div class="col-2 text-right">
                        <select class="form-control" id="filterstatus" style="margin-right: 30px;">
                        <option value="">All Status</option>
                        <option value="Active1">Enabled</option>
                        <option value="Inactive">Disabled</option>
                        </select>
                   </div> -->
                </div>
                <div id="data_content"> 
                @include('admin.content.list.content')
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
    {{ Form::open(['url' => "content/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
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

    $('#value').richText();

    function extractContent(s) {
        var span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    };

    $('body').on('submit','#contentForm',function(e){ 
        $('#contentForm .error').html('');
        if($('#title').val() == ''){ $('#contentForm #title').closest('div').find('.error').html('Enter Content Title'); $('#contentForm #title').focus(); return false }
        if($('#slug').val() == ''){ $('#contentForm #slug').closest('div').find('.error').html('Enter Slug'); $('#contentForm #title').focus(); return false }
        // else if($('#value').val() == '' || $('#value').val() == '<div><br></div>'){ $('#contentForm #value').parents('.form-group').find('.error').html('Enter Content Text'); $('#contentForm #value').focus(); return false }
        else if($('#value').val() == '' || extractContent($('#value').val()) == ''){ $('#contentForm #value').parents('.form-group').find('.error').html('Enter Content Text'); $('#contentForm #value').focus(); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#contentForm #save_btn').attr('disabled',true); $('#contentForm #save_btn').text('Validating...'); 
            $('#contentForm #save_btn').text('Saving...'); $('#contentForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('click','.editContent',function(){
         $('.card-header h3.card-title').text('Update Content'); 
         $('#frontval').val('Save Content'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#contentForm')[0].reset(); $('#contentForm .error').text('');
        $("#value").val('').trigger('change');
        var id      =   this.id.replace('editContent-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("content")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                $.each( data, function( key, value ) { 
                    $('#contentForm #'+key).val(value).trigger('change');
                }); 
                // $('#frontval').text('Update Content'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#name" ).focus();
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/content")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#contentForm #save_btn').attr('disabled',false); $('#contentForm #save_btn').text('Save');
            msg = 'Content added successfully!';
            if($('#contentForm #id').val() > 0){
                var msg = 'Content updated successfully!';
            }
            $('#exampleModal').modal('hide'); 
            $('#contentForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#contentForm #id').val(0);
            $('#contentForm')[0].reset();
            $("#value").val('').trigger('change');
            $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");;
            $('.card-header h3.card-title').text('Update Content'); 
            $('#frontval').val('Save Content'); 
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                // $('#contentForm #'+key).parent().append('<span class="error">'+value+'</span>');
                $('#contentForm #'+key).closest('div').find('.error').html(value);
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
                $('#contentForm #cancel_btn').trigger('click'); 
                toastr.success(smsg);
                $('#data_content').html(data);
            }else{
                if (data.type == 'warning' || data.type == 'error'){ 
                    $('#allert_success #msg').text(smsg); $('#allert_success').show();
                } else { 
                    // $('#data_content').html(data);
                    toastr.success(smsg);
                }
            } setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        }
    });
}
</script>
@endsection
