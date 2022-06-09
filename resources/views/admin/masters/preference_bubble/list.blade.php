@extends('layouts.admin')
@section('title', 'Preference Bubbles')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Preference Bubbles</h4>
        </div>
    <!--     <button id="addDocument" class="mb-2 mr-2 btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus mr-2"></i>Add New</button> -->
    </div>
    <!--End Page header-->
    <!-- Row -->
    @if(checkPermission('/preference-bubble','edit') == true)
    <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add Preference Bubble</h3>
                    </div>
                    @include('admin.masters.preference_bubble.details')
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
                     <div class="card-title">Preference Bubble List</div>  
                   </div> 
                   <div class="col-2 text-right">
                        <select class="form-control" style="margin-right: 30px;" id="filterstatus">
                            <option value="">All Categories</option>
                            @foreach($preference_categories_search as $row)
                                <option value="preference_category_{{$row->id}}">{{@$row->name}}</option>
                            @endforeach
                        </select>
                   </div>
                </div>
                <div id="data_content"> 
                @include('admin.masters.preference_bubble.list.content')
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
    {{ Form::open(['url' => "preference-bubble/delete", 'id' => 'delForm', 'name' => 'delForm'])}}
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

    $("#tag_ids").select2({
    });

    $("body").on('change','#preferenceBubbleForm #image',function(){  readURL(this); }); 

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
        $('#preferenceBubbleForm')[0].reset(); $('#preferenceBubbleForm .error').text('');
        $('#preferenceBubbleForm #tag_ids').val('').trigger('change');
        $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
        $('#typeForm #id').val(0);
    });

    $('body').on('submit','#preferenceBubbleForm',function(e){ 
        $('#preferenceBubbleForm .error').html('');
        if($('#name').val() == ''){ $('#preferenceBubbleForm #name').closest('div').find('.error').html('Enter Preference Bubble Name'); return false }
        if($('#tag_ids').val() == ''){ $('#preferenceBubbleForm #tag_ids').closest('div').find('.error').html('Enter Preference Bubble Tags'); return false }
        else if($('#image').val() == '' && !($('#preferenceBubbleForm #id').val() > 0)){ $('#preferenceBubbleForm #image').closest('div').find('.error').html('Select Preference Image'); return false }
        else if($('#preference_category_id').val() == ''){ $('#preferenceBubbleForm #preference_category_id').closest('div').find('.error').html('Select Preference Category'); return false }
        else{ 
            e.preventDefault();    
            var formData = new FormData(this);
            $('#preferenceBubbleForm #save_btn').attr('disabled',true); $('#preferenceBubbleForm #save_btn').text('Validating...'); 
            $('#preferenceBubbleForm #save_btn').text('Saving...'); $('#preferenceBubbleForm #cancel_btn').trigger('click'); submitForm(formData); return false;
        }
      return false; 
    });

    $('body').on('click','.editpreferenceBubble',function(){
         $('.card-header h3.card-title').text('Edit Preference Bubble'); 
         $('#frontval').val('Edit Preference Bubble'); 
        // $('#exampleModal .modal-content').html($('#sizeModal').html());
        $('#preferenceBubbleForm')[0].reset(); $('#preferenceBubbleForm .error').text('');
        $('#preferenceBubbleForm #tag_ids').val('').trigger('change');
        $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
        var id      =   this.id.replace('editpreferenceBubble-',''); 
        $.ajax({
            type: "GET",
            url: '{{url("preference-bubble")}}/'+id,
            success: function (data) {
                var cnt =''; var st = '';
                $.each( data, function( key, value ) { 
                    if(key == 'image')
                    {
                        if(value && value != '')
                        {
                            $('#image_img').attr('src', value);
                        }
                        else
                            $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
                    }
                    else if(key == 'preference_bubble_tags')
                    {
                        var tmp = value;
                        var tag_ids = [];
                        for(i=0; i < tmp.length; i++)
                        {
                            tag_ids.push(tmp[i].tag_id);
                        }
                        
                        $("#tag_ids").select2({
                            multiple: true,
                        });
                        $('#tag_ids').val(tag_ids).trigger('change');
                    }
                    else{
                        $('#preferenceBubbleForm #'+key).val(value);
                    }
                }); 

                // $('#frontval').text('Update Preference Bubble'); 
            } 
        });
        $('html, body').animate({
        scrollTop: $("#scrolldiv").offset().top-100
        }, 1000);
        $( "#name" ).focus();
    });

    $('body').on('click','.delpreferenceBubble',function(){ 
        var id      =   this.id.replace('delpreferenceBubble-',''); $('#delModal #delete_btn').attr('data-id',id);
        $('.bd-example-modal-sm .modal-content').html($('#delModal').html()); 
    });
    $('body').on('click','.delUser',function(){  
        var id          =   $(this).data('id'); 
        $.ajax({
            type: "DELETE",
            url: '{{url("preference-bubble")}}/'+id,
            data: { "_token": "{{csrf_token()}}"},
            success: function (data) {
                $('.bd-example-modal-sm').removeAttr('aria-modal'); $('#delForm #cancel_btn').trigger('click');

                if(data == "0")
                {
                    toastr.error("Sorry, you can't delete! Tags are mapped to this preference bubble.");
                    setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
                    return false;
                }

                if(data == "-1")
                {
                    toastr.error("Sorry, you can't delete! Users are mapped to this preference bubble.");
                    setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
                    return false;
                }

                var smsg        =   'Preference Bubble deleted successfully!';
                toastr.success(smsg);
                $('#data_content').html(data);
                $('#preferenceBubbleForm #id').val(0);
                $('#preferenceBubbleForm')[0].reset();
                $('#preferenceBubbleForm #tag_ids').val('').trigger('change');
                $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
                $('.card-header h3.card-title').text('Add Preference Bubble'); 
                $('#frontval').val('Add Preference Bubble'); 
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            } 
        });
        
    });

    $("body").on("change", ".status-btn", function () {
        var id          =   this.id.replace('status-','');
        var bId         =   this.id;
        var sts         =   $(this).prop("checked");
        var url         =   '{{url("preference-bubble/updateStatus")}}';
        var smsg        =   'Preference Bubble activated successfully!';
        if (sts == true){ var status = 1; }else if (sts == false){var status = 0; smsg = 'Preference Bubble deactivated successfully!'; }
        updateStatus(id,bId,status,url,'stories','active','is_active',smsg);
    });
    
});

function submitForm(postValues)
{
    $.ajax({
        type: "POST", 
        url: '{{url("/preference-bubble")}}',
        data: postValues,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) { 
            $('#preferenceBubbleForm #save_btn').attr('disabled',false); $('#preferenceBubbleForm #save_btn').text('Save');
            msg = 'Preference Bubble added successfully!';
            if($('#preferenceBubbleForm #id').val() > 0){
                var msg = 'Preference Bubble updated successfully!';
            }
            $('#exampleModal').modal('hide'); 
            $('#preferenceBubbleForm #cancel_btn').trigger('click'); 
            toastr.success(msg);
            $('#data_content').html(data);
            $('#preferenceBubbleForm #id').val(0);
            $('#preferenceBubbleForm')[0].reset();
            $('#preferenceBubbleForm #tag_ids').val('').trigger('change');
            $('#image_img').attr('src', "{{url('storage/app/public/default.png')}}");
            $('.card-header h3.card-title').text('Add Preference Bubble'); 
            $('#frontval').val('Add Preference Bubble'); 
            setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            var err = eval("(" + XMLHttpRequest.responseText + ")");
            $.each( err.errors, function( key, value ) { 
                // $('#preferenceBubbleForm #'+key).parent().append('<span class="error">'+value+'</span>');
                $('#preferenceBubbleForm #'+key).closest('div').find('.error').html(value);
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
                $('#preferenceBubbleForm #cancel_btn').trigger('click'); 
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
