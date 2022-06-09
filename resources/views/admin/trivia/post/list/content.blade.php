<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
</style>
<div class="card-body">
    <div class="table-responsive">
        <table id="post_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">Question</th>
                    <th class="wd-15p border-bottom-0">Category</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-15p border-bottom-0">Status</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @php $i=0; @endphp
                @if($posts && count($posts) > 0)
                    @foreach($posts as $row)
                        @php 
                        
                        if($row->is_active == 1){ $active = "Active1"; $checked = 'checked'; }else if ($row->is_active == 0){ $active = "Inactive"; $checked = ""; } 
                        $i++;
                        @endphp
                        <tr>
                            <td>{{$i}}</td>
                            <td>@if($row->tag){{$row->tag_name->tag}}@endif {{$row->question}}</td>
                            <td>{{$row->categories->category_name}}</td>
                            <td><span style="display:none;">{{date('Ymd',strtotime($row->created_at))}}</span>{{date('d M Y',strtotime($row->created_at))}}</td>
                            <td>
                                 
                                <div class="switch">
                                    <p style="display:none;">{{$active}}</p>
                                    <input class="switch-input status-btn" id="status-{{$row->id}}" type="checkbox" {{$checked}} name="status">
                                    <label class="switch-paddle" for="status-{{$row->id}}">
                                        <span class="switch-active" aria-hidden="true"></span>
                                        <span class="switch-inactive" aria-hidden="true"></span>
                                    </label>
                                </div>
                               
                            </td>
                            <td>
                                
                                @if(checkPermission('/trivia/post','edit') == true)
                                <a href="{{url('trivia/posts/edit/'.$row->id)}}" class="mb-2 mr-2 btn btn-primary btn-sm" >Edit</a>
                                @endif
                                @if(checkPermission('/trivia/post','delete') == true)
                                <button id="deluser-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm deluser" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
                                @endif
                                @if(checkPermission('/trivia/post','delete') == true)
                                 <a href="{{url('trivia/posts/view/'.$row->id)}}" class="mb-2 mr-2 btn btn-info btn-sm" >View</a>
                                @endif
                                
                            </td>
                        </tr>
                    @endforeach
                @endif
            </tbody>
        </table>
    </div>
</div>

<script src="{{URL::asset('admin/assets/plugins/datatable/js/jquery.dataTables.js')}}"></script>
<script src="{{URL::asset('admin/assets/plugins/datatable/js/dataTables.bootstrap4.js')}}"></script>
<script src="{{URL::asset('admin/assets/plugins/datatable/js/dataTables.buttons.min.js')}}"></script>
<script src="{{URL::asset('admin/assets/plugins/datatable/dataTables.responsive.min.js')}}"></script>
<script src="{{URL::asset('admin/assets/js/datatables.js')}}"></script>
<script type="text/javascript">
$(document).ready(function() {
   var table =  $('#post_list').DataTable();
    
     $('#filterstatus').on('change', function () {
            table.columns(4).search( this.value ).draw();
        } );
});
</script>         
    