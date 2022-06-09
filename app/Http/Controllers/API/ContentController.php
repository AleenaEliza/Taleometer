<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Content;

class ContentController extends Controller
{
    public function getAboutUs()
    {
        $data = Content::where('slug', 'about-us')->first();

        if(!$data)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "About Us content retrived successfully.", "data" => $data]);
    }

    public function getTermsAndConditions()
    {
        $data = Content::where('slug', 'terms-and-conditions')->first();

        if(!$data)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Terms And Conditions retrived successfully.", "data" => $data]);
    }
}
