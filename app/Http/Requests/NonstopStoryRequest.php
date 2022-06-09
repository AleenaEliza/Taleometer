<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NonstopStoryRequest extends FormRequest
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
            'audio_story_id2'  =>  'required_without:link_audio_id2',
            'link_audio_id2'  =>  'required_without:audio_story_id2'
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
            'audio_story_id2' => 'Audio Story or Link Audio is requried.',
            'link_audio_id2' => 'Link Audio or Audio Story is required.'
        ];
    }
}
