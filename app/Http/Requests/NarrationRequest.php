<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NarrationRequest extends FormRequest
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
            'name'  =>  'required|unique:narrations,name,'.$this->id.',id,deleted_at,NULL',
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
            'name.required' => 'Narration Name is required.',
            'name.unique' => 'Narration Name already exist.',
            'image' => 'Image is required.',
        ];
    }
}
