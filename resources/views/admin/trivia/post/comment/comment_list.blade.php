@extends('layouts.admin')
@section('title', 'Trivia Post')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Trivia Post</h4>
        </div>
        @if(checkPermission('/trivia/post','edit') == true)
        <!--<a href="{{url('trivia/post/add')}}" id="" class="mb-2 mr-2 btn btn-primary"><i class="fa fa-plus mr-2"></i>Add New</a>-->
        @endif
    </div>
    <!--End Page header-->
    <div id="div_cmmt">
@include('admin.trivia.post.comment.comment_page')
</div>
    </div>

<script type="text/javascript">
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
}); 
$(document).ready(function(){
    
    $('li').removeClass('is-expanded');
  $('.trivia').closest('li').addClass('is-expanded');
  $('li .active a').addClass('slide-item active');

     $('#addUser').on('click',function(){ 
        $('#userForm')[0].reset();
        $('#userForm #avatar_img').attr('src',"{{URL('storage/app/public/no-avatar.png')}}"); 
        $('#userForm #id').val(0); $('#userForm .error').text('');
        $('.modal-header h5.modal-title').text('Add User');
        // $('.modal-header #user_code').text(''); 
        $('.bd-example-modal-lg .modal-content').html($('#adminModal').html()); 
    });
    $('body').on('click','button.close',function(){ $('#allert_success').fadeOut(); });

    $('body').on('submit','#PostForm',function(e){ 
            $('#PostForm .error').html('');
            if($('#PostForm #can_submit').val() > 0){ return true; }
            else{ 
                e.preventDefault();    
                var formData = new FormData(this);
                $('#PostForm #save_btn').attr('disabled',true); $('#PostForm #save_btn').text('Validating...'); 
                $.ajax({
                    type: "POST",
                    url: '{{url("trivia/posts/validate")}}',
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        if(data == 'success'){ 
                            $('#PostForm #save_btn').text('Saving...'); //submitForm(formData); return false;
                             $('#PostForm #can_submit').val(1); $('#PostForm').submit();
                        }else{
                            var errKey = ''; var n = 0;
                            $.each(data, function(key,value) { if(n == 0){ errKey = key; n++; }
                                $('#PostForm #'+key).closest('div').find('.error').html(value);
                            }); 
                            $('#'+errKey).focus();
                            $('#PostForm #save_btn').attr('disabled',false); $('#PostForm #save_btn').text('Save'); return false;
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
                            }else{ $('#userForm #avatar_img').attr('src',"{{url('storage')}}"+value); }
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
        var url         =   '{{url("trivia/posts/updateStatus")}}';
        var smsg        =   'Post deleted successfully!';
        $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click'); 
        updateStatus(id,'',status,url,'users','status','is_deleted',smsg);
    });

    $("body").on("click", ".submit-btn", function () {
        // var id          =   this.id.replace('status-','');
        // var bId         =   this.id;
        // var sts         =   $(this).prop("checked");
        var id          =   $('#hid_post_id').val();
        var comt_id     =   $('#hid_cmt_id').val();
        var comment     =   $('#comment').val();
        var url         =   '{{url("trivia/posts/addComment")}}';
        var smsg        =   'Comment added successfully!';
        // if (sts == true){ var status = 1; }else if (sts == false){var status = 0; smsg = 'Something went wrong'; }
        addcomment(id,comt_id,comment,url,smsg);
    });

    $("body").on("click", ".reply-btn", function () {

        $('.submit-btn').text('Send reply');
         var id          =   this.id.replace('replies-','');
        // alert(id);
        $('#hid_cmt_id').val(id);
        
        $("#comment_grp #comment").focus();

       
    });
    $("body").on("click", ".reset-btn", function () {

        $('.submit-btn').text('Submit');
        // var id          =   this.id.replace('replies-','');
        // alert(id);
        $('#hid_cmt_id').val('');
        $('#comment').val('');
       
    });
    
});

function addcomment(id,comt_id,comment,url,smsg){
    $.ajax({
        type: "POST",
        url: url,
        data: { "_token": "{{csrf_token()}}", id: id, comt_id: comt_id,comment: comment},
        success: function (data) {
                // $('#exampleModal').modal('hide'); 
                // $('#userForm #cancel_btn').trigger('click'); 
                toastr.success(smsg);
                $('#div_cmmt').html(data);
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
                $('#exampleModal').modal('hide'); 
                $('#userForm #cancel_btn').trigger('click'); 
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
            } 
        });
    }
</script>
@endsection