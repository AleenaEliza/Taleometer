<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
</style>
<div class="card-body">
    <div class="table-responsive">
        <table id="assign_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">User</th>
                    <th class="wd-15p border-bottom-0">Role</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($roles && count($roles) > 0)
                    @php $cnt = 1; @endphp
                    @foreach($roles as $row)
                        @php $n_img = 0; @endphp
                        @php 
                        if($row->is_active == 1){ $active = "Active"; $checked = 'checked'; }else if ($row->is_active == 0){ $active = "Inactive"; $checked = ""; } 
                        if($row->role_id != 0 ) { $role = $row->role->name; } else { $role = '';}
                        @endphp
                        <tr>
                            <td>{{ $cnt++; }}</td>
                            <td>{{$row->fname.' '. $row->lname}}</td>
                            <td>{{$role}}</td>
                    
                            <td>
                                <?php 
                                if($row->id != 1)
                                {
                                ?>
                                @if(checkPermission('/assign/role','edit') == true)
                                <button id="editRole-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm editRole">Edit</button>
                                @endif
                                @if(checkPermission('/assign/role','delete') == true)
                                <button id="delRole-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm delRole" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
                                @endif
                                <?php 
                                  }
                                ?>
                            </td>
                        </tr>
                          @php $n_img++; @endphp
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
   var table =  $('#assign_list').DataTable({
        "aaSorting": [],
        "columnDefs": [
            { "searchable": false, "targets": [0,3] },
            { "orderable": false, "targets": [0, 3] },
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
    
});
</script>
               
    