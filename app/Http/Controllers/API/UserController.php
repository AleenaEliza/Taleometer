<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\User;
use App\Models\Role;
use App\Models\UserStoryResponse;
use App\Models\Usage;
use App\Models\UserFeedback;
use App\Models\AudioStoryHistory;
use Validator;
use Storage;

use Twilio\Rest\Client;

class UserController extends Controller
{
    public function generateToken()
    {
        do {
            $token = bin2hex(random_bytes(16));
        } while (User::where("access_token", "=", $token)->first() instanceof User);

        return $token;
    }

    /* public function register(Request $request)
    {
        $rules   =   ['mobile' =>  'required', 'name' =>  'required', 'email' => 'required|email'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $user->fname = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json(["status" => true, "message" => "Profile details updated successfully.", "data" => $user]);
    } */

    public function sendOtp(Request $request)
    {
        $rules   =   ['mobile' =>  'required','country_code' => 'required','isd_code' => 'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
           return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $user = User::where(['phone' => $request->mobile, 'isd_code' => $request->isd_code])->whereHas('role', function($q) { $q->where('name', 'Customer'); })->first();

        if(!$user)
        {
            // return response()->json(["status" => false, "message" => "Mobile number is not registered."]);
            $user = new User();
            $user->phone =  $request->mobile;
            $user->country_code = $request->country_code;
            $user->isd_code = $request->isd_code;
            $role = Role::where('name', 'Customer')->first();
            $user->role_id = $role->id;
            $user->save();
        }

        if($request->mobile=='9446328442')
        {
         $otp = 1234; 
        }
        else{
           
           $otp = mt_rand(1000, 9999);
        }

        $user->isd_code = @$request->isd_code;
        // $user->country_code = @$request->country_code;
        $user->otp = $otp;
        $user->otp_sent_at = date('Y-m-d H:i:s');
        

        $mobile =$request->mobile;
        
        if($request->country_code=='91' || $request->country_code=='+91' || $request->country_code=='IN' || $request->isd_code=='91')
        {
            
         $message = urlencode('Your code for Login - OTP: '.$otp.', Do not share this with anyone. LWHd46bGqgG - TALE-O-METER');
          // $apiURL = "http://sms.estrrado.com/sendsms?uname=taleometer&pwd=Estrrado55TM&senderid=TLOMTR&to=".$mobile."&msg=".$message."&route=T&peid=1701164983030971185&tempid=1707165028533609873";
         $curl = \curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => "http://sms.estrrado.com/sendsms?uname=taleometer&pwd=Estrrado55TM&senderid=TLOMTR&to=$mobile&msg=$message&route=T&peid=1701164983030971185&tempid=1707165028533609873",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        
        // if ($err) 
        // {
        //   return "cURL Error #:" . $err;
        // } 
        // else 
        // {
        //   return $response.'uu';
        // }
        }
        else
        {
            $isd_mobile = '+'.$request->isd_code.$mobile;
            $sid = "ACbb120c42843610899c132a9ca2191fd6"; // Your Account SID from www.twilio.com/console
            $token = "e9c0a8c8ce4996306a1f5653ceb96ad7"; // Your Auth Token from www.twilio.com/console
            try {
            $client = new Client($sid, $token);
            $message = $client->messages->create(
              $isd_mobile, // Text this number
              [
                'from' => '+19379156557', // From a valid Twilio number
                'body' => 'Your code for Login - OTP: '.$otp.', Do not share this with anyone- TALE-O-METER'
              ]
            );
            }
             catch (\Exception $e) {
            // will return user to previous screen with twilio error
            return response()->json(["status" => false, "message" => "Invalid Phone number/Country code."]);
              }
            
            //return $message->sid;
        }

        $user->save();

        return response()->json(["status" => true, "message" => "OTP sent successfully."]);
    }

    public function verifyOtp(Request $request)
    {
        $rules   =   ['mobile' =>  'required', 'otp' => 'required', 'country_code' => 'required','isd_code' => 'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
           return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $user = User::where(['phone' => $request->mobile, 'isd_code' => $request->isd_code])->where('otp', $request->otp)->whereHas('role', function($q) { $q->where('name', 'Customer'); })->first();

        if(!$user)
            return response()->json(["status" => false, "message" => "Invalid OTP."]);

        $token = $this->generateToken();
        
        $user->otp = null;
        $user->otp_sent_at = null;
        $user->otp_verified = 1;
        $user->current_active = 1;
        $user->is_login = 1;
        $user->access_token = $token;
        $user->save();

        $flag = (@$user->fname == '')?1:0;

        return response()->json(["status" => true, "message" => "OTP verified successfully.", "data" => $user, "token" => $token, "new_registeration" => $flag]);
    }

    public function logout(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $user->access_token = '';
        $user->current_active = 0;
        $user->is_login = 0;
        $user->save();

        AudioStoryHistory::where(['user_id' => $user->id, 'is_playing' => 1])->update(['is_playing' => 0]);

        Usage::where('user_id', $user->id)->whereNull('end_time')->update(['end_time' => date('Y-m-d H:i:s')]);

        return response()->json(["status" => true, "message" => "User logout successfully."]);
    }

    public function updateProfile_sendOtp(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['mobile' =>  'required', "country_code" => "required", "isd_code" => "required"];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
           return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $u = User::where(['phone' => $request->mobile, "isd_code" => $request->isd_code])->where("id", "!=", $user->id)->first();

        if($u)
            return response()->json(["status" => false, "message" => "Mobile number is already taken."]);
        if($request->mobile=='9446328442')
        {
         
           $otp = 1234; 
        }
        else{
           $otp = mt_rand(1000, 9999);
        }
        //$otp = 1234;

        $user->isd_code = @$request->isd_code;
        // $user->country_code = @$request->country_code;
        $user->otp = $otp;
        $user->otp_sent_at = date('Y-m-d H:i:s');
        

        $mobile =$request->mobile;
        
        if($request->country_code=='91' || $request->country_code=='+91' || $request->country_code=='IN' || $request->isd_code=='91')
        {
            
         $message = urlencode('Your code for Login - OTP: '.$otp.', Do not share this with anyone. LWHd46bGqgG - TALE-O-METER');
          // $apiURL = "http://sms.estrrado.com/sendsms?uname=taleometer&pwd=Estrrado55TM&senderid=TLOMTR&to=".$mobile."&msg=".$message."&route=T&peid=1701164983030971185&tempid=1707165028533609873";
         $curl = \curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => "http://sms.estrrado.com/sendsms?uname=taleometer&pwd=Estrrado55TM&senderid=TLOMTR&to=$mobile&msg=$message&route=T&peid=1701164983030971185&tempid=1707165028533609873",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        
        // if ($err) 
        // {
        //   return "cURL Error #:" . $err;
        // } 
        // else 
        // {
        //   return $response.'uu';
        // }
        }
        else
        {
            $isd_mobile = '+'.$request->isd_code.$mobile;
            $sid = "ACbb120c42843610899c132a9ca2191fd6"; // Your Account SID from www.twilio.com/console
            $token = "e9c0a8c8ce4996306a1f5653ceb96ad7"; // Your Auth Token from www.twilio.com/console
            try{
            $client = new Client($sid, $token);
            $message = $client->messages->create(
              $isd_mobile, // Text this number
              [
                'from' => '+19379156557', // From a valid Twilio number
                'body' => 'Your code for update profile - OTP: '.$otp.', Do not share this with anyone- TALE-O-METER'
              ]
            );
            }
            catch (\Exception $e) {
            // will return user to previous screen with twilio error
            return response()->json(["status" => false, "message" => "Invalid Phone number/Country code."]);
              }
            
            //return $message->sid;
        }
        $user->save();
        return response()->json(["status" => true, "message" => "OTP sent successfully."]);
    }

    public function updateProfile_verifyOtp(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);
            
        $rules   =   ['mobile' =>  'required',"country_code" => "required","isd_code" => "required"];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $u = User::where(['phone' => $request->mobile, "isd_code" => $request->isd_code])->where("id", "!=", $user->id)->first();

        if($u)
            return response()->json(["status" => false, "message" => "Mobile number is already taken."]);

        if($user->otp != $request->otp)
            return response()->json(["status" => false, "message" => "Invalid OTP."]);
        
        $user->phone = $request->mobile;
        $user->country_code = $request->country_code;
        $user->isd_code = $request->isd_code;
        $user->otp = null;
        $user->otp_sent_at = null;
        $user->current_active = 1;
        $user->is_login = 1;
        $user->save();

        return response()->json(["status" => true, "message" => "Mobile number updated successfully.", "data" => $user]);
    }

    public function getProfile(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        return response()->json(["status" => true, "message" => "Profile retrived successfully.", "data" => $user]);
    }

    public function updateProfile_image(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['image' =>  'required|image'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        if ($request->hasFile('image')) {
            // @unlink($user->avatar);
            // $user->avatar = 'storage/app/public/'.Storage::disk('public')->putFile('user', $request->file('image'));
            @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $user->avatar));  
            $path = Storage::disk('s3')->put('user', $request->image);
            $user->avatar = Storage::disk('s3')->url($path);
        }

        $user->save();

        return response()->json(["status" => true, "message" => "Profile Image updated successfully.", "data" => $user]);
    }
    
    public function removeProfile_image(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        // @unlink($user->avatar);
        // @unlink($user->thumb);
        @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $user->avatar));  
        $user->avatar = null;

        $user->save();

        return response()->json(["status" => true, "message" => "Profile Image removed successfully.", "data" => $user]);
    }

    public function updateProfile_details(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        // $rules   =   ['name' =>  'required', 'display_name' => 'required', 'email' => 'required|email|unique:users,email,'.$user->id.',id,is_deleted,0'];
        $rules   =   ['display_name' => 'required', 'email' => 'nullable|email'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        if(@$request->email != '')
        {
            $u = User::where(['email' => $request->email])->where("id", "!=", $user->id)->first();

            if($u)
                return response()->json(["status" => false, "message" => "The email has already been taken."]);
        }

        if($user->fname == null || $user->fname == '')
            $message = "User registration successful.";
        else
            $message = "Profile details updated successfully.";

        $user->user_code = @$request->name;
        $user->fname = $request->display_name;
        $user->email = @$request->email;
        $user->save();


        return response()->json(["status" => true, "message" => $message, "data" => $user]);
    }

    public function userStoryResponse(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        if(count($request->user_story_ids) != count($request->values))
            return response()->json(["status" => false, "message" => "Invalid arguments."]);

        $response_id = UserStoryResponse::orderBy('response_id', 'DESC')->first();

        if(!$response_id)
            $response_id = 1;
        else
        {
            $response_id = $response_id->response_id + 1;
        }

        for($i=0; $i < count($request->user_story_ids); $i++)
        {
            $data = new UserStoryResponse();

            $data->response_id = $response_id;
            $data->user_id = $user->id;
            $data->user_story_id = $request->user_story_ids[$i];
            $data->value = $request->values[$i];
            $data->save();
        }

        return response()->json(["status" => true, "message" => "User Story saved successfully."]);
    }

    public function setAutoplay(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['value' =>  'in:Enable,Disable'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $user->autoplay = $request->value;
        $user->save();

        return response()->json(["status" => true, "message" => "Settings updated successfully."]);
    }

    public function setUsageStart(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['time' =>  'required|date_format:Y-m-d H:i:s'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $usage = new Usage();
        $usage->user_id = $user->id;
        $usage->start_time = $request->time;
        $usage->save();

        $user->current_active = 1;
        $user->save();

        return response()->json(["status" => true, "message" => "Usage started successfully.", "data" => $usage]);
    }

    public function setUsageEnd(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['time' =>  'required|date_format:Y-m-d H:i:s', 'usage_id' => 'required|exists:usage,id'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $usage = Usage::where('id', $request->usage_id)->whereNull('end_time')->where('user_id', $user->id)->first();

        if(!$usage)
            return response()->json(["status" => false, "message" => "Invalid Usage data."]);
        
        $usage->end_time = $request->time;
        $usage->save();

        $user->current_active = 0;
        $user->save();

        AudioStoryHistory::where(['user_id' => $user->id, 'is_playing' => 1])->update(['is_playing' => 0]);

        return response()->json(["status" => true, "message" => "Usage ended successfully."]);
    }

    public function addFeedback(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['content' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $feedback = new UserFeedback();
        $feedback->user_id = $user->id;
        $feedback->content = $request->content;
        $feedback->save();

        return response()->json(["status" => true, "message" => "Feedback added successfully."]);
    }
}
