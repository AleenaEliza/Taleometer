<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>

        <!-- Meta data -->
        <meta charset="UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
        <meta content="tale 'o'meter- Admin Panel HTML template" name="description">
        <meta content="Estrrado Technologies Private Limited" name="author">
        <meta name="keywords" content="admin panel ui, user dashboard template, web application templates, premium admin templates, html css admin templates, premium admin templates, best admin template bootstrap 4, dark admin template, bootstrap 4 template admin, responsive admin template, bootstrap panel template, bootstrap simple dashboard, html web app template, bootstrap report template, modern admin template, nice admin template"/>

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
                                <div class="col-lg-9 col-xl-6">
                                     <form method="POST" action="{{ route('login') }}">
                                     @csrf
                                    <div class="card-group mb-0">
                                        <div class="card card-login p-4">
                                            <div class="card-body">
                                              
                                               <img src="{{URL::asset('admin/assets/images/brand/login1.png')}}" alt="">
                                                 <div class="text-center mb-6">
                                                    <h2 class="mb-2 text-lg-color">Login</h2>
                                                </div>
                                                <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <i class="fe fe-user"></i>
                                                        </div>
                                                    </div>
                                                     <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email" autofocus>
                                                    @error('email')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                    @enderror
                                                </div>
                                                <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <i class="fe fe-lock"></i>
                                                        </div>
                                                    </div>
                                                   <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Password">
                                                    @error('password')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                    @enderror
                                                    <div class="error tac fw" role="alert">
                                                    <strong>{{ Session::get('message')}}</strong>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <button type="submit" class="btn btn-primary login-button btn-block px-4">
                                                        {{ __('Login') }}
                                                        </button>
                                                    </div>
                                                    <div class="col-12 text-center">
                                                          @if (Route::has('password.request'))
                                                            <a class="btn btn-link box-shadow-0 text-lg-color px-0" href="{{ route('password.request') }}">
                                                                {{ __('Forgot Password?') }}
                                                            </a>
                                                        @endif
                                                       <!--  <a href="forgot-password.html" class="btn btn-link box-shadow-0 px-0">Forgot password?</a> -->
                                                    </div>
                                                </div>
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
                                    </form>
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
