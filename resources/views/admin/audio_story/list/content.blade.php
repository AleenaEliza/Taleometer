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
        <table id="audioStory_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">Story Title</th>
                    <th class="wd-15p border-bottom-0">Genre</th>
                    <th class="wd-15p border-bottom-0">Story</th>
                    <th class="wd-15p border-bottom-0">Plot</th>
                    <th class="wd-15p border-bottom-0">Narration</th>
                    <th class="wd-20p border-bottom-0">Created On</th>
                    <th class="wd-20p border-bottom-0">Non Stop</th>
                    <th class="wd-15p border-bottom-0">Status</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($audio_stories && count($audio_stories) > 0)
                    @php $cnt = 0; @endphp
                    @foreach($audio_stories as $row)
                        @php 
                            if($row->is_active == 1){ $active = "Active1"; $checked = 'checked'; }else if ($row->is_active == 0){ $active = "Inactive"; $checked = ""; } 
                        @endphp
                        <tr>
                            <td>{{++$cnt}}</td>
                            <td>{{$row->title}}</td>
                            <td>{{@$row->genre->name}}</td>
                            <td>{{@$row->story->name}}</td>
                            <td>{{@$row->plot->name}}</td>
                            <td>{{@$row->narration->name}}</td>
                            <td>{{date('d M Y H:i:s',strtotime($row->created_at))}}</td>
                            <td>@php echo (@$row->is_nonstop == 1)?'Added':'<button id="addToNonstop-'.$row->id.'" class="mb-2 mr-2 btn btn-primary btn-sm addToNonstop">Add</button>' @endphp</td>
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
                                @if(checkPermission('/audio-story','edit') == true)
                                <button id="editaudioStory-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm editaudioStory">Edit</button>
                                @endif
                                @if(checkPermission('/audio-story','delete') == true)
                                <button id="delaudioStory-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm delaudioStory" data-toggle="modal" data-target=".bd-example-modal-sm">Delete</button>
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
   var table =  $('#audioStory_list').DataTable({
        "columnDefs": [
            { "searchable": false, "targets": [0,8,9] }
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
    if('{{@$replace_tags}}' == 1)
    {
        $('#tag_ids option').remove();

        var tags = JSON.parse('{!! json_encode(@$tags) !!}');
        // console.log(tags);

        for(i=0; i < tags.length; i++)
        {
            $("#tag_ids").append('<option value="'+tags[i].id+'">'+tags[i].name+'</option>');
        }
        
        $("#tag_ids").select2({
            multiple: true,
            tags:true
        });
        // $('#tag_ids').val(tag_ids).trigger('change');
    }
});
</script>   
    