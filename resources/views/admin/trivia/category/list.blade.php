@extends('layouts.admin')
@section('title', 'Category')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Category</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/story','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add Category</h3>
                    </div>
                    @include('admin.trivia.category.details')
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
                     <div class="card-title">Category List</div>  
                   </div> 
                   <!-- <div class="col-2 text-right">
                        <select class="form-control" id="filterstatus" style="margin-right: 30px;">
                        <option value="">All Status</option>
                        <option value="Active1">Active</option>
                        <option value="Inactive">Inactive</option>
                        </select>
                   </div> -->
                   <div class="col-2 text-right">
                    <button style="" data-backdrop="static" class="btn btn-warning" data-toggle="modal"  data-target="#sort-modal" data-container=""><i class="fa fa-sort mr-1"></i> Sort Order</button>
                   </div>
                </div>
                <div id="data_content"> 
                @include('admin.trivia.category.list.content')
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
    {{ Form::open(['url' => "trivia/category/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
    <div class="modal-body"><p>Do you really want to delete this category?</div>
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

    // function saveOrder() 
    // {
    //   var selectedLanguage = new Array();
    //   $('ul#sortable-row li').each(function() 
    //   {
    //       selectedLanguage.push($(this).attr("id"));
    //   });
    //   document.getElementById("row_order").value = selectedLanguage;
    // }

//     $(function () {
// $('#sortable-row').sortable({
//     tolerance: 'touch',
//     drop: function () {
//         alert('delete!');
//     }
// });
// $('.item').sortable();
// });

    // $(function() {
        
    //     $( "#sortable-row" ).sortable(
    //   {
    //     placeholder: "ui-state-highlight"
    //   }); 
    // })
$(document).ready(function(){

    

    $("body").on('change','#storyForm #image',function(){  readURL(this); }); 

    function readURL(input) { 
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { $('body #'+input.id+'_img').attr('src', e.target.result); $('body #'+input.id+'_img').show(); }
            reader.readAsDataURL(input.files[0]);
        }
    }

     $('#addDocument').on('click',function(){ 
        $('.modal-header h5.modal-title').text('Add Document'); 
        // $('#exampleModal .modal-content').html($('#exampleModal').html()); 
        $('#typeForm')[0].reset(); $('#typeForm .error').text('');
        $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
        $('#typeForm #id').val(0);
    });

    $('body').on('submit','#storyForm',function(e){ 
        $('#storyForm .error').html('');
        if($('#name').val() == ''){ $('#storyForm #name').closest('div').find('.error').html('Enter Category Name'); return false }
        else if($('#image').val() == '' && !($('#storyForm #id').val() > 0)){ $('#storyForm #image').closest('div').find('.error').html('Select Category Image'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#storyForm #save_btn').attr('disabled',true); $('#storyForm #save_btn').text('Validating...'); 
            $('#storyForm #save_btn').text('Saving...'); $('#storyForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('click','.editStory',function(){
         $('.card-header h3.card-title').text('Edit Category'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#storyForm')[0].reset(); $('#storyForm .error').text('');
        $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
        var id      =   this.id.replace('editStory-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("trivia/category/view")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                $.each( data, function( key, value ) { 
                    if(key == 'image')
                    {
                        if(value && value != '')
                        {
                            // var url = '{{ url(":path") }}';
                            // url = url.replace(':path', value);
                            // $('#image_img').attr('src', url);
                            var url = value;
                        }
                        else
                            $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
                    }
                    else{
                        if(key=='category_name')
                        {
                        $('#storyForm #name').val(value);
                        }
                        $('#storyForm #'+key).val(value);
                    }
                }); 

                // $('#frontval').text('Update Story'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#name" ).focus();
    });

    $('body').on('click','.delStory',function(){ 
        var id      =   this.id.replace('delStory-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        $.ajax({
            type: "GET",
            url: '{{url("trivia/category/delete")}}/'+id,
            data: { "_token": "{{csrf_token()}}"},
            success: function (data) {
                $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click');
                var smsg        =   'Category deleted successfully!';
                toastr.success(smsg);
                $('#data_content').html(data);
                $('#storyForm #id').val(0);
                $('#storyForm')[0].reset();
                $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
                $('.card-header h3.card-title').text('Add Category'); 
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            } 
        });
        
    });

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("trivia/category/updateStatus")}}';
        var smsg        =   'Category activated successfully!';
        if (sts == true){ var status = 1; }else if (sts == false){var status = 0; smsg = 'Category deactivated successfully!'; }
        updateStatus(id,bId,status,url,'stories','active','is_active',smsg);
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/trivia/category/save")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#storyForm #save_btn').attr('disabled',false); $('#storyForm #save_btn').text('Save');
            msg = 'Category added successfully!';
            if($('#storyForm #id').val() > 0){
                var msg = 'Category updated successfully!';
            }
            $('#exampleModal').modal('hide'); 
            $('#storyForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#storyForm #id').val(0);
            $('#storyForm')[0].reset();
            $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
            $('.card-header h3.card-title').text('Add Category'); 
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                // $('#storyForm #'+key).parent().append('<span class="error">'+value+'</span>');
                $('#storyForm #'+key).closest('div').find('.error').html(value);
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
                $('#storyForm #cancel_btn').trigger('click'); 
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
