@extends('layouts.admin')
        <link href="{{URL::asset('admin/assets/plugins/sweet-alert/jquery.sweet-modal.min.css')}}" rel="stylesheet" />
        <link href="{{URL::asset('admin/assets/plugins/sweet-alert/sweetalert.css')}}" rel="stylesheet" />
@section('title', 'Access Privileges')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Access Privileges</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
   
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    @if(checkPermission('/access-privilege','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Button Access Privilege</h3>
                    </div>
                    @include('admin.usermanagement.access_privileges.details')
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
                    <div class="card-title">Button Access Privileges</div>
                </div>
                <div id="ajxCont">
                    @include('admin.usermanagement.access_privileges.list.content')
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
        <script src="{{URL::asset('admin/assets/plugins/sweet-alert/jquery.sweet-modal.min.js')}}"></script>
        <script src="{{URL::asset('admin/assets/plugins/sweet-alert/sweetalert.min.js')}}"></script>
        <script src="{{URL::asset('admin/assets/js/sweet-alert.js')}}"></script>
<script type="text/javascript">
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
}); 
$(document).ready(function(){

    localStorage.clear();

// Prompt
    $('body').on('click','#set_priv',function(e){ 
        $("span.error").text("");
        if($("#role_id").val() =="") {
            $("span.error.role_id").text("Please select a role.");
            return false;
        }
        if($("#module_id").val() =="") {
            $("span.error.module_id").text("Please select a Module.");
            return false;
        }
        if($("#page_id").val() =="") {
            $("span.error.page_id").text("Please select a Page.");
            return false;
        }

 
        // jQuery("#returnsform").submit();
        
         var checked = $(".act_opt input[type=checkbox]:checked").length;

      if(!checked) {
  
        swal('Unable to process!', 'Please select atleast 1 action.', 'error');
        return false;
      }else {

        $('body').removeClass('timer-alert');
        swal({
            title: "Set Privilege",
            text: "Are you sure you want to set privileges for selected role?",
            // type: "input",
            showCancelButton: true,
            closeOnConfirm: true,
            confirmButtonText: 'Yes'
        },function(inputValue){

        if (inputValue == true) {
        jQuery("#actionsForm").submit();

            }
        });
      }

      
  });



        $('body').on('change','#role_id',function(){  
        $('#module_id option:not(:first)').remove();
        $('#page_id option:not(:first)').remove();
        $(".act_opt").html(''); 
        var role_id = $('body #role_id').val();    
        if(role_id !="") {
               $.ajax({
            type: "POST",
            url: '{{url("/access-privilege/modules/")}}',
            data: {role_id: role_id},
            success: function (data) { 
             $.each(data,function(key, value)
                {
                    $("#module_id").append('<option value=' + key + '>' + value + '</option>');
                });
            } 
            }); 
        }
        });

        $('body').on('change','#module_id',function(){ 
        $('#page_id option:not(:first)').remove(); 
        $(".act_opt").html('');
        var module_id = $('body #module_id').val();
        var role_id = $('body #role_id').val();    
        if(module_id !="") {
        $.ajax({
        type: "POST",
        url: '{{url("/access-privilege/pages/")}}',
        data: {role_id: role_id,module_id: module_id},
        success: function (data) { 
        $.each(data,function(key, value)
        {
        $("#page_id").append('<option value=' + key + '>' + value + '</option>');
        });
        } 
        }); 
        }
        });

        $('body').on('change','#page_id',function(){ 

        var page_id = $('body #page_id').val();
        var role_id = $('body #role_id').val();    
        if(page_id !="") {
        $.ajax({
        type: "POST",
        url: '{{url("/access-privilege/actions/")}}',
        data: {role_id: role_id,page_id: page_id},
        success: function (data) { 
        $(".act_opt").html(data);
        } 
        }); 
        }
        });


         $('body').on('click','.editAccess',function(){ 

        var page_id = $(this).data('page-id');
        var module_id = $(this).data('module-id');
        var role_id = $(this).data('role-id');
        console.log("page_id"+page_id+"module_id"+module_id+"role_id"+role_id) ; 
        if(role_id !="") {
            $("#role_id").val(role_id).trigger('change');
        }
         if(module_id !="") {
            setTimeout(function() {
            $("#module_id").val(module_id).trigger('change');
            }, 500);
            
        }
        if(page_id !="") {
            setTimeout(function() {
            $("#page_id").val(page_id).trigger('change');
            }, 1000);
            
        }

        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);

        });


     $('#addDocument').on('click',function(){ 
        $('.modal-header h5.modal-title').text('Add Document'); 
        // $('#exampleModal .modal-content').html($('#exampleModal').html()); 
        $('#typeForm')[0].reset(); $('#typeForm .error').text('');
        $('#typeForm #id').val(0);
    });

    
 $('body').on('click','.deluser',function(){ 
        var id      =   this.id.replace('deluser-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        var bId         =   this.id;
        var status      =   1;
        var url         =   '{{url("user/management/updateStatus")}}';
        var smsg        =   'Access privilege deleted successfully!';
        $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click'); 
        updateStatus(id,'',status,url,'access_privileges','status','is_deleted',smsg);
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
</script>

<script type="text/javascript">
    $(document).ready(function(){
            @if(Session::has('message'))
            @if(session('message')['type'] =="success")
            
            toastr.success("{{session('message')['text']}}"); 
            @else
            toastr.error("{{session('message')['text']}}"); 
            @endif
            @endif
            
            @if ($errors->any())
            @foreach ($errors->all() as $error)
            toastr.error("{{$error}}"); 
            
            @endforeach
            @endif
    });
    </script>
@endsection
