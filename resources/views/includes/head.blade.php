 <meta charset="UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
        <meta content="Nikkou" name="description">
        <meta content="Estrrado Technologies Private Limited" name="author">
        <meta name="keywords" content="admin panel ui, user dashboard template, web application templates, premium admin templates, html css admin templates, premium admin templates, best admin template bootstrap 4, dark admin template, bootstrap 4 template admin, responsive admin template, bootstrap panel template, bootstrap simple dashboard, html web app template, bootstrap report template, modern admin template, nice admin template"/>

        <!-- Title -->
        <title>tale'o'meter</title>

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

        <!--Sidemenu css -->
       <link href="{{URL::asset('admin/assets/css/sidemenu.css')}}" rel="stylesheet">

        <!-- P-scroll bar css-->
        <link href="{{URL::asset('admin/assets/plugins/p-scrollbar/p-scrollbar.css')}}" rel="stylesheet" />

        <!---Icons css-->
        <link href="{{URL::asset('admin/assets/css/icons.css')}}" rel="stylesheet" />

        <!-- Simplebar css -->
        <link rel="stylesheet" href="{{URL::asset('admin/assets/plugins/simplebar/css/simplebar.css')}}">

        <!-- INTERNAL Select2 css -->
        <link href="{{URL::asset('admin/assets/plugins/select2/select2.min.css')}}" rel="stylesheet" />

        <!-- Color Skin css -->
        <link id="theme" href="{{URL::asset('admin/assets/colors/color1.css')}}" rel="stylesheet" type="text/css"/>

       <!-- Data table css -->
        <link href="{{URL::asset('admin/assets/plugins/datatable/css/dataTables.bootstrap4.min.css')}}" rel="stylesheet" />
        <link href="{{URL::asset('admin/assets/plugins/datatable/css/buttons.bootstrap4.min.css')}}"  rel="stylesheet">
        <link href="{{URL::asset('admin/assets/plugins/datatable/responsive.bootstrap4.min.css')}}" rel="stylesheet" />

        <!-- Custom css -->
        <link href="{{URL::asset('admin/assets/css/custom.css')}}" rel="stylesheet" />

        <!--Switch css-->
        <link href="{{URL::asset('admin/assets/css/switch.css')}}" rel="stylesheet" type="text/css"/>

        <link rel="stylesheet" href="{{URL::asset('admin/assets/css/toastr.min.css')}}" />
        
        <!-- INTERNAL File Uploads css -->
        <link href="{{URL::asset('admin/assets/plugins/fancyuploder/fancy_fileupload.css')}}" rel="stylesheet" />
        <!-- INTERNAL File Uploads css-->
        <link href="{{URL::asset('admin/assets/plugins/fileupload/css/fileupload.css')}}" rel="stylesheet" type="text/css" />
        
        <!-- Jquery js-->
          <script src="{{URL::asset('admin/assets/js/jquery-3.5.1.min.js')}}"></script>

        <!-- Bootstrap4 js-->
         <script src="{{URL::asset('admin/assets/plugins/bootstrap/popper.min.js')}}"></script>
         <script src="{{URL::asset('admin/assets/plugins/bootstrap/js/bootstrap.min.js')}}"></script>

         <script src="{{URL::asset('admin/assets/js/custom.js')}}"></script>

         <meta name="csrf-token" content="{{ csrf_token() }}" />
         <style type="text/css">
           #sortable-row { list-style: none; color: black; }
        #sortable-row li { margin-bottom:4px; padding:10px; background-color:#BBF4A8;cursor:move;}
        #sortable-row li.ui-state-highlight { height: 1.0em; background-color:#F0F0F0;border:#ccc 2px dotted;}
        .modal-open 
        {
        overflow: scroll;
        }
         </style>
                