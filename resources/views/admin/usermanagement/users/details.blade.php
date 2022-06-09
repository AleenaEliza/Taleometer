<div id="adminModal" style="display: none">   
    {{ Form::open(array('url' => "admin/user/save", 'id' => 'userForm', 'name' => 'userForm', 'class' => '','files'=>'true', 'novalidate')) }}
        <div class="modal-header">
            <div class="col-11"><div class="row">
                <div class="col-sm-5"><h5 class="modal-title" id="exampleModalLongTitle">Add Customer</h5></div>
              <!--   <div class="col-sm-7 tar"><h5 id="user_code"></h5></div> -->
            </div></div>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            {{Form::hidden('id',0,['id'=>'id'])}} 
            {{Form::hidden('user[role_id]',0,['id'=>'role_id'])}} 
            {{Form::hidden('detail[emirate]','',['id'=>'emirate'])}}
            {{Form::hidden('arr_key','user',['id'=>'arr_key'])}}   
            {{Form::hidden('pg_name','users',['id'=>'pg_name'])}}
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="fname">First name <span class="text-red">*</span></label>
                    <input type="text" class="form-control" name="user[fname]" id="fname" placeholder="First name" value="" required>
                    <span class="error"></span>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lname">Last name</label>
                    <input type="text" class="form-control" name="user[lname]" id="lname" placeholder="Last name" value="" required>
                    <span class="error"></span>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="email">Email <span class="text-red">*</span></label>
                    <input type="email" class="form-control" name="user[email]" id="email" placeholder="Email" value="" required>
                    <span class="error"></span>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="phone">Phone No. <span class="text-red">*</span></label>
                    <input type="text" class="form-control" name="user[phone]" id="phone" placeholder="Phone No" value="" required oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="10">
                    <span class="error"></span>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <label for="address1">Address</label>
                    <textarea class="form-control" name="user[address1]" id="address1" placeholder="Address" rows="2"></textarea>
                    <span class="error"></span>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="password">Password <span class="text-red">*</span></label>
                    <input type="password" class="form-control" name="user[password]" id="password" placeholder="Password" value="" >
                    <span class="error"></span>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="avatar">Avatar</label>
                    {{Form::file('avatar',['id'=>'avatar','class'=>'form-control'])}}
                </div>
                <div class="col-md-6 mb-3">
                    <label for="avatar">Status</label>
                    {{Form::select('user[is_active]',['1'=>'Active','0'=>'Inactive'],1,['id'=>'is_active','class'=>'form-control'])}}
                </div>
                <div class="col-md-6 mb-3">
                    <img id="avatar_img" src="{{url('storage/app/public/no-avatar.png')}}" alt="avatar" style="height: 120px;" />
                </div>
            </div>
        </div>
        <div class="modal-footer">
            {{Form::hidden('can_submit',0,['id'=>'can_submit'])}}{{Form::hidden('page','customer',['id'=>'customer'])}}
            <button id="cancel_btn" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button id="save_btn" type="submit" class="btn btn-primary">Save</button>
        </div>
    {{Form::close()}}
</div>
<script type="text/javascript">
   $(document).ready(function(){ 
        $('#can_submit').val(0);
        $("body").on('change','#userForm #avatar',function(){  readURL(this); }); 
        
    });
    
    function readURL(input) { 
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { $('body #'+input.id+'_img').attr('src', e.target.result); $('body #'+input.id+'_img').show(); }
            reader.readAsDataURL(input.files[0]);
        }
    }
</script>
