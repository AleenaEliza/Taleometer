@extends('layouts.admin')
@section('title', 'Dashboard')
@section('content')
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
<!--Page header-->
<div class="page-header">
    <div class="page-leftheader">
        <h4 class="page-title mb-0">Hi! Welcome Back</h4>
    </div>
</div>

<div class="row">
    <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
        <div class="card overflow-hidden dash1-card border-0">
            <div class="card-body">
                <a href="{{ url('/users')}}">
                    <p class=" mb-1 ">Total Users</p>
                    <h2 class="mb-1 number-font">{{$customer}}</h2>
                </a>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
        <div class="card overflow-hidden dash1-card border-0">
            <div class="card-body">
                <a href="{{ url('/audio-story')}}">
                    <p class=" mb-1 ">Total Audio Stories</p>
                    <h2 class="mb-1 number-font">{{$audio_story}}</h2>
                </a>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
        <div class="card overflow-hidden dash1-card border-0">
            <div class="card-body">
                <a href="{{ url('/users')}}">
                    <p class=" mb-1 ">Total Active Users</p>
                    <h2 class="mb-1 number-font">{{$active_customer}}</h2>
                </a>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
        <div class="card overflow-hidden dash1-card border-0">
            <div class="card-body">
                <a href="{{ url('/users')}}">
                    <p class=" mb-1 ">Total Today's Users</p>
                    <h2 class="mb-1 number-font">{{$today_customer}}</h2>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="row" id="scrolldiv">
    <div class="col-lg-12 col-md-12">
        <div  class="card">
            <!-- <div class="card-header text-right">
                
            </div> -->
            <div id="userChartDiv">
                <canvas id="userChart" style="width:90%; max-width: 1200px; margin:20px auto;"></canvas>
            </div>
        </div>
    </div>
</div>

<div class="row" id="scrolldiv">
    <div class="col-lg-12 col-md-12">
        <div  class="card">
            <div id="contentChartDiv">
                <canvas id="contentChart" style="width:90%; max-width: 1200px; margin:20px auto;"></canvas>
                <ul id="contentChartColors" class="text-center"></ul>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">

    $( document ).ready(function() {

        localStorage.clear();
        
        // User Chart
        var xValues = JSON.parse('{!! str_replace("'", "\'", json_encode($uc["x"])) !!}');
        var data = JSON.parse('{!! str_replace("'", "\'", json_encode($uc["y"])) !!}');

        new Chart("userChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{ 
                    data: data,
                    borderColor: "#188bb3",
                    pointBackgroundColor: "#188bb3",
                    pointRaduis: 5,
                    fill: true,
                    fillColor: "#e7f4fa",
                    lineTension: 0
                }]
            },
            options: {
                legend: {display: false},
                title: {
                display: true,
                text: "Concurrent User's Chart",
                fontSize: 16
                }
            }
        });


        // Access Chart
        var xValues = JSON.parse('{!! str_replace("'", "\'", json_encode($ac["x"])) !!}');
        var data = JSON.parse('{!! str_replace("'", "\'", json_encode($ac["y"])) !!}');
        var genres = JSON.parse('{!! str_replace("'", "\'", json_encode($ac["genres"])) !!}');

        html = '<li style="text-align: center;">';

        for (i=0; i < data.length; i++) {
            html += '<div style="display: inline-block; height: 10px; background-color: '+data[i].backgroundColor+';width: 20px;margin-right: 2px;"></div>';
            html += '<span style="margin-right: 15px;">'+genres[i].name+'</span>';
        }
        html += '</li>';

        new Chart("contentChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: data
            },
            options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "Mostly Accessed Content Report",
                    fontSize: 16
                }
            }
        });

        $('#contentChartColors').html(html);
    });

</script>
@endsection
                   