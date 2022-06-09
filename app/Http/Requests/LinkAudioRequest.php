<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LinkAudioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'  =>  'required|unique:link_audios,title,'.$this->id.',id,deleted_at,NULL',
            // 'file'  =>  'required_if:id,<=,0|mimes:application/octet-stream,audio/mp3,audio/wav,audio/mpeg,audio/basic,audio/L24,audio/mid,audio/mp4,audio/x-aiff,audio/x-mpegurl,audio/ogg,audio/vorbis,audio/rn-realaudio,audio/mpeg3,audio/mpag,audio/x-wav',
        ];
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'title' => 'Story Title is required.',
            'file' => 'Audio File is required.',
        ];
    }
}
