@extends('layouts.admin')
@section('title', 'Genres')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Genres</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/genre','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add Genre</h3>
                    </div>
                    @include('admin.masters.genre.details')
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
                     <div class="card-title">Genres List</div>  
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
                @include('admin.masters.genre.list.content')
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
    {{ Form::open(['url' => "genre/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
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

     $('#addDocument').on('click',function(){ 
        $('.modal-header h5.modal-title').text('Add Document'); 
        // $('#exampleModal .modal-content').html($('#exampleModal').html()); 
        $('#typeForm')[0].reset(); $('#typeForm .error').text('');
        $('#typeForm #id').val(0);
    });

    $('body').on('submit','#genreForm',function(e){ 
        $('#genreForm .error').html('');
        if($('#name').val() == ''){ $('#genreForm #name').closest('div').find('.error').html('Enter Genre Name'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#genreForm #save_btn').attr('disabled',true); $('#genreForm #save_btn').text('Validating...'); 
            $('#genreForm #save_btn').text('Saving...'); $('#genreForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('click','.editGenre',function(){
         $('.card-header h3.card-title').text('Edit Genre'); 
         $('#frontval').val('Edit Genre'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#genreForm')[0].reset(); $('#genreForm .error').text('');
        var id      =   this.id.replace('editGenre-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("genre")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                $.each( data, function( key, value ) { 
                    $('#genreForm #'+key).val(value);
                }); 
                // $('#frontval').text('Update Genre'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#name" ).focus();
    });

    $('body').on('click','.delGenre',function(){ 
        var id      =   this.id.replace('delGenre-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        $.ajax({
            type: "DELETE",
            url: '{{url("genre")}}/'+id,
            data: { "_token": "{{csrf_token()}}"},
            success: function (data) {
                $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click');

                if(data == "0")
                {
                    toastr.error("Sorry, you can't delete! Audio Stories are mapped to this genre.");
                    setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
                    return false;
                }

                var smsg        =   'Genre deleted successfully!';
                toastr.success(smsg);
                $('#data_content').html(data);
                $('#genreForm #id').val(0);
                $('#genreForm')[0].reset();
                $('.card-header h3.card-title').text('Add Genre'); 
                $('#frontval').val('Add Genre'); 
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            } 
        });
        
    });

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("genre/updateStatus")}}';
        var smsg        =   'Genre activated successfully!';
        if (sts == true){ var status = 1; }else if (sts == false){var status = 0; smsg = 'Genre deactivated successfully!'; }
        updateStatus(id,bId,status,url,'genres','active','is_active',smsg);
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/genre")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#genreForm #save_btn').attr('disabled',false); $('#genreForm #save_btn').text('Save');
            msg = 'Genre added successfully!';
            if($('#genreForm #id').val() > 0){
                var msg = 'Genre updated successfully!';
            }
            $('#exampleModal').modal('hide'); 
            $('#genreForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#genreForm #id').val(0);
            $('#genreForm')[0].reset();
            $('.card-header h3.card-title').text('Add Genre'); 
            $('#frontval').val('Add Genre'); 
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                // $('#genreForm #'+key).parent().append('<span class="error">'+value+'</span>');
                $('#genreForm #'+key).closest('div').find('.error').html(value);
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
                $('#genreForm #cancel_btn').trigger('click'); 
                toastr.success(smsg);
                $('#data_content').html(data);
            }else{
                if(data == "0")
                {
                    toastr.error("Sorry, you can't deactivate! Audio Stories are mapped to this genre.");
                    setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
                    $('#status-'+id).prop("checked", true);
                    return false;
                }

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
