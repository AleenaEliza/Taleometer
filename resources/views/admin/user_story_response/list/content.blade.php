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
        <div class="text-right">
            <button id="exportuserStoryResponse" class="mb-2 mr-2 btn btn-primary btn-md exportuserStoryResponse" style="margin-top: 10px;">Export as CSV File</button>
        </div>
        <table id="userStoryResponse_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0"><input type="checkbox" id="check_all" name="allIds" value="All" /></th>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">User Id</th>
                    <th class="wd-15p border-bottom-0">User Name</th>
                    <th class="wd-15p border-bottom-0">Contact Number</th>
                    <th class="wd-15p border-bottom-0">Email</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($responses && count($responses) > 0)
                    @php $cnt = 0; @endphp
                    @foreach($responses as $row)
                        <tr>
                            <td><input type="checkbox" class="check" name="ids[]" value="{{$row->response_id}}" /></td>
                            <td>{{++$cnt}}</td>
                            <td>{{ $row->user_id }}</td>
                            <td>{{ $row->user->fname }}</td>
                            <td>{{ $row->user->phone }}</td>
                            <td>{{ $row->user->email }}</td>
                            <td>{{date('d M Y H:i:s',strtotime($row->created_at))}}</td>
                            <td>
                                @if(checkPermission('/user-story/response','delete') == true)
                                <button id="deluserStoryResponse-{{$row->response_id}}" class="mb-2 mr-2 btn btn-danger btn-sm deluserStoryResponse" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
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
   var table =  $('#userStoryResponse_list').DataTable({
        "aaSorting": [],
        "columnDefs": [
            { "searchable": false, "targets": [0,1,7] },
            { "orderable": false, "targets": [0, 7] },
        ],
        "oSearch": { "bSmart": false, "bRegex": true },
        "bStateSave": true,
        "responsive": true,
        "fnStateSave": function (oSettings, oData) {
            localStorage.setItem('offersDataTables', JSON.stringify(oData));
        },
        "fnStateLoad": function (oSettings) {
            return JSON.parse(localStorage.getItem('offersDataTables'));
        },
        "stateSave": true
   });
    
   $('#check_all').change(function() {
        if($(this).is(":checked"))
        {
            table.$('.check').prop('checked', true);
        }
        else{
            table.$('.check').prop('checked', false);
        }
    });

    $(document).on("change", '.check', function() {
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

    $('body').on('click','#exportuserStoryResponse',function(e){ 
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
            url: '{{url("/user-story-response/export")}}',
            data: { "_token": "{{csrf_token()}}", "ids":ids},
            success: function (data) {

                if(!data)
                {
                    toastr.error("No records selected.");
                    setTimeout(function(){ $('#allert_error').fadeOut(); }, 3000);
                    return;
                }

                var smsg        =   'User Story exported successfully!';
                toastr.success(smsg);
                setTimeout(function(){ $('#allert_success').fadeOut(); }, 3000);

                const a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";

                const blob = new Blob([data], {type: "octet/stream"}),
                url = window.URL.createObjectURL(blob);
                console.log(url);
                a.href = url;
                a.download = 'User Stories.csv';
                a.click();
                a.remove();
                // window.URL.revokeObjectURL(url);
            } 
        });
    });

});
</script>   
    