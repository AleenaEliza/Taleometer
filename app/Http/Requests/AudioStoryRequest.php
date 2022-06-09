<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AudioStoryRequest extends FormRequest
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
            'title'  =>  'required|unique:audio_stories,title,'.$this->id.',id,deleted_at,NULL',
            'image'  =>  'required_if:id,<=,0|image',
            // 'file'  =>  'required_if:id,<=,0|mimes:application/octet-stream,audio/mp3,audio/wav,audio/mpeg,audio/basic,audio/L24,audio/mid,audio/mp4,audio/x-aiff,audio/x-mpegurl,audio/ogg,audio/vorbis,audio/rn-realaudio,audio/mpeg3,audio/mpag,audio/x-wav',
            'genre_id'  =>  'required|exists:genres,id',
            'story_id'  =>  'required|exists:stories,id',
            'plot_id'  =>  'required|exists:plots,id',
            'narration_id'  =>  'required|exists:narrations,id',
            'tag_ids'  =>  'required'
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
            'image' => 'Story Album is required.',
            'file' => 'Audio File is required.',
            'genre_id.required' => 'Genre is required.',
            'genre_id.exists' => 'Genre is invalid.',
            'story_id.required' => 'Story is required.',
            'story_id.exists' => 'Story is invalid.',
            'plot_id.required' => 'Plot is required.',
            'plot_id.exists' => 'Plot is invalid.',
            'narration_id.required' => 'Narration is required.',
            'narration_id.exists' => 'Narration is invalid.',
            'tag_ids' => 'Tag(s) are required.',
        ];
    }
}
