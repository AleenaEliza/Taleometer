@extends('layouts.admin')
@section('title', 'Users')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Users</h4>
        </div>
        @if(checkPermission('/users','edit') == true)
        <button id="addUser" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-plus mr-2"></i>Add New User</button>
        @endif
    </div>
    <!--End Page header-->

    <!-- Row -->
    <div class="row">
        <div class="col-12">
            <!--div-->
            <div class="main-card mb-3 card">
                <div class="card-header">
                   <div class="col-10">
                     <div class="card-title">User List</div>  
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
                @include('admin.usermanagement.users.list.content')
                </div>
            </div>
            <!--/div-->

            
        </div>
    </div>
    @include('admin.usermanagement.users.details')
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

     $('#addUser').on('click',function(){ 
        $('#userForm')[0].reset();
        $('#userForm #avatar_img').attr('src',"{{URL('storage/app/public/no-avatar.png')}}"); 
        $('#userForm #id').val(0); $('#userForm .error').text('');
        $('.modal-header h5.modal-title').text('Add User');
        // $('.modal-header #user_code').text(''); 
        $('.bd-example-modal-lg .modal-content').html($('#adminModal').html()); 
    });
    $('body').on('click','button.close',function(){ $('#allert_success').fadeOut(); });

    $('body').on('submit','#userForm',function(e){ 
            $('#userForm .error').html('');
            if($('#userForm #can_submit').val() > 0){ return true; }
            else{ 
                e.preventDefault();    
                var formData = new FormData(this);
                $('#userForm #save_btn').attr('disabled',true); $('#userForm #save_btn').text('Validating...'); 
                $.ajax({
                    type: "POST",
                    url: '{{url("user/management/validate")}}',
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        if(data == 'success'){ 
                            $('#userForm #save_btn').text('Saving...'); submitForm(formData); return false;
                             $('#userForm #can_submit').val(1); $('#userForm').submit();
                        }else{
                            var errKey = ''; var n = 0;
                            $.each(data, function(key,value) { if(n == 0){ errKey = key; n++; }
                                $('#userForm #'+key).closest('div').find('.error').html(value);
                            }); 
                            $('#'+errKey).focus();
                            $('#userForm #save_btn').attr('disabled',false); $('#userForm #save_btn').text('Save'); return false;
                        }
                        return false;
                    }
                });
                
                
            }
          return false; 
        });

       $('body').on('click','.editUser',function(){
            $('#userForm')[0].reset(); $('.modal-header h5').text('Edit User'); $('.bd-example-modal-lg .modal-content').html($('#adminModal').html());
            var id      =   this.id.replace('editUser-',''); $('#userForm .error').text('');
            $.ajax({
                type: "GET",
                url: '{{url("/user")}}/'+id,
                success: function (data) {
                     $.each( data, function( key, value ) {
                        if(key == 'avatar'){ 
                            if(value == null || value == ''){
                                $('#userForm #avatar_img').attr('src',"{{url('storage/app/public/no-avatar.png')}}");
                            }else{ $('#userForm #avatar_img').attr('src',value); }
                        }
                        else if(key == "email")
                        {
                              $('#large-modal #userForm #'+key).val(value).trigger("change");
                        }
                        else
                        {
                              $('#userForm #'+key).val(value);
                        }
                      
                    }); 
                } 
            });
        });

    $('body').on('click','.editDoc',function(){
        $('.modal-header h5').text('Edit Document'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#userForm')[0].reset(); $('#userForm .error').text('');
        var id      =   this.id.replace('editDoc-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("document")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                $.each( data, function( key, value ) { 
                    $('#userForm #'+key).val(value);
                }); 
            } 
        });
    });

    $('body').on('click','.deluser',function(){ 
        $('.modal-header h5').text('Are You Sure?'); 
        var id      =   this.id.replace('deluser-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        var bId         =   this.id;
        var status      =   1;
        var url         =   '{{url("user/management/updateStatus")}}';
        var smsg        =   'User deleted successfully!';
        $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click'); 
        updateStatus(id,'',status,url,'users','status','is_deleted',smsg);
    });

        var table =  $('#users_list').DataTable({
            "aaSorting": [],
            "columnDefs": [
                { "searchable": false, "targets": [0,6] },
                { "orderable": false, "targets": [0, 6] },
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
            table.columns(5).search( this.value ).draw();
        } );

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("user/management/updateStatus")}}';
        var smsg        =   'User activated successfully!';
        if (sts == true){ var status = 1; $(this).attr("checked", ""); $(this).parent().find("p").text("Active1"); $('#status-'+id).prop("checked", true);}
        else if (sts == false){var status = 0; $(this).removeAttr("checked"); $(this).parent().find("p").text("Inactive"); smsg = 'User deactivated successfully!'; $('#status-'+id).prop("checked", false);}

        if ( $.fn.dataTable.isDataTable( '#users_list' ) )
        {
            table.destroy();   
        }
        table = $('#users_list').DataTable({
            "aaSorting": [],
                "columnDefs": [
                    { "searchable": false, "targets": [0,6] },
                    { "orderable": false, "targets": [0, 6] },
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
        updateStatus(id,bId,status,url,'users','active','is_active',smsg);
    });
    
});

$('body').on('change','#userForm #email',function(){
    var email = $('#large-modal #userForm #email').val();
    var id = $('#large-modal #userForm #id').val();

    $.ajax({
        type: "POST",
        url: '{{url("user/management/checkEmail")}}',
        data: { "_token": "{{csrf_token()}}", email: email, id:id},
        success: function (data) {
            if(data == 1)
            {
                $('#userForm #email').closest('div').find('.error').html("This email already has been taken.");
                $('#userForm #email').focus();
            }
            else{
                $('#userForm #email').closest('div').find('.error').html("");
            }
        }
    });
});

function updateStatus(id,rowId,status,url,row,field,req,smsg){
    $.ajax({
        type: "POST",
        url: url,
        data: { "_token": "{{csrf_token()}}", id: id, value: status,field: field, field, req:req, page: row},
        success: function (data) {
            if(field == 'status'){
                $('#exampleModal').modal('hide'); 
                $('#userForm #cancel_btn').trigger('click'); 
                toastr.success(smsg);
                $('#data_content').html(data);

                table =  $('#users_list').DataTable({
                    "aaSorting": [],
                        "columnDefs": [
                            { "searchable": false, "targets": [0,6] },
                            { "orderable": false, "targets": [0, 6] },
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

function submitForm(postValues){
        $.ajax({
            type: "POST",
            url: '{{url("user/save")}}',
            data: postValues,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) { 
              $('#userForm #save_btn').attr('disabled',false); $('#userForm #save_btn').text('Save');
              if($('#userForm #id').val() > 0){ var msg = 'User details updated successfully!'; }else{ msg = 'User details added successfully!'; }
              $('.bd-example-modal-lg').modal('toggle'); 
              // $('#allert_success #msg').text(msg);
              //  $('#allert_success').show();
              $('#userForm #cancel_btn').trigger('click'); 
              toastr.success(msg);
              $('#data_content').html(data);
              setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);

              table =  $('#users_list').DataTable({
                "aaSorting": [],
                "columnDefs": [
                    { "searchable": false, "targets": [0,6] },
                    { "orderable": false, "targets": [0, 6] },
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
            } 
        });
    }
</script>
@endsection
