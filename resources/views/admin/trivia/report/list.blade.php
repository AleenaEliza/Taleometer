@extends('layouts.admin')
@section('title', 'Trivia Report')
@section('content')
<script src="{{URL::asset('admin/assets/plugins/select2/select2.min.css')}}"></script>
    <div class="page-header">
        <div class="page-leftheader">
            <h4 class="page-title mb-0">{{$title}}</h4>
        </div>
        
    </div>
    <!--End Page header-->
   <div class="card">
       <div class="card-body">
           <div class="row">
               <div class="col-md-3">
                   <label>Category</label>
                   <select class="form-control category" id="category">
                        <option value="">All Category</option>
                        @foreach($category as $cat)
                        <option value="{{$cat->id}}">{{$cat->category_name}}</option>
                        @endforeach
                        </select>
                        </div>
               <div class="col-md-3">
                   <label>From</label>
                        <input type="date" class="form-control fromdate" id="fromdate">
               </div>
               <div class="col-md-3">
                   <label>To</label>
                        <input type="date" class="form-control todate" id="todate">
               </div>
               <div class="col-md-3">
                   <label>Question</label>
                   <select class="select2-show-search question" id="question">
                        <option value="">All Question</option>
                        @foreach($question as $ques)
                        <option value="{{$ques->question}}">{{$ques->question}}</option>
                        @endforeach
                        </select>
               </div>
           </div>
       </div>
   </div>
    <!-- Row -->
    <div class="row">
        <div class="col-12">
            <!--div-->
            <div class="main-card mb-3 card">
                <div class="card-header">
                   <div class="col-10">
                     <div class="card-title">Trivia Report List</div>  
                   </div> 
                   <!--<div class="col-2 text-right">-->
                   <!--     <select class="form-control" id="filterstatus" style="margin-right: 30px;">-->
                   <!--     <option value="">All Status</option>-->
                   <!--     <option value="Active1">Active</option>-->
                   <!--     <option value="Inactive">Inactive</option>-->
                   <!--     </select>-->
                   <!--</div>-->
                </div>
                <div id="data_content">
                    @if(isset($view_type))
                @include('admin.trivia.report.content')
                   @endif
                </div>
            </div>
            <!--/div-->

            
        </div>
    </div>
    @include('admin.trivia.post.details')
    <div id="delModal" style="display: none">   
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Are You Sure?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    {{ Form::open(['url' => "trivia/posts/updateStatus", 'id' => 'delForm', 'name' => 'delForm'])}}
    <div class="modal-body"><p>Do you really want to delete this post?</div>
    <div class="modal-footer">
       {{Form::hidden('del_id',0,['id'=>'del_id'])}}
        <button id="cancel_btn" type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button id="delete_btn" type="button" data-id='0' class="btn btn-primary delUser">Yes</button>
    </div>
    {{Form::close()}}
</div>
<!-- INTERNAL Select2 js -->
<script src="{{URL::asset('admin/assets/plugins/select2/select2.full.min.js')}}"></script>
		<script src="{{URL::asset('admin/assets/js/select2.js')}}"></script>

<script type="text/javascript">
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
}); 
$(document).ready(function(){

     
       $('body').on('change','.category',function(){
           
           var category = $(".category").val();
           var from     = $(".fromdate").val();
           var to       = $(".todate").val();
           var question = $(".question").val();
          // alert(category);
           $.ajax({
            type: "POST",
                url: '{{ url("trivia/report/filter") }}',
                data: {category:category,from:from,to:to,question:question,'_token': '{{ csrf_token()}}'},
                success: function (data) {
                    $("#data_content").html('').html(data); 
                }
        });

           $.ajax({
                type: "POST",
                url: '{{url("/trivia/report/questions")}}',
                data: { category:category,'_token': '{{ csrf_token() }}'},
                success: function (html) {
                    $('#question').html(html);
                }
            });
      });
      
      $('body').on('change','.fromdate',function(){
           
           var category = $(".category").val();
           var from     = $(".fromdate").val();
           var to       = $(".todate").val();
           var question = $(".question").val();
          // alert(from);
           $.ajax({
            type: "POST",
                url: '{{ url("trivia/report/filter") }}',
                data: {category:category,from:from,to:to,question:question,'_token': '{{ csrf_token()}}'},
                success: function (data) {
                    $("#data_content").html('').html(data); 
                }
        });
      });
      
      $('body').on('change','.todate',function(){
           
           var category = $(".category").val();
           var from     = $(".fromdate").val();
           var to       = $(".todate").val();
           var question = $(".question").val();
          // alert(to);
           $.ajax({
            type: "POST",
                url: '{{ url("trivia/report/filter") }}',
                data: {category:category,from:from,to:to,question:question,'_token': '{{ csrf_token()}}'},
                success: function (data) {
                    $("#data_content").html('').html(data); 
                }
        });
      });
      
      $('body').on('change','.question',function(){
           
           var category = $(".category").val();
           var from     = $(".fromdate").val();
           var to       = $(".todate").val();
           var question = $(".question").val();
         //  alert(question);
           $.ajax({
            type: "POST",
                url: '{{ url("trivia/report/filter") }}',
                data: {category:category,from:from,to:to,question:question,'_token': '{{ csrf_token()}}'},
                success: function (data) {
                    $("#data_content").html('').html(data); 
                }
        });
      });

});
</script>
@endsection
