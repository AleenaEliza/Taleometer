<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContentRequest extends FormRequest
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
            'slug'  =>  'required|unique:contents,slug,'.$this->id.',id',
            'value'  =>  'required',
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
            'Title' => 'Content Title is required.',
            'slug.required' => 'Slug is required.',
            'slug.unique' => 'Slug already exist.',
            'value' => 'Content Text is required.',
        ];
    }
}
