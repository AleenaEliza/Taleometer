<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
</style>
<div class="card-body">
    <div class="table-responsive">
        <table id="genre_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">Genre Name</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-20p border-bottom-0">Updated On</th>
                    <th class="wd-15p border-bottom-0">Status</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($genres && count($genres) > 0)
                    @php $cnt = 0; @endphp
                    @foreach($genres as $row)
                        @php 
                        if($row->is_active == 1){ $active = "Active1"; $checked = 'checked'; }else if ($row->is_active == 0){ $active = "Inactive"; $checked = ""; } 
                        @endphp
                        <tr>
                            <td>{{++$cnt}}</td>
                            <td>{{$row->name}}</td>
                            <td>{{date('d M Y H:i:s',strtotime($row->created_at))}}</td>
                            <td>{{date('d M Y H:i:s',strtotime($row->updated_at))}}</td>
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
                                @if(checkPermission('/genre','edit') == true)
                                <button id="editGenre-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm editGenre">Edit</button>
                                @endif
                                @if(checkPermission('/genre','delete') == true)
                                <button id="delGenre-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm delGenre" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
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
   var table =  $('#genre_list').DataTable({
        "columnDefs": [
            { "searchable": false, "targets": [0,4,5] }
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
    