@extends('layouts.admin')
@section('title', 'Tags')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Tags</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/tag','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add Tag</h3>
                    </div>
                    @include('admin.masters.tag.details')
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
                     <div class="card-title">Tags List</div>  
                   </div> 
                </div>
                <div id="data_content"> 
                @include('admin.masters.tag.list.content')
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
    {{ Form::open(['url' => "tag/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
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

    $('#preference_bubble_ids').select2();

     $('#addDocument').on('click',function(){ 
        $('.modal-header h5.modal-title').text('Add Document'); 
        // $('#exampleModal .modal-content').html($('#exampleModal').html()); 
        $('#tagForm')[0].reset(); $('#tagForm .error').text('');
        $('#tagForm #preference_bubble_ids').val('').trigger('change');
        $('#tagForm #id').val(0);
    });

    $('body').on('submit','#tagForm',function(e){ 
        $('#tagForm .error').html('');
        if($('#name').val() == ''){ $('#tagForm #name').closest('div').find('.error').html('Enter Tag Name'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#tagForm #save_btn').attr('disabled',true); $('#tagForm #save_btn').text('Validating...'); 
            $('#tagForm #save_btn').text('Saving...'); $('#tagForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('click','.editTag',function(){
         $('.card-header h3.card-title').text('Edit Tag'); 
         $('#frontval').val('Edit Tag'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#tagForm')[0].reset(); $('#tagForm .error').text('');
        $('#tagForm #preference_bubble_ids').val('').trigger('change');
        var id      =   this.id.replace('editTag-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("tag")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                $.each( data, function( key, value ) { 
                    if(key == 'preference_bubble_tags')
                    {
                        var tmp = value;
                        var preference_bubble_ids = [];
                        for(i=0; i < tmp.length; i++)
                        {
                            preference_bubble_ids.push(tmp[i].preference_bubble_id);
                        }
                        
                        $("#preference_bubble_ids").select2({
                            multiple: true,
                        });
                        $('#preference_bubble_ids').val(preference_bubble_ids).trigger('change');
                    }
                    else{
                        $('#tagForm #'+key).val(value);
                    }
                }); 
                // $('#frontval').text('Update Tag'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#name" ).focus();
    });

    $('body').on('click','.delTag',function(){ 
        var id      =   this.id.replace('delTag-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        $.ajax({
            type: "DELETE",
            url: '{{url("tag")}}/'+id,
            data: { "_token": "{{csrf_token()}}"},
            success: function (data) {
                $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click');

                if(data == "0")
                {
                    toastr.error("Sorry, you can't delete! Audio Stories are mapped to this tag.");
                    setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
                    return false;
                }

                var smsg        =   'Tag deleted successfully!';
                toastr.success(smsg);
                $('#data_content').html(data);
                $('#tagForm #id').val(0);
                $('#tagForm')[0].reset();
                $('#tagForm #preference_bubble_ids').val('').trigger('change');
                $('.card-header h3.card-title').text('Add Tag'); 
                $('#frontval').val('Add Tag'); 
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            } 
        });
        
    });

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("tag/updateStatus")}}';
        var smsg        =   'Tag activated successfully!';
        if (sts == true){ var status = 1; }else if (sts == false){var status = 0; smsg = 'Tag deactivated successfully!'; }
        updateStatus(id,bId,status,url,'tags','active','is_active',smsg);
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/tag")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#tagForm #save_btn').attr('disabled',false); $('#tagForm #save_btn').text('Save');
            msg = 'Tag added successfully!';
            if($('#tagForm #id').val() > 0){
                var msg = 'Tag updated successfully!';
            }
            $('#exampleModal').modal('hide'); 
            $('#tagForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#tagForm #id').val(0);
            $('#tagForm')[0].reset();
            $('#tagForm #preference_bubble_ids').val('').trigger('change');
            $('.card-header h3.card-title').text('Add Tag'); 
            $('#frontval').val('Add Tag'); 
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                $('#tagForm #'+key).parent().append('<span class="error">'+value+'</span>');
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
                $('#tagForm #cancel_btn').trigger('click'); 
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
