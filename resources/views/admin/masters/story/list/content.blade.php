<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
</style>
<div class="card-body">
    <div class="table-responsive">
        <table id="story_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">Story Name</th>
                    <th class="wd-15p border-bottom-0">Image</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-20p border-bottom-0">Updated On</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($stories && count($stories) > 0)
                    @php $cnt = 0; @endphp
                    @foreach($stories as $row)
                        <tr>
                            <td>{{++$cnt}}</td>
                            <td>{{$row->name}}</td>
                            <td>
                                @if($row->image && $row->image != '')
                                    <img src="{{ $row->image }}" alt="avatar" style="height: 70px;" />
                                @else
                                    <img src="{{url('storage/app/public/default.png')}}" alt="avatar" style="height: 70px;" />
                                @endif
                            </td>
                            <td>{{date('d M Y H:i:s',strtotime($row->created_at))}}</td>
                            <td>{{date('d M Y H:i:s',strtotime($row->updated_at))}}</td>
                            <td>
                                @if(checkPermission('/story','edit') == true)
                                <button id="editStory-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm editStory">Edit</button>
                                @endif
                                @if(checkPermission('/story','delete') == true)
                                <button id="delStory-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm delStory" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
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
   var table =  $('#story_list').DataTable({
    "columnDefs": [
            { "searchable": false, "targets": [0,2,5] }
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
                    table.columns(4).search( this.value ).draw();
                } );
});
</script>   
    