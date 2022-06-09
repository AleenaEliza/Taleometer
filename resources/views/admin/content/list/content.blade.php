<style>
    table tbody td {
    word-break: break-word;
    vertical-align: middle;
    white-space: normal !important;
}
.table{
    /* table-layout:fixed; */
    width: 100% !important;
}
</style>
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="{{URL::asset('admin/assets/plugins/wysiwyag/richtext.css')}}">
<div class="card-body">
    <div class="table-responsive">
        <table id="content_list" class="table table-bordered text-nowrap" style="background: #b6a7a7;">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Content Title</th>
                    <th class="wd-20p border-bottom-0">Slug</th>
                    <th class="wd-15p border-bottom-0">Content Text</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($contents && count($contents) > 0)
                    @foreach($contents as $row)
                        <tr>
                            <td>{{$row->title}}</td>
                            <td>{{$row->slug}}</td>
                            <td>{!! $row->value !!}</td>
                            <td>{{date('d M Y H:i:s',strtotime($row->created_at))}}</td>
                            <td>
                                @if(checkPermission('/content','edit') == true)
                                <button id="editContent-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm editContent">Edit</button>
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
<script src="{{URL::asset('admin/assets/plugins/wysiwyag/jquery.richtext.min.js')}}"></script>
<script type="text/javascript">
$(document).ready(function() {

   var table =  $('#content_list').DataTable({
       "aaSort":[],
        "columnDefs": [
            { "searchable": false, "targets": [4] },
            { "orderable": false, "targets": [4] },
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
                    table.columns(3).search( this.value ).draw();
                } );
});
</script>  