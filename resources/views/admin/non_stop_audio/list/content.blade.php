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
        <table id="nonstopAudioStory_list" class="table table-bordered text-nowrap">
            <thead>
                <tr>
                    <th class="wd-15p border-bottom-0">Sl.No</th>
                    <th class="wd-15p border-bottom-0">Story Title</th>
                    <th class="wd-15p border-bottom-0">Genre</th>
                    <th class="wd-15p border-bottom-0">Position</th>
                    <th class="wd-20p border-bottom-0">Date Added</th>
                    <th class="wd-10p border-bottom-0">Action</th>
                   
                </tr>
            </thead>
            <tbody>
                @if($nonstop_stories && count($nonstop_stories) > 0)
                    @php $cnt = 0; @endphp
                    @foreach($nonstop_stories as $row)
                        <tr>
                            <td>{{++$cnt}}</td>
                            <td>{{ ($row->type == 'Audio Story')?@$row->audio_story->title:@$row->link_audio->title; }}</td>
                            <td>{{ ($row->type == 'Audio Story')?@$row->audio_story->genre->name:'Link Audio'; }}</td>
                            <td>{{ $row->order }}</td>
                            <td>{{date('d M Y H:i:s',strtotime($row->created_at))}}</td>
                            <td>
                                @if(checkPermission('/nonstop-audio','edit') == true && $row->type == 'Audio Story')
                                <button id="replacenonstopAudioStory-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm replacenonstopAudioStory">Replace</button>
                                @endif
                                @if(checkPermission('/nonstop-audio','edit') == true && $row->type == 'Link Audio')
                                <button id="replacenonstopLinkAudio-{{$row->id}}" class="mb-2 mr-2 btn btn-primary btn-sm replacenonstopLinkAudio">Replace</button>
                                @endif
                                @if(checkPermission('/nonstop-audio','delete') == true)
                                <button id="delnonstopAudioStory-{{$row->id}}" class="mb-2 mr-2 btn btn-danger btn-sm delnonstopAudioStory" data-toggle="modal" data-target=".bd-example-modal-sm" data-linkid="{{$row->link_audio_id}}">Delete</button>
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
   var table =  $('#nonstopAudioStory_list').DataTable({
        "columnDefs": [
            { "searchable": false, "targets": [0,5] }
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
   var reset = '{{ @$reset }}';

    if(reset == '1')
    {
        var audio_stories = JSON.parse('{!! str_replace("'", "\'", $audio_stories) !!}');
        var link_audios = JSON.parse('{!! str_replace("'", "\'", $link_audios) !!}');
        var order = '{!! $order !!}';

        $('#audio_story_id2').html('<option selected="selected" value="">Select Audio Story</option>');

        for(i=0; i < audio_stories.length; i++)
        {
            $('#audio_story_id2').append('<option value="'+audio_stories[i].id+'" data-id="'+audio_stories[i].genre_id+'">'+audio_stories[i].title+'</option>');
        }

        $("#audio_story_id2").select2("destroy");

        $("#nonstopForm #audio_story_id2").select2();

        $('#link_audio_id2').html('<option selected="selected" value="">Select Audio Story</option>');
            
        for(i=0; i < link_audios.length; i++)
        {
            $('#link_audio_id2').append('<option value="'+link_audios[i].id+'">'+link_audios[i].title+'</option>');
        }

        $("#link_audio_id2").select2("destroy");

        $("#link_audio_id2").select2();
        
        $(".position").val(order).attr('value', order).attr('max', order);
    }
    
});

</script>   
    