<style>
    table.dataTable tbody td {
    word-break: break-word;
    vertical-align: middle;
}
.selecteddivs {
   background-color: #dddbdb;
}
</style>
@if(! isset($role_modules))
@php $role_modules = []; @endphp
@endif 
<div class="card-body">
    <div class="row">
         @if($modules && count($modules) > 0)
                    @php $s=0;  @endphp 
                    @foreach($modules as $row)
                     @php $s++;  $pt = $row['parent'];  $child = $row['child'];  @endphp 
  <div class="col-md-12 col-lg-3 mod_div">
        <div class="card text-center pointer card_div" style="cursor: pointer;" data-target="#privilege-modal_{{ $s }}" data-toggle="modal">
            <div class="card-body">
                <h5 class="card-title">

                    @if(isset($pt['menu_icon']))
                    <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> <?php echo $pt['menu_icon']; ?> </svg>
                    @else
                    <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.66 4.52l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"/></svg>
                    @endif

                </h5>
                <p class="card-text">{{$pt['name']}}</p>
            </div>
        </div>

            <div class="modal fade module_pages" role="dialog" tabindex="-1" id="privilege-modal_{{ $s }}">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Pages</h5>
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            @if($child && count($child) > 0) 
                                <div class="table-responsive" style="overflow-x:hidden; overflow-y: hidden;">
                                <table id="menulist" class="table table-bordered text-nowrap">
                                <thead>
                                <tr>
                                <th class="wd-15p border-bottom-0">Pages</th>
                                <th class="wd-10p border-bottom-0">Enable</th>

                                </tr>
                                </thead>
                                <tbody>
                                @foreach($child as $ch) 

                                <tr>
                                    <td>{{$ch['name']}}</td>
                                    <td><input type="checkbox" name="modules[{{$pt['id']}}][{{$ch['id']}}]" <?php if(in_array($ch['id'], $role_modules)) { echo 'checked'; } ?> value="1"></td>
                                </tr>
                              
                                @endforeach
                               
                                    
                                </tbody>
                                </table>
                               <button class="btn btn-primary fr savepage" type="submit" data-dismiss="modal">Save </button>
                                </div>
                         @else

                                <div class="table-responsive">
                                <table id="menulist" class="table table-bordered text-nowrap">
                                <thead>
                                <tr>
                                <th class="wd-15p border-bottom-0">Pages</th>
                                <th class="wd-10p border-bottom-0">Enable</th>

                                </tr>
                                </thead>
                                <tbody>
                            

                                <tr>
                                    <td>{{$pt['name']}}</td>
                                    <td><input type="checkbox" name="modules[{{$pt['id']}}]" <?php if(in_array($pt['id'], $role_modules)) { echo 'checked'; } ?> value="1"></td>
                                </tr>
                              
                              
                                </tbody>
                                </table>
                                 <button class="btn btn-primary fr savepage" type="submit" data-dismiss="modal">Save </button>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>


    </div>

    @endforeach
    @endif
    
</div>
</div>

<script src="{{URL::asset('admin/assets/plugins/datatable/js/jquery.dataTables.js')}}"></script>
<script src="{{URL::asset('admin/assets/plugins/datatable/js/dataTables.bootstrap4.js')}}"></script>
<script src="{{URL::asset('admin/assets/plugins/datatable/js/dataTables.buttons.min.js')}}"></script>
<script src="{{URL::asset('admin/assets/plugins/datatable/dataTables.responsive.min.js')}}"></script>
<script src="{{URL::asset('admin/assets/js/datatables.js')}}"></script>
               
    