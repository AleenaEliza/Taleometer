<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>

        <!-- Meta data -->
        <meta charset="UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
  

        <!-- Title -->
        <title>tale'o'meter - Admin Panel</title>

        <!--Favicon -->
        <link rel="icon" href="{{URL::asset('admin/assets/images/brand/index.ico')}}" type="image/x-icon"/>

        <!--Bootstrap css -->
        <link href="{{URL::asset('admin/assets/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">

        <!-- Style css -->
        <link href="{{URL::asset('admin/assets/css/style.css')}}" rel="stylesheet" />
        <link href="{{URL::asset('admin/assets/css/dark.css')}}" rel="stylesheet" />
        <link href="{{URL::asset('admin/assets/css/skin-modes.css')}}" rel="stylesheet" />

        <!-- Animate css -->
        <link href="{{URL::asset('admin/assets/css/animated.css')}}" rel="stylesheet" />

        <!---Icons css-->
        <link href="{{URL::asset('admin/assets/css/icons.css')}}" rel="stylesheet" />

        <!-- Color Skin css -->
        <link id="theme" href="{{URL::asset('admin/assets/colors/color1.css')}}" rel="stylesheet" type="text/css"/>

        <!-- Custom css -->
        <link href="{{URL::asset('admin/assets/css/custom.css')}}" rel="stylesheet" />
        @section('css')
<style> #adminLogin .error{ color: #fff !important; }</style>
@endsection
    </head>

    <body class="h-100vh page-style1">

        <div class="page">
            <div class="page-single">
                <div class="p-5">
                    <div class="row">
                        <div class="col mx-auto">
                            <div class="row justify-content-center">
                                <div class="col-lg-12 col-xl-9">
                                     
                                    <div class="card-group mb-0">
                                        <div class="card card-login p-4">
                                            <div class="card-body">
                                              
                                               <img src="{{URL::asset('admin/assets/images/brand/login.png')}}" alt="img">
                                                @yield('content')
                                              <!--   <div class="text-center pt-4">
                                                    <div class="font-weight-normal fs-16">You Don't have an account <a class="btn-link font-weight-normal" href="#">Register Here</a></div>
                                                </div> -->
                                            </div>
                                        </div>
                                        <div class="card">
                                          <!--   <div class="text-center justify-content-center page-single-content"> -->
                                               <!--  <div class="box">
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div> -->
                                                <img src="{{URL::asset('admin/assets/images/brand/login.jpg')}}" alt="img" style="display: block;object-fit: cover;width: 100%;height: 100%;">
                                           <!--  </div> -->
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Jquery js-->
        <script src="{{URL::asset('admin/assets/js/jquery-3.5.1.min.js')}}"></script>

        <!-- Bootstrap4 js-->
        <script src="{{URL::asset('admin/assets/plugins/bootstrap/popper.min.js')}}"></script>
        <script src="{{URL::asset('admin/assets/plugins/bootstrap/js/bootstrap.min.js')}}"></script>

        <!--Othercharts js-->
        <script src="{{URL::asset('admin/assets/plugins/othercharts/jquery.sparkline.min.js')}}"></script>

        <!-- Circle-progress js-->
        <script src="{{URL::asset('admin/assets/js/circle-progress.min.js')}}"></script>

        <!-- Jquery-rating js-->
        <script src="{{URL::asset('admin/assets/plugins/rating/jquery.rating-stars.js')}}"></script>

        <!-- Custom js-->
        <script src="{{URL::asset('admin/assets/js/custom.js')}}"></script>

    </body>
</html>
