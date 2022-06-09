@extends('layouts.admin')
@section('title', $title)
@section('content')
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
<!--Page header-->
<div class="page-header">
    <div class="page-leftheader">
        <h4 class="page-title mb-0">{{$title}}</h4>
    </div>
</div>

<div class="col-xl-6 col-lg-8 col-md-12">
    <div class="card overflow-hidden dash1-card border-0">
        <div class="card-body">
            @if($trending)
                <div class="row">
                    <div class="col-sm-6">
                        <h4 class=" mb-1 ">Most Trending Audio Story</h4>
                        <div class="row" style="margin-top: 15px;">
                            <div class="col-lg-4 col-sm-6">
                                <img src="{{$trending->audio_story->image}}" />
                            </div>
                            <div class="col-lg-8 col-sm-6">
                                <h5>Genre - {{$trending->audio_story->genre->name}}</h5>
                                <h5>{{$trending->audio_story->title}}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <h4 class=" mb-1 ">&nbsp;</h4>
                        <h5  style="margin-top: 15px;">Total Plays - {{$trending->audio_story->views_count}}</h5>
                        <h5>Concurrent Listeners - {{$con_users}}</h5>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>

<div class="row" id="scrolldiv">
    <div class="col-lg-12 col-md-12">
        <div  class="card">
            <div class="card-header text-right">
                <div class="col-3 offset-md-9 text-right">
                    <select class="form-control" id="type" style="margin-right: 30px;">
                    <option value="listeners" {{ ($ic["type"] == "listeners")?"selected":""; }} >No. Of Listeners</option>
                    <option value="pauses" {{ ($ic["type"] == "pauses")?"selected":""; }}>No. Of Pauses</option>
                    <option value="resumes" {{ ($ic["type"] == "resumes")?"selected":""; }}>No. Of Pauses & Resumes</option>
                    </select>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-bordered text-nowrap">
                    <thead>
                        <tr>
                            <th class="wd-15p border-bottom-0">Month</th>
                            @foreach($ic["genres"] as $genre)
                                <th class="wd-15p border-bottom-0">{{ @$genre->name }}</th>
                            @endforeach
                        </tr>
                    </thead>
                    <tbody>
                        @for($i = 0; $i < count($ic["x"]); $i++)
                            <tr>
                                <td>{{ @$ic["x"][$i] }}</td>
                                @for($j=0; $j < count($ic["genres"]); $j++)
                                    <td>{{ @$ic["y"][$j]["data"][$i] }}</td>
                                @endfor
                            </tr>
                        @endfor
                    </tbody>
                </table>
                <div id="usageChartDiv">
                    <canvas id="usageChart" style="width:80%; max-width: 800px; margin:20px auto;"></canvas>
                    <ul id="usageChartColors" class="text-center"></ul>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">

    $( document ).ready(function() {

        localStorage.clear();

        var xValues = JSON.parse('{!! str_replace("'", "\'", json_encode($ic["x"])) !!}');
        var data = JSON.parse('{!! str_replace("'", "\'", json_encode($ic["y"])) !!}');
        var genres = JSON.parse('{!! str_replace("'", "\'", json_encode($ic["genres"])) !!}');
        var title = JSON.parse('{!! str_replace("'", "\'", json_encode($ic["title"])) !!}');

        html = '<li style="text-align: center;">';

        for (i=0; i < data.length; i++) {
            html += '<div style="display: inline-block; height: 10px; background-color: '+data[i].borderColor+';width: 20px;margin-right: 2px;"></div>';
            html += '<span style="margin-right: 15px;">'+genres[i].name+'</span>';
        }
        html += '</li>';

        new Chart("usageChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: data,
            pointRaduis: 5
        },
        options: {
            legend: {display: false},
            title: {
                    display: true,
                    text: title,
                    fontSize: 16
                }
        }
        });

        $('#usageChartColors').html(html);
    });

    $(document).on("change", "#type", function() {
        window.location.href = '/insights/'+$(this).val();
    });

</script>
@endsection
                   