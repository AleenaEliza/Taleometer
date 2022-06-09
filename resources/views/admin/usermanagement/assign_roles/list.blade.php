@extends('layouts.admin')
@section('title', 'Assigned Roles')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Roles</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/assign/role','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Assign Role</h3>
                    </div>
                    @include('admin.usermanagement.assign_roles.details')
                </div>
            </div>
        </div>
        @endif
    <!-- Row -->
    <div class="row">
        <div class="col-12">
            <!--div-->
            <div id="data_content" class="main-card mb-3 card">
                <div class="card-header">
                    <div class="card-title">Assigned Roles</div>
                </div>
                @include('admin.usermanagement.assign_roles.list.content')
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
    {{ Form::open(['url' => "user/management/updateStatus", 'id' => 'delForm', 'name' => 'delForm'])}}
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

    $('body').on('submit','#roleForm',function(e){ 
        $('#roleForm .error').html('');
        if($('#name') == ''){ $('#roleForm #name').closest('div').find('.error').html('Enter Role Name'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#roleForm #save_btn').attr('disabled',true); $('#roleForm #save_btn').text('Validating...'); 
            $.ajax({
                type: "POST",
                url: '{{url("user/management/validate")}}',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    if(data == 'success'){ 
                        $('#roleForm #save_btn').text('Saving...'); $('#roleForm #cancel_btn').trigger('click'); submitForm(formData); return false;
                     //    $('#typeForm #can_submit').val(1); submitForm());
                    }else{
                        var errKey = ''; var n = 0;
                        $.each(data, function(key,value) { if(n == 0){ errKey = key; n++; }
                            $('#roleForm #'+key).closest('div').find('.error').html(value);
                        }); 
                        $('#roleForm #'+errKey).focus();
                        $('#roleForm #save_btn').attr('disabled',false); $('#roleForm #save_btn').text('Save'); return false;
                    }
                    return false;
                }
            });


        }
      return false; 
    });

    $('body').on('click','.editRole',function(){
         $('.card-header h3.card-title').text('Edit Role'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#roleForm')[0].reset(); $('#roleForm .error').text('');
        var id      =   this.id.replace('editRole-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("assign/role")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                $.each( data, function( key, value ) { 
                    $('#roleForm #'+key).val(value);
                }); 
                $('#roleForm #role_id option').removeAttr("disabled");
                $('#roleForm #role_id option:selected').attr("disabled", true);
                $('#roleForm #role_id').val("").change();
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
    });

    $('body').on('click','.delRole',function(){ 
        var id      =   this.id.replace('delRole-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        var bId         =   this.id;
        var status      =   '';
        var url         =   '{{url("user/management/updateStatus")}}';
        var smsg        =   'Role unassigned successfully!';
        $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click'); 
        updateStatus(id,'',status,url,'assign_roles','status','role_id',smsg);
    });

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("user/management/updateStatus")}}';
        var smsg        =   'Role activated successfully!';
        if (sts == true){ var status = 1; }else if (sts == false){var status = 0; smsg = 'Role deactivated successfully!'; }
        updateStatus(id,bId,status,url,'roles','active','is_active',smsg);
    });
     $('body').on('change','#user',function(){
        $(this).closest('div').find('.error').html('');
        getRoleDropdown(this.value,'');  
    });
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("assign/role/save")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
          $('#roleForm #save_btn').attr('disabled',false); $('#roleForm #save_btn').text('Save');
          if($('#roleForm #id').val() > 0){ 
            var msg = 'Roles Assigned successfully!'; }
            else{ msg = 'Roles Assigned successfully!'; }
                $('#exampleModal').modal('hide'); 
                $('#roleForm #cancel_btn').trigger('click'); 
                toastr.success(msg);
                 window.location='{{url("assign/role")}}';
                $('#roleForm #id').val(0);
                $('#roleForm')[0].reset(); 
          setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
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
                $('#roleForm #cancel_btn').trigger('click'); 
                toastr.success(smsg);
                 // window.location='{{url("assign/role")}}';
                $('#data_content').html(data);
                $("#asign-role").load(location.href + " #asign-role");
            }else{
                if (data.type == 'warning' || data.type == 'error'){ 
                    $('#allert_success #msg').text(smsg); $('#allert_success').show();
                } else { 
                    toastr.success(smsg);
                }
            } setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        }
    });
}

function getRoleDropdown(cId,selected){  
        $.ajax({
            type: "POST",
            url: '{{url("getDropdown/role/")}}',
            data: {value:cId,selected: selected, placeholder:'Select Role','_token': '{{ csrf_token()}}'},
            success: function (data) {
                $('#roledrpdwn').html(data);
            }
        });
    }
</script>
@endsection
