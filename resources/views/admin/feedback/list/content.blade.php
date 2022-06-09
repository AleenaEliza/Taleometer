<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
</style>
<div class="card-body">
    <div class="table-responsive">
        <table id="feedback_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">User Name</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($feedbacks && count($feedbacks) > 0)
                    @php $cnt = 0; @endphp
                    @foreach($feedbacks as $row)
                        <tr>
                            <td>{{++$cnt}}</td>
                            <td>{{ @$row->user->fname }}</td>
                            <td>{{date('d M Y H:i:s',strtotime($row->created_at))}}</td>
                            <td>
                                @if(checkPermission('/feedback','view') == true)
                                <button id="viewFeedback-{{$row->id}}" data-value="{{$row->content}}" class="mb-2 mr-2 btn btn-primary btn-sm viewFeedback" data-toggle="modal" data-target=".bd-example-modal-sm">View</button>
                                @endif
                                @if(checkPermission('/feedback','delete') == true)
                                <button id="delFeedback-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm delFeedback" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
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
   var table =  $('#feedback_list').DataTable({
        "columnDefs": [
            { "searchable": false, "targets": [0,3] }
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
    