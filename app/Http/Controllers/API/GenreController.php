<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Genre;
use Validator;

class GenreController extends Controller
{
    public function getGenreList()
    {
        $data = Genre::where('is_active', 1)->whereNull('deleted_at')->orderBy('created_at', 'Desc')->get();

        if(count($data) == 0)
            return response()->json(["status" => false, "message" => "No data found."]);

        return response()->json(["status" => true, "message" => "Genre listed successfully.", "data" => $data]);
    }
}
