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
textarea
{
    background-color: #fff !important;
}
</style>
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="{{URL::asset('admin/assets/plugins/wysiwyag/richtext.css')}}">
<div class="card-body">
    <div class="table-responsive">
        <div class="text-right">
            <button id="sendNotifications" class="mb-2 mr-2 btn btn-primary btn-md sendNotifications" style="margin-top: 10px;">Send Selected Notifications</button>
        </div>
        <table id="notification_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0"><input type="checkbox" id="check_all" name="allIds" value="All" /></th>
                    <th class="wd-15p border-bottom-0">Notification Title</th>
                    <th class="wd-20p border-bottom-0">Notification Content</th>
                    <th class="wd-15p border-bottom-0">Notification Status</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($notifications && count($notifications) > 0)
                    @foreach($notifications as $row)
                        @php 
                        if($row->is_active == 1){ $active = "Active1"; $checked = 'checked'; }else if ($row->is_active == 0){ $active = "Inactive"; $checked = ""; } 
                        @endphp
                        <tr>
                            <td><input type="checkbox" class="check" name="ids[]" value="{{$row->id}}" /></td>
                            <td>{{$row->title}}</td>
                            <td>{!! $row->content !!}</td>
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
                            <td>{{date('d M Y H:i:s',strtotime($row->created_at))}}</td>
                            <td>
                                @if(checkPermission('/notification','edit') == true)
                                <button id="editNotification-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm editNotification">Edit</button>
                                @endif
                                @if(checkPermission('/notification','delete') == true)
                                <button id="delNotification-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm delNotification" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
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

    if ( ! $.fn.DataTable.isDataTable( '#notification_list' ) ) {
        var table =  $('#notification_list').DataTable({
            "aaSort":[],
                "columnDefs": [
                    { "searchable": false, "targets": [0,5] },
                    { "orderable": false, "targets": [0,5] },
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
    }
    
     $('#filterstatus').on('change', function () {
        table.columns(3).search( this.value ).draw();
    } );

    $('#check_all').change(function() {
        if($(this).is(":checked"))
        {
            table.$('.check').prop('checked', true);
        }
        else{
            table.$('.check').prop('checked', false);
        }
    });

    table.$('.check').change(function() {
        if($(this).is(":checked"))
        {
            var flag = 1;
            table.$('.check').each(function() {
                if($(this).is(":checked") == false)
                {
                    flag = 0;
                }
            });

            if(flag == 1)
                $('#check_all').prop('checked', true);
        }
        else{
            $('#check_all').prop('checked', false);
        }
    });

    $('body').on('click','#sendNotifications',function(e){ 
        var ids = [];

        table.$('.check').each(function() {
            if($(this).is(":checked"))
            {
                ids.push($(this).val());
            }
        });

        if(ids.length == 0)
        {
            toastr.error("No records selected.");
            setTimeout(function(){ $('#allert_error').fadeOut(); }, 3000);
            return;
        }

        $.ajax({
            type: "POST",
            url: '{{url("/notification/send")}}',
            data: { "_token": "{{csrf_token()}}", "ids":ids},
            success: function (data) {

                if(!data)
                {
                    toastr.error("No records selected.");
                    setTimeout(function(){ $('#allert_error').fadeOut(); }, 3000);
                    return;
                }

                var smsg        =   'Notification Sent successfully!';
                toastr.success(smsg);
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);
            } 
        });
    });
});
</script>  