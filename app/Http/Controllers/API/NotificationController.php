<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notification;
use Validator;

class NotificationController extends Controller
{
    public function getNotifications(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $page = isset($request->page)?$request->page:1;
        // if($page < 1) $page = 1;
        $limit = isset($request->limit)?$request->limit:12;

        $data = Notification::with('audio_story')->where('is_active', 1)->whereNULL('deleted_at')->orderBy('created_at', 'DESC');

        if($page != 'all')
            $data = $data->skip(($page-1)*$limit)->take($limit)->get();
        else
            $data = $data->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Notifications listed successfully.", "data" => $data]);
    }

    public function setNotificationSetting(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['value' =>  'in:0,1'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $user->push_notify = $request->value;
        $user->save();

        return response()->json(["status" => true, "message" => "Notification settings updated successfully."]);
    }

    public function setDeviceToken(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['token' =>  'required'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        $user->deviceToken = $request->token;
        $user->save();

        return response()->json(["status" => true, "message" => "Device Token updated successfully."]);
    }
}
