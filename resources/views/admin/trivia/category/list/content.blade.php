<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
</style>
<div class="card-body">
    <div class="table-responsive">
        <table id="trivia_category" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">Story Name</th>
                    <th class="wd-15p border-bottom-0">Image</th>
                    <th class="wd-15p border-bottom-0">Order</th>
                    <th class="wd-20p border-bottom-0">Status</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($category && count($category) > 0)
                    @php $cnt = 0; @endphp
                    @foreach($category as $row)
                        <tr>
                            <td>{{++$cnt}}</td>
                            <td>{{$row->category_name}}</td>
                            <td>
                                @if($row->image && $row->image != '')
                                    <img src="{{url($row->image)}}" alt="avatar" style="height: 70px;" />
                                @else
                                    <img src="{{url('storage/app/public/default.png')}}" alt="avatar" style="height: 70px;" />
                                @endif
                            </td>
                            <td>{{$row->sort_order}}</td>
                            <td class="align-middle" data-search="@if($row->is_active==1){{ 'Active' }}@else{{ 'Inactive' }}@endif">
                                @if($row->id!=1)
                                <div class="switch">
                                <input class="switch-input status-btn ser_status" data-selid="{{$row->id}}" id="status-{{$row->id}}"  data-id="{{ $row->id }}" name="status" type="checkbox"  @if($row->is_active==1) {{ "checked" }} @endif >
                                <label class="switch-paddle" for="status-{{$row->id}}">
                                <span class="switch-active" aria-hidden="true"></span>
                                <span class="switch-inactive" aria-hidden="true"></span>
                                                                            </label>
                                 </div>
                                @endif
                                 </td>
                            <td>{{date('d M Y',strtotime($row->created_at))}}</td>
                            <td>
                                
                                @if(checkPermission('/trivia/category','edit') == true)
                                <button id="editStory-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm editStory">Edit</button>
                                @endif
                                @if($row->id!=1)
                                @if(checkPermission('/trivia/category','delete') == true)
                                <button id="delStory-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm delStory" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
                                @endif
                                @endif
                            </td>
                        </tr>
                    @endforeach
                   
                @endif
            </tbody>
        </table>
    </div>
</div>


<!-- sort order modal -->              
                        <div id="sort-modal" class="modal fade">
                            <div class="modal-dialog modal-confirm">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title">Change Order</h3>  
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                  <form  action="{{route('category.sort-order')}}" method="POST" >
                                  @csrf
                                    <div class="modal-body">
                                
                                        @if($category_sort && count($category_sort) > 0)
                                      <input type = "hidden" name="row_order" id="row_order" /> 
                                      <ul id="sortable-row">
                                        @foreach($category_sort as $row)
                                                                
                                            <li class="item" id="{{$row->id}}">{{$row->category_name}}</li>
                                        @endforeach
                                      </ul>
                                      @endif
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                        <button type="submit" id="" onClick="saveOrder();" class="btn btn-success"> Save </button>
                                    </div>
                                  </form>
                                </div>
                            </div>
                        </div>

<script src="{{URL::asset('admin/assets/plugins/datatable/js/jquery.dataTables.js')}}"></script>
<script src="{{URL::asset('admin/assets/plugins/datatable/js/dataTables.bootstrap4.js')}}"></script>
<script src="{{URL::asset('admin/assets/plugins/datatable/js/dataTables.buttons.min.js')}}"></script>
<script src="{{URL::asset('admin/assets/js/datatables.js')}}"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript">
function saveOrder() 
    {
      var selectedLanguage = new Array();
      $('ul#sortable-row li').each(function() 
      {
          selectedLanguage.push($(this).attr("id"));
      });
      document.getElementById("row_order").value = selectedLanguage;
    }

$(function() {
        
        $( "#sortable-row" ).sortable(
      {
        placeholder: "ui-state-highlight"
      }); 
    })
$(document).ready(function() {
   var table =  $('#trivia_category').DataTable();
    
     $('#filterstatus').on('change', function () {
                    table.columns(4).search( this.value ).draw();
                } );
});
</script>   
    