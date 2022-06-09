@extends('layouts.admin')
@section('title', 'Notifications')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Notifications</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/notification','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add Notification</h3>
                    </div>
                    @include('admin.notification.details')
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
                     <div class="card-title">Notifications List</div>  
                   </div> 
                   <div class="col-2 text-right">
                        <select class="form-control" id="filterstatus" style="margin-right: 30px;">
                        <option value="">All Status</option>
                        <option value="Active1">Enabled</option>
                        <option value="Inactive">Disabled</option>
                        </select>
                   </div>
                </div>
                <div id="data_content"> 
                @include('admin.notification.list.content')
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
    {{ Form::open(['url' => "notification/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
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

    $('#content').richText();

    $("body").on('change','#notificationForm #image',function(){  readURL(this); }); 

    function readURL(input) { 
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { $('body #'+input.id+'_img').attr('src', e.target.result); $('body #'+input.id+'_img').show(); }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function extractContent(s) {
        var span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    };

    $('body').on('submit','#notificationForm',function(e){ 
        $('#notificationForm .error').html('');
        if($('#title').val() == ''){ $('#notificationForm #title').closest('div').find('.error').html('Enter Notification Title'); $('#notificationForm #title').focus(); window.scrollTo(0, 0); return false }
        // else if($('#content').val() == '' || $('#content').val() == '<div><br></div>'){ $('#notificationForm #content').parents('.form-group').find('.error').html('Enter Notification Content'); $('#notificationForm #content').focus(); window.scrollTo(0, 50); return false }
        else if($('#content').val() == '' || extractContent($('#content').val()) == ''){ $('#notificationForm #content').parents('.form-group').find('.error').html('Enter Notification Content'); $('#notificationForm #content').focus(); window.scrollTo(0, 50); return false }
        // else if($('#image').val() == '' && !($('#notificationForm #id').val() > 0)){ $('#notificationForm #image').parents('.form-group').find('.error').html('Select Notification Banner'); return false }
        // if($('#audio_story_id').val() == ''){ $('#notificationForm #audio_story_id').closest('div').find('.error').html('Select Audio Story'); $('#notificationForm #audio_story_id').focus(); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#notificationForm #save_btn').attr('disabled',true); $('#notificationForm #save_btn').text('Validating...'); 
            $('#notificationForm #save_btn').text('Saving...'); $('#notificationForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('click','.editNotification',function(){
         $('.card-header h3.card-title').text('Edit Notification'); 
         $('#frontval').val('Edit Notification'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#notificationForm')[0].reset(); $('#notificationForm .error').text('');
        $("#content").val('').trigger('change');
        $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
        var id      =   this.id.replace('editNotification-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("notification")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                $.each( data, function( key, value ) { 
                    if(key == 'banner')
                    {
                        if(value && value != '')
                        {
                            $('#image_img').attr('src', value);
                        }
                        else
                            $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
                    }
                    else{
                        $('#notificationForm #'+key).val(value).trigger('change');
                    }
                }); 
                // $('#frontval').text('Update Notification'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#name" ).focus();
    });

    $('body').on('click','.delNotification',function(){ 
        var id      =   this.id.replace('delNotification-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        $.ajax({
            type: "DELETE",
            url: '{{url("notification")}}/'+id,
            data: { "_token": "{{csrf_token()}}"},
            success: function (data) {
                $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click');
                var smsg        =   'Notification deleted successfully!';
                toastr.success(smsg);
                $('#data_content').html(data);
                $('#notificationForm #id').val(0);
                $('#notificationForm')[0].reset();
                $("#content").val('').trigger('change');
                $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
                $('.card-header h3.card-title').text('Add Notification'); 
                $('#frontval').val('Add Notification'); 
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);

                table =  $('#notification_list').DataTable({
                    "aaSort":[],
                        "columnDefs": [
                            { "searchable": false, "targets": [0,5] },
                            { "orderable": false, "targets": [0,5] },
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
        
    });

    if ( ! $.fn.DataTable.isDataTable( '#notification_list' ) ) {
        var table =  $('#notification_list').DataTable({
            "aaSort":[],
                "columnDefs": [
                    { "searchable": false, "targets": [0,5] },
                    { "orderable": false, "targets": [0,5] },
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
    
     $('#filterstatus').on('change', function () {
        table.columns(3).search( this.value ).draw();
    } );
    

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("notification/updateStatus")}}';
        var smsg        =   'Notification activated successfully!';
        if (sts == true){ var status = 1; $(this).attr("checked", ""); $(this).parent().find("p").text("Active1"); $('#status-'+id).prop("checked", true);}
        else if (sts == false){var status = 0; smsg = 'Notification deactivated successfully!'; $(this).removeAttr("checked"); $(this).parent().find("p").text("Inactive"); $('#status-'+id).prop("checked", false);}

        if ( $.fn.dataTable.isDataTable( '#notification_list' ) )
        {
            $('#notification_list').dataTable().fnDestroy();   
        }

        table =  $('#notification_list').DataTable({
            "aaSort":[],
                "columnDefs": [
                    { "searchable": false, "targets": [0,5] },
                    { "orderable": false, "targets": [0,5] },
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
        updateStatus(id,bId,status,url,'notifications','active','is_active',smsg);
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/notification")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#notificationForm #save_btn').attr('disabled',false); $('#notificationForm #save_btn').text('Save');
            msg = 'Notification added successfully!';
            if($('#notificationForm #id').val() > 0){
                var msg = 'Notification updated successfully!';
            }
            $('#exampleModal').modal('hide'); 
            $('#notificationForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#notificationForm #id').val(0);
            $('#notificationForm')[0].reset()
            $("#content").val('').trigger('change');
            $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");;
            $('.card-header h3.card-title').text('Add Notification'); 
            $('#frontval').val('Add Notification'); 
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                // $('#notificationForm #'+key).parent().append('<span class="error">'+value+'</span>');
                $('#notificationForm #'+key).closest('div').find('.error').html(value);
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
                $('#notificationForm #cancel_btn').trigger('click'); 
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
