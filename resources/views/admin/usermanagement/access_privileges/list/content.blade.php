<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
</style>
<div class="card-body">
    <div class="table-responsive">
        <table id="access_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="align-top border-bottom-0 wd-5 notexport">Sl No</th>
                    <th class="wd-15p border-bottom-0">Role</th>
                    <th class="wd-15p border-bottom-0">Module</th>
                    <th class="wd-15p border-bottom-0">Page</th>
                    <th class="wd-15p border-bottom-0">Access Privilege</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($privileges && count($privileges) > 0)
                    @foreach($privileges as $row)
                     
                        <tr>
                            <td class="align-middle select-checkbox">
                                                                        <label class="custom-control custom-checkbox">
                                                                            
                                                                            <!--{{ $loop->iteration }}-->
                                                                        </label>
                                                                    </td>
                            <td>{{$row->role_name->name}}</td>
                            <td>{{$row->module_name->module_name}}</td>
                            <td>{{$row->page_name->module_name}}</td>
                            <td>
                            @if(isset($row->view) && $row->view ==1) <button class="btn btn-info btn-sm" style="cursor: default;">View</button> @endif
                            @if(isset($row->edit) && $row->edit ==1) <button class="btn btn-info btn-sm" style="cursor: default;">Edit</button> @endif
                            @if(isset($row->delete) && $row->delete ==1) <button class="btn btn-info btn-sm" style="cursor: default;">Delete</button> @endif
                            @if(isset($row->approval) && $row->approval ==1) <button class="btn btn-info btn-sm" style="cursor: default;">Approval</button> @endif
                            </td>
                            
                            <td>
                                  @if(checkPermission('/access-privilege','edit') == true)
                                <button id="editAccess-{{$row->id}}" data-role-id="{{$row->usr_role_id}}" data-module-id="{{$row->module_id}}" data-page-id="{{$row->page_id}}" class="mb-2 mr-2 btn btn-primary btn-sm editAccess" >Edit</button>
                                @endif
                                  @if(checkPermission('/access-privilege','delete') == true)
                                <button id="deluser-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm deluser" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
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
               
    