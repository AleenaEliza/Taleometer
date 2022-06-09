<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TrivaCategoryRequest extends FormRequest
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
            'name'  =>  'required|unique:category_trivia,category_name,'.$this->id.',id,is_deleted,0',
            'image'  =>  'required_if:id,<=,0|image',
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
            'name.required' => 'Category Name is required.',
            'name.unique' => 'Category Name already exist.',
            'image' => 'Image is required.',
        ];
    }
}
