<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Story;
use App\Models\Plot;
use App\Models\Narration;
use App\Models\Tag;
use App\Models\UserStory;

class MasterController extends Controller
{
    public function getStories(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $data = Story::whereNULL('deleted_at')->orderBy('created_at', 'DESC')->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Stories listed successfully.", "data" => $data]);
    }

    public function getPlots(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $data = Plot::whereNULL('deleted_at')->orderBy('created_at', 'DESC')->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Plots listed successfully.", "data" => $data]);
    }

    public function getNarrations(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $data = Narration::whereNULL('deleted_at')->orderBy('created_at', 'DESC')->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Narrators listed successfully.", "data" => $data]);
    }

    public function getUserStories(Request $request)
    {
        $token = @$request->bearerToken();

        $user = validateToken($token);

        if(!$user)
            return response()->json(["status" => false, "message" => "Unauthorized."]);

        $data = UserStory::whereNULL('deleted_at')->orderBy('order', 'ASC')->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "User Stories listed successfully.", "data" => $data]);
    }
}
