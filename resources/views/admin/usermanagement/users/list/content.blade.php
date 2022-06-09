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
<div class="card-body">
    <div class="table-responsive">
        <table id="users_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">User Name</th>
                    <th class="wd-15p border-bottom-0">Phone Number</th>
                    <th class="wd-15p border-bottom-0">Email</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-15p border-bottom-0">Status</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($users && count($users) > 0)
                    @php $cnt = 1; @endphp
                    @foreach($users as $row)
                        @php 
                        if($row->is_active == 1){ $active = "Active1"; $checked = 'checked'; }else if ($row->is_active == 0){ $active = "Inactive"; $checked = ""; } 
                        @endphp
                        <tr>
                            <td>{{$cnt++}}</td>
                            <td>{{$row->fname}}</td>
                            <td>{{ '+'.ltrim($row->country_code, '+')." ".$row->phone}}</td>
                            <td>{{$row->email}}</td>
                            <td>{{date('d M Y H:i:s',strtotime($row->created_at))}}</td>
                            <td>
                                 <?php 
                                if($row->id != 1)
                                {
                                ?>
                                <div class="switch">
                                    <p style="display:none;">{{$active}}</p>
                                    <input class="switch-input status-btn" id="status-{{$row->id}}" type="checkbox" {{$checked}} name="status">
                                    <label class="switch-paddle" for="status-{{$row->id}}">
                                        <span class="switch-active" aria-hidden="true"></span>
                                        <span class="switch-inactive" aria-hidden="true"></span>
                                    </label>
                                </div>
                                <?php 
                                  }
                                  else
                                  {
                                    ?>
                                    <p style="display:none;">Active1</p>
                                <?php
                                  }
                                ?>
                            </td>
                            <td>
                                <?php 
                                if($row->id != 1)
                                {
                                ?>
                                @if(checkPermission('/users','edit') == true)
                                <button id="editUser-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm editUser" data-toggle="modal" data-target=".bd-example-modal-lg">Edit</button>
                                @endif
                                @if(checkPermission('/users','delete') == true)
                                <button id="deluser-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm deluser" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
                                @endif
                                <?php 
                                  }
                                ?>
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
    
});
</script>         
    