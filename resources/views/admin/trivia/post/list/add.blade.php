@extends('layouts.admin')
@section('title', 'Trivia Post')
@section('content')
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">Trivia Post</h4>
        </div>
    </div>
    <!--End Page header-->

    <div class="row">
        <div class="col-12">
            <div class="row" id="scrolldiv">
            <div class="col-lg-12 col-md-12">
                <div  class="card">
                    <div class="card-header">
                        <h3 class="card-title">{{$titlehead}}</h3>
                    </div>
                    

                    <div class="card-body">
                        <form action="{{route('trivia.savepost')}}" id="PostForm" name="PostForm" enctype="multipart/form-data" method="post">
    {{Form::hidden('id',0,['id'=>'id'])}}
    {{Form::hidden('arr_key','audio_stories',['id'=>'arr_key'])}}   
    {{Form::hidden('pg_name','audio_stories',['id'=>'pg_name'])}}

    @csrf
   @if ($errors->any())
                                @foreach ($errors->all() as $error)

                                <div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>{{$error}}</div>
                                @endforeach
                                @endif
    <div class="row">
        <div class="col-sm-6 col-md-3 col-xl-3 col-lg-3">
             <div class="form-group">
                 <label for="tag">Tag <span class="text-red">*</span></label>
                 <input type="text" id="tag" name="tag" class="form-control" list="tagname"> 
                 <datalist id="tagname">
                </datalist>
                 <span class="error"></span>
                 <!--<select class="form-control select2-show-search" id="tag" name="tag"><option>Select Tag</option></select>-->
             </div>
        </div>
        <!-- <div class="col-sm-6 col-md-2 col-xl-2 col-lg-2 pt-5">
             <button type="button" class="modal-effect btn btn-primary" data-effect="effect-scale" data-toggle="modal" href="#tag_modal"><i class="fa fa-plus mr-2"></i>More</button>
        </div> -->
        <div class="col-sm-12 col-md-9 col-xl-9 col-lg-9">
             <div class="form-group">
                <label>Write a question <span class="text-red">*</span></label>
               <input type="text" class="form-control @error('question') is-invalid @enderror" name="question" id="question" placeholder="Type question here" value="{{ old('question') }}">
               <span class="error"></span>
                @error('question')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div class="form-group">
                <label>Trivia Category <span class="text-red">*</span></label>
                <select class="form-control @error('category') is-invalid @enderror" placeholder="Select Triva Category" id="category" name="category">
                    @foreach($category as $row)
                    <option value="{{$row->id}}">{{$row->category_name}}</option>
                    @endforeach
                </select>
                <span class="error"></span>
               @error('category')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
        <div class="col-sm-12 col-md-3">
            <div class="form-group">
                <label>Question Type <span class="text-red">*</span></label>
                <div class="col-sm-8">
            <label class="radio-inline custom-control-md @error('question_type') is-invalid @enderror"> <input type="radio" {{(old('question_type') == "image") ? 'checked': ''}} name="question_type" id="q_image" value="image"> Image </label>&nbsp;&nbsp;
            <label class="radio-inline custom-control-md @error('question_type') is-invalid @enderror"> <input type="radio" {{(old('question_type') == "video") ? 'checked': ''}} name="question_type" id="q_video" value="video"> Video </label>
            </div>
            <input type="hidden" id="question_type">
            <span class="error"></span>
               @error('question_type')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
        <div class="col-sm-12 col-md-5" id="q_image_div" style="display:none;">
            <div class="row">
                <div class="col-sm-8 col-md-6">
                    <div class="form-group">
                        <label>Upload question Image <span class="text-red">*</span></label>
                        <!-- {{Form::file('question_image',['id'=>'question_image','class'=>'form-control', 'accept' => 'image/*'])}} -->
                        <input type="file" name="question_image" id="question_image" class="form-control @error('question_image') is-invalid @enderror" accept="image/*">
                        <span class="error"></span>
                    </div>
                    @error('question_image')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
                </div>
                <div class="col-sm-4 col-md-6 mb-3">
                    <img id="question_image_img" src="{{url('storage/app/public/default.png')}}" alt="avatar" style="height: 100px;" />
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-3" id="q_thumb" style="display:none;">
            <div class="row">
                <div class="col-sm-8 col-md-6">
                    <div class="form-group">
                        <label>Upload Thumbnail Image</label>
                        <!-- {{Form::file('question_image',['id'=>'question_image','class'=>'form-control', 'accept' => 'image/*'])}} -->
                        <input type="file" name="thumbnail" id="thumbnail" class="form-control @error('thumbnail') is-invalid @enderror" accept="image/*">
                        <span class="error"></span>
                    </div>
                    @error('thumbnail')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
                </div>
                <div class="col-sm-4 col-md-6 mb-3">
                    <img id="thumbnail_img" src="{{url('storage/app/public/default.png')}}" alt="avatar" style="height: 100px;" />
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-3" id="q_video_div" style="display:none;">
            <div class="col-sm-6 col-md-5">
            <div class="form-group">
                <label>Upload Video Question <span class="text-red">*</span></label>
               <input type="file" name="question_video" id="question_video"  class="file_multi_video @error('question_video') is-invalid @enderror" accept="video/*">
               <span class="error"></span>
               @error('question_video')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>

        <div class="col-sm-6 col-md-7 mb-3">
            <video width="400" controls>
  <source src="" id="video_here">
    Your browser does not support HTML5 video.
  </video>
</div>
        </div>
        <div class="col-sm-12 col-md-3">
            <div class="form-group">
                <label>Answer Type <span class="text-red">*</span></label>
                <div class="col-sm-8">
            <label class="radio-inline custom-control-md @error('answer_type') is-invalid @enderror"> <input type="radio" {{(old('answer_type') == "text") ? 'checked': ''}} name="answer_type" id="ans_text" value="text"> Text </label>&nbsp;&nbsp;
            <label class="radio-inline custom-control-md @error('answer_type') is-invalid @enderror"> <input type="radio" {{(old('answer_type') == "image") ? 'checked': ''}} name="answer_type" id="ans_image" value="image"> Image </label>
            </div>
            <input type="hidden" id="answer_type">
            <span class="error"></span>
               @error('answer_type')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
        <div class="col-sm-12 col-md-9" id="ans_image_div" style="display:none;">
            <div class="row">
                <div class="col-sm-8 col-md-6">
                    <div class="form-group">
                        <label>Upload Answer Image <span class="text-red">*</span></label>
                        <!-- {{Form::file('answer_image',['id'=>'answer_image','class'=>'form-control', 'accept' => 'image/*'])}} -->
                        <input type="file" name="answer_image" id="answer_image" class="form-control @error('answer_image') is-invalid @enderror" accept="image/*" >
                        <span class="error"></span>
                        @error('answer_image')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 mb-3">
                    <img id="answer_image_img" src="{{url('storage/app/public/default.png')}}" alt="avatar" style="height: 100px;" />
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-5" id="ans_text_div" style="display:none;">
            <div class="form-group">
                <label>Write answer here <span class="text-red">*</span></label>
                <input type="text" name="answer_text" id="answer_text" class="form-control @error('answer_text') is-invalid @enderror">
                <span class="error"></span>
               @error('answer_text')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
        <div class="col-sm-12 col-md-3">
            <div class="form-group">
                <label>Schedule On <span class="text-red"></span></label>
                <input type="datetime-local" name="schedule" id="schedule" class="form-control @error('schedule') is-invalid @enderror" >
                <span class="error"></span>
               @error('schedule')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
        <div class="col-sm-12 col-md-3">
            <div class="form-group">
                <label>Status <span class="text-red">*</span></label>
                <select name="status" id="status" class="form-control @error('status') is-invalid @enderror">
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
                <span class="error"></span>
               @error('status')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
        
        

         <div class="col-sm-12 col-md-3">
                <input class="mt-5 mr-2 btn btn-primary" type="submit" id="save_btn" value="Submit">
                <a href="{{url('trivia/post/')}}" class="mt-5 btn btn-secondary">Back</a>
        </div>
    </div>
    {{Form::hidden('can_submit',0,['id'=>'can_submit'])}}{{Form::hidden('page','customer',['id'=>'customer'])}}
        <input type="hidden" name="hidden_q_img" id="hidden_q_img">
        <input type="hidden" name="hidden_a_img" id="hidden_a_img">
        <input type="hidden" name="hidden_q_thumb" id="hidden_q_thumb">
        <input type="hidden" name="hidden_q_vdo" id="hidden_q_vdo">
    {{Form::close()}}
</div>



                </div>
            </div>
        </div>
        </div>

        <!-- modal--->
        <div class="modal modalTag" id="tag_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content modal-content-demo">
                    <div class="modal-header">
                        <h6 class="modal-title">Create Tag</h6><button aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                    </div>
                    <form id="tagForm" method ="post" action ="{{url("/trivia/tag/add-tag")}}">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6">
                                <label for="modal_tag" class="">Tag</label> <span class="text-red">*</span>
                                <div class="input-group wd-150">
                                <!-- <div class="input-group-prepend">
                                    <div class="input-group-text">#
                                        
                                    </div>
                                </div>  --> 
 <input id="tag_name" class="form-control " placeholder="Tag" name="tag_name" type="text" value="">
 <span class="error"></span>
 </div>
                            </div>
                        
                            
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-indigo" type="submit" id="modal_tag_save" >Save</button> 
                        <button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <!---/modal--->
    </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript">
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
        }); 

    function  loadTag()
        {
            var post_id = 0;
            $.ajax({
                type: "POST",
                url: '{{url("/trivia/tag/view")}}',
                data: { post_id:post_id,'_token': '{{ csrf_token() }}'},
                success: function (html) {
                    $('#tagname').html(html);
                }
            });
        }
        
        $('body').on('submit','#tagForm',function(e){ 
        
            var post_id = 0;
            e.preventDefault();  
            var formData = new FormData(this);
            var tag_name = $("#tag_name").val();
            $('#modal_tag_save').text('Validating');
            $.ajax({
                type: "POST",
                url: '{{url("/trivia/tag/validate-tag")}}',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                  //  $('#tags').html(html);
                  if(data=='success')
                  {
                      submitTag(formData);
                  }
                  else
                  {
                      var errKey = ''; var n = 0;
                            $.each(data, function(key,value) { if(n == 0){ errKey = key; n++; }
                                $('#tagForm #'+key).closest('div').find('.error').html(value);
                            }); 
                            $('#'+errKey).focus();
                      $('#modal_tag_save').text('Save');
                  }
                }
            });
            return false;
        });
        
        function  submitTag(formData)
        {
            var post_id = 0;
            var tag_name = $("#tag_name").val();
            $('#modal_tag_save').text('Submiting');
            $.ajax({
                type: "POST",
                url: '{{url("/trivia/tag/add-tag")}}',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                  //  $('#tags').html(html);
                  
                      loadTag();
                       $('#tagForm')[0].reset();
                      $("#tag_name").val('');
                    //  $(".modalTag").modal("hide");
                      $(".modalTag").attr("display:none");
                       $(".modal-backdrop").hide();
                          $(".modal.fade.in").removeClass("modal fade in");
                          
                          //$(".modalTag").modal({backdrop: false});
                          $(".modalTag").hide(200);
                      
                  
                //   else
                //   {
                //       $('#'+errKey).focus();
                //       $('#modal_tag_save').text('Save');
                //   }
                }
            });
        }

    $(document).on("change", ".file_multi_video", function(evt) {
        $('#hidden_q_vdo').val(this);
  var $source = $('#video_here');
  $source[0].src = URL.createObjectURL(this.files[0]);
  $source.parent()[0].load();
});

    if ($("input[name='question_type'][value='image']").prop("checked")) {
            $("#q_video_div").hide();
            $("#q_thumb").hide();
            $("#q_image_div").show();
   }

   if ($("input[name='question_type'][value='video']").prop("checked")) {
            $("#q_video_div").show();
            $("#q_thumb").show();
            $("#q_image_div").hide();
   }

   if ($("input[name='answer_type'][value='image']").prop("checked")) {
            $("#ans_text_div").hide();
            $("#ans_image_div").show();
   }

   if ($("input[name='answer_type'][value='text']").prop("checked")) {
            $("#ans_text_div").show();
            $("#ans_image_div").hide();
   }

   $(document).ready(function(){
    loadTag();
       $('li').removeClass('is-expanded');
  $('.trivia').closest('li').addClass('is-expanded');
  $('li .active a').addClass('slide-item active');
  
    $("body").on('change','#PostForm #question_image',function(){ readURL(this);
        $('#hidden_q_img').val(this);
     });
    $("body").on('change','#PostForm #answer_image',function(){ readURL(this); 
    $('#hidden_a_img').val(this);
   });
   
   $("body").on('change','#PostForm #thumbnail',function(){ readURL(this); 
    $('#hidden_q_thumb').val(this);
   });

    $("input[name=question_type]").change(function() {
        var test = $(this).val();
        if(test=='image')
        {
            $("#q_video_div").hide();
            $("#q_thumb").hide();
            $("#q_image_div").show();
        }
        else
        {
            $("#q_video_div").show();
            $("#q_thumb").show();
            $("#q_image_div").hide();
        }
        
        //$("#"+test).show();
    }); 

    $("input[name=answer_type]").change(function() {
        var test = $(this).val();
        if(test=='image')
        {
            $("#ans_text_div").hide();
            $("#ans_image_div").show();
        }
        else
        {
            $("#ans_text_div").show();
            $("#ans_image_div").hide();
        }
        
        //$("#"+test).show();
    }); 

    function readURL(input) { 
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { $('body #'+input.id+'_img').attr('src', e.target.result); $('body #'+input.id+'_img').show(); }
            reader.readAsDataURL(input.files[0]);
        }
    }

    });

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
    </script>

    @endsection

