<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
</style>
<div class="card-body">
    <div class="table-responsive">
        <table id="preferenceBubble_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">Preference Bubble Name</th>
                    <th class="wd-15p border-bottom-0">Preference Category</th>
                    <th class="wd-15p border-bottom-0">Image</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-20p border-bottom-0">Updated On</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($preference_bubbles && count($preference_bubbles) > 0)
                    @php $cnt = 0; @endphp
                    @foreach($preference_bubbles as $row)
                        <tr>
                            <td>{{++$cnt}}</td>
                            <td>{{$row->name}}</td>
                            <td>{{@$row->preference_category->name}}<p style="display:none;">{{'preference_category_'.@$row->preference_category_id}}</p></td>
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
                                @if(checkPermission('/preference-bubble','edit') == true)
                                <button id="editpreferenceBubble-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm editpreferenceBubble">Edit</button>
                                @endif
                                @if(checkPermission('/preference-bubble','delete') == true)
                                <button id="delpreferenceBubble-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm delpreferenceBubble" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
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
   var table =  $('#preferenceBubble_list').DataTable({
    "columnDefs": [
            { "searchable": false, "targets": [0,3,6] }
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
                    table.columns(2).search( this.value ).draw();
                } );
});
</script>   
    