<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NotificationRequest extends FormRequest
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
            'title'  =>  'required',
            'content'  =>  'required',
            'audio_story_id'  =>  'nullable|exists:audio_stories,id',
            'is_active'  =>  'required',
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
            'title' => 'Notification Title is required.',
            'content' => 'Notification Content is required.',
            'audio_story_id' => 'Invalid Audio Story.',
            'is_active' => 'Notification Status is required.',
        ];
    }
}
