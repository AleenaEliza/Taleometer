@extends('layouts.admin')
@section('title', 'Preference Categories')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Preference Categories</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/preference-category','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add Preference Category</h3>
                    </div>
                    @include('admin.masters.preference_category.details')
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
                     <div class="card-title">Preference Categories List</div>  
                   </div> 
                   
                </div>
                <div id="data_content"> 
                @include('admin.masters.preference_category.list.content')
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
    {{ Form::open(['url' => "preference-category/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
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

    $('body').on('submit','#preference_categoryForm',function(e){ 
        $('#preference_categoryForm .error').html('');
        if($('#name').val() == ''){ $('#preference_categoryForm #name').closest('div').find('.error').html('Enter Preference Category Name'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#preference_categoryForm #save_btn').attr('disabled',true); $('#preference_categoryForm #save_btn').text('Validating...'); 
            $('#preference_categoryForm #save_btn').text('Saving...'); $('#preference_categoryForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('click','.editpreferenceCategory',function(){
         $('.card-header h3.card-title').text('Edit Preference Category'); 
         $('#frontval').val('Edit Preference Category'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#preference_categoryForm')[0].reset(); $('#preference_categoryForm .error').text('');
        var id      =   this.id.replace('editpreferenceCategory-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("preference-category")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                $.each( data, function( key, value ) { 
                    $('#preference_categoryForm #'+key).val(value);
                }); 
                // $('#frontval').text('Update Preference Category'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#name" ).focus();
    });

    $('body').on('click','.delpreferenceCategory',function(){ 
        var id      =   this.id.replace('delpreferenceCategory-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        $.ajax({
            type: "DELETE",
            url: '{{url("preference-category")}}/'+id,
            data: { "_token": "{{csrf_token()}}"},
            success: function (data) {
                $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click');

                if(data == "0")
                {
                    toastr.error("Sorry, you can't delete! Preference Bubbles are mapped to this preference category.");
                    setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
                    return false;
                }

                var smsg        =   'Preference Category deleted successfully!';
                toastr.success(smsg);
                $('#data_content').html(data);
                $('#preference_categoryForm #id').val(0);
                $('#preference_categoryForm')[0].reset();
                $('.card-header h3.card-title').text('Add Preference Category'); 
                $('#frontval').val('Add Preference Category'); 
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            } 
        });
        
    });

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("preference-category/updateStatus")}}';
        var smsg        =   'Preference Category activated successfully!';
        if (sts == true){ var status = 1; }else if (sts == false){var status = 0; smsg = 'Preference Category deactivated successfully!'; }
        updateStatus(id,bId,status,url,'preference_categories','active','is_active',smsg);
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/preference-category")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#preference_categoryForm #save_btn').attr('disabled',false); $('#preference_categoryForm #save_btn').text('Save');
            msg = 'Preference Category added successfully!';
            if($('#preference_categoryForm #id').val() > 0){
                var msg = 'Preference Category updated successfully!';
            }
            $('#exampleModal').modal('hide'); 
            $('#preference_categoryForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#preference_categoryForm #id').val(0);
            $('#preference_categoryForm')[0].reset();
            $('.card-header h3.card-title').text('Add Preference Category'); 
            $('#frontval').val('Add Preference Category'); 
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                $('#preference_categoryForm #'+key).parent().append('<span class="error">'+value+'</span>');
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
                $('#preference_categoryForm #cancel_btn').trigger('click'); 
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
