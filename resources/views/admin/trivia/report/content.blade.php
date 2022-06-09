<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
</style>
<link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" rel="stylesheet" />
<link href="https://cdn.datatables.net/buttons/1.5.1/css/buttons.dataTables.min.css" rel="stylesheet" />

<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/dataTables.buttons.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
<script src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
<script src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
        
<script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.html5.min.js"></script>

<div class="card-body">
    <div class="table-responsive">
        <table id="reportlist" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">Tag</th>
                    <th class="wd-15p border-bottom-0">Question</th>
                    <th class="wd-15p border-bottom-0">Answer</th>
                    <th class="wd-20p border-bottom-0">Response</th>
                    <th class="wd-15p border-bottom-0">Response ID</th>
                    <th class="wd-10p border-bottom-0">UID</th>
                    <!--<th class="wd-10p border-bottom-0">Created at</th>-->
                   
                </tr>
            </thead>
            <tbody>
                @php $i=0; @endphp
                @if($posts && count($posts) > 0)
                    @foreach($posts as $row)
                        @php 
                        $response_id = 'RR'.substr(str_repeat(0, 4).$row->id, - 4);
                        $uid = 'UID'.substr(str_repeat(0, 4).$row->users->id, - 4);
                        if($row->is_active == 1){ $active = "Active1"; $checked = 'checked'; }else if ($row->is_active == 0){ $active = "Inactive"; $checked = ""; } 
                        $i++;
                        @endphp
                        <tr>
                            <td>{{$i}}</td>
                            <td>@if($row->post_detail->tag) {{$row->post_detail->tag_name->tag}} @endif</td>
                            <td>{{$row->post_detail->question}}</td>
                            <td>{{$row->comment}}</td>
                            <td>{{$row->users->fname}}</td>
                            <td>{{$response_id}}</td>
                            <td>{{$uid}}</td>
                            <!--<td>{{date('d M Y',strtotime($row->created_at))}}</td>-->
                        </tr>
                    @endforeach
                @endif
            </tbody>
        </table>
    </div>
</div>

<!--<script src="{{URL::asset('admin/assets/plugins/datatable/js/jquery.dataTables.js')}}"></script>-->
<!--<script src="{{URL::asset('admin/assets/plugins/datatable/js/dataTables.bootstrap4.js')}}"></script>-->
<!--<script src="{{URL::asset('admin/assets/plugins/datatable/js/dataTables.buttons.min.js')}}"></script>-->
<!--<script src="{{URL::asset('admin/assets/plugins/datatable/dataTables.responsive.min.js')}}"></script>-->
<!--<script src="{{URL::asset('admin/assets/js/datatables.js')}}"></script>-->

<!--<script src="https://code.jquery.com/jquery-3.5.1.js"></script>-->
<!--<script src="https://cdn.datatables.net/1.12.0/js/jquery.dataTables.min.js"></script>-->
<!--<script src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>-->
<!--<script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>-->
<!--<script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>-->

<script type="text/javascript">
$(document).ready(function() {
   //var table =  $('#reportlist').DataTable();
   
//  var table =  $('#reportlist').DataTable({
//         dom: 'Bfrtip',
//         buttons: [{
//             extend:'excel',
//             text:'Export'
//         }]
//     });

var table = $('#reportlist').dataTable({
               
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'excelHtml5',
                        title: 'Postreport',
                        text:'Export to excel'
                        //Columns to export
                        //exportOptions: {
                       //     columns: [0, 1, 2, 3,4,5,6]
                       // }
                    }
                ]
            });
    
     $('#filterstatus').on('change', function () {
            table.columns(4).search( this.value ).draw();
        } );
});
</script>         
    