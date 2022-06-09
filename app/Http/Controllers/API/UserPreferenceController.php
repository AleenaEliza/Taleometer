<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PreferenceCategory;
use App\Models\PreferenceBubble;
use App\Models\UserPreference;
use Validator;

class UserPreferenceController extends Controller
{
    public function getPreferenceBubbles(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $data = PreferenceBubble::whereNULL('deleted_at')->inRandomOrder()->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Preference bubbles listed successfully.", "data" => $data]);
    }

    public function getPreferenceCategories(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $data = PreferenceCategory::whereNULL('deleted_at')->orderBy('created_at', 'Desc')->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Preference categories listed successfully.", "data" => $data]);
    }

    public function setUserPreferences(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $rules   =   ['preference_bubble_ids' =>  'required|array'];

        $validator              =   Validator::make($request->all(),$rules);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => $validator->errors()]);
        }

        UserPreference::whereNotIn('preference_bubble_id', $request->preference_bubble_ids)->delete();

        foreach($request->preference_bubble_ids as $preference_bubble_id)
        {
            $userPreference = UserPreference::where(['user_id' => $user->id, 'preference_bubble_id' => $preference_bubble_id])->first();

            if(!$userPreference)
            {
                $userPreference = new UserPreference();
                $userPreference->user_id = $user->id;
                $userPreference->preference_bubble_id = $preference_bubble_id;
                $userPreference->save();
            }
        }

        return response()->json(["status" => true, "message" => "User Preferences saved successfully."]);
    }

    public function getUserPreferences(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $data = UserPreference::with('preference_bubble')->where('user_id', $user->id)->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "User Preferences listed successfully.", "data" => $data]);
    }
}
