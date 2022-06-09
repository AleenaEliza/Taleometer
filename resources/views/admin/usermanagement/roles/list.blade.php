@extends('layouts.admin')
@section('title', 'Roles')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Roles</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/roles','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add Role</h3>
                    </div>
                    @include('admin.usermanagement.roles.details')
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
                     <div class="card-title">Roles List</div>  
                   </div> 
                   <div class="col-2 text-right">
                        <select class="form-control" id="filterstatus" style="margin-right: 30px;">
                        <option value="">All Status</option>
                        <option value="Active1">Active</option>
                        <option value="Inactive">Inactive</option>
                        </select>
                   </div>
                </div>
                <div id="data_content"> 
                @include('admin.usermanagement.roles.list.content')
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
         $('#frontval').val('Edit Role');
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#roleForm')[0].reset(); $('#roleForm .error').text('');
        var id      =   this.id.replace('editRole-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("role")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                $.each( data, function( key, value ) { 
                    $('#roleForm #'+key).val(value);
                }); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#name" ).focus();
    });

    $('body').on('click','.delRole',function(){ 
        var id      =   this.id.replace('delRole-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        var bId         =   this.id;
        var status      =   1;
        var url         =   '{{url("user/management/updateStatus")}}';
        var smsg        =   'Role deleted successfully!';
        $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click'); 
        updateStatus(id,'',status,url,'roles','status','is_deleted',smsg);
    });

    var table =  $('#role_list').DataTable({
    "aaSorting": [],
        "columnDefs": [
            { "searchable": false, "targets": [0,5] },
            { "orderable": false, "targets": [0, 5] },
        ],
        "oSearch": { "bSmart": false, "bRegex": true },
        "bStateSave": true,
        "responsive": true,
        "fnStateSave": function (oSettings, oData) {
            localStorage.setItem('offersDataTables', JSON.stringify(oData));
        },
        "fnStateLoad": function (oSettings) {
            return JSON.parse(localStorage.getItem('offersDataTables'));
        }
   });
    
    $('#filterstatus').on('change', function () {
        table.columns(4).search( this.value ).draw();
    } );

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("user/management/updateStatus")}}';
        var smsg        =   'Role activated successfully!';
        if (sts == true){ var status = 1; $(this).attr("checked", ""); $(this).parent().find("p").text("Active1"); $('#status-'+id).prop("checked", true);}
        else if (sts == false){var status = 0; smsg = 'Role deactivated successfully!'; $(this).removeAttr("checked"); $(this).parent().find("p").text("Inactive"); $('#status-'+id).prop("checked", false);}

        if ( $.fn.dataTable.isDataTable( '#role_list' ) )
        {
            table.destroy();   
        }
        table =  $('#role_list').DataTable({
            "aaSorting": [],
                "columnDefs": [
                    { "searchable": false, "targets": [0,5] },
                    { "orderable": false, "targets": [0, 5] },
                ],
                "oSearch": { "bSmart": false, "bRegex": true },
                "bStateSave": true,
                "responsive": true,
                "fnStateSave": function (oSettings, oData) {
                    localStorage.setItem('offersDataTables', JSON.stringify(oData));
                },
                "fnStateLoad": function (oSettings) {
                    return JSON.parse(localStorage.getItem('offersDataTables'));
                }
        });
        updateStatus(id,bId,status,url,'roles','active','is_active',smsg);
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/role/save")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
          $('#roleForm #save_btn').attr('disabled',false); $('#roleForm #save_btn').text('Save');
          if($('#roleForm #id').val() > 0){ 
            var msg = 'Roles updated successfully!'; }
            else{ msg = 'Roles added successfully!'; }
                $('#exampleModal').modal('hide'); 
                $('#roleForm #cancel_btn').trigger('click'); 
                toastr.success(msg);
                $('#data_content').html(data);
                $('#roleForm #id').val(0);
                $('#roleForm')[0].reset();
                $('.card-header h3.card-title').text('Add Role'); 
                $('#frontval').val('Add Role');
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
                if(data == "0")
                {
                    toastr.error("Sorry, you can't delete! Users are mapped to this role.");
                    setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
                    return false;
                }

                // $('#small-modal').modal('hide'); $('#delForm #cancel_btn').trigger('click'); 
                // // $('#allert_success #msg').text(smsg); 
                // // $('#allert_success').show(); 
                $('#exampleModal').modal('hide'); 
                $('#roleForm #cancel_btn').trigger('click'); 
                toastr.success(smsg);
                $('#data_content').html(data);

                table =  $('#role_list').DataTable({
                    "aaSorting": [],
                        "columnDefs": [
                            { "searchable": false, "targets": [0,5] },
                            { "orderable": false, "targets": [0, 5] },
                        ],
                        "oSearch": { "bSmart": false, "bRegex": true },
                        "bStateSave": true,
                        "responsive": true,
                        "fnStateSave": function (oSettings, oData) {
                            localStorage.setItem('offersDataTables', JSON.stringify(oData));
                        },
                        "fnStateLoad": function (oSettings) {
                            return JSON.parse(localStorage.getItem('offersDataTables'));
                        }
                });
            }else{
                if(data == "0")
                {
                    toastr.error("Sorry, you can't deactivate! Users are mapped to this role.");
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
