<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
</style>
<div class="card-body">
    <div class="table-responsive">
        <table id="userStory_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">User Story Title</th>
                    <th class="wd-15p border-bottom-0">Story Type</th>
                    <th class="wd-15p border-bottom-0">Options</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-20p border-bottom-0">Updated On</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($user_stories && count($user_stories) > 0)
                    @php $cnt = 0; @endphp
                    @foreach($user_stories as $row)
                        <tr>
                            <td>{{++$cnt}}</td>
                            <td>{{$row->title}}</td>
                            <td>{{$row->type}}</td>
                            @if($row->options && $row->options != '')
                                <td>{{ implode(", ", json_decode($row->options)) }}</td>
                            @else
                                <td>{{ $row->options }}</td>
                            @endif
                            <td>{{date('d M Y H:i:s',strtotime($row->created_at))}}</td>
                            <td>{{date('d M Y H:i:s',strtotime($row->updated_at))}}</td>
                            <td>
                                @if(checkPermission('/user-story','edit') == true)
                                <button id="edituserStory-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm edituserStory">Edit</button>
                                @endif
                                @if(checkPermission('/user-story','delete') == true)
                                <button id="deluserStory-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm deluserStory" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
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
   var table =  $('#userStory_list').DataTable({
        "columnDefs": [
            { "searchable": false, "targets": [0,6] }
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
    