<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoryRequest extends FormRequest
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
            'title'  =>  'required|unique:user_stories,title,'.$this->id.',id,deleted_at,NULL',
            'type'  =>  'required',
            'options'  =>  'required_if:type,choice',
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
            'title.required' => 'Title is required.',
            'title.unique' => 'Title already exist.',
            'type' => 'Input Type is required.',
            'options' => 'Opiotns are required.',
        ];
    }
}
