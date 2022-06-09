<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlotRequest extends FormRequest
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
            'name'  =>  'required|unique:plots,name,'.$this->id.',id,deleted_at,NULL',
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
            'name.required' => 'Plot Name is required.',
            'name.unique' => 'Plot Name already exist.',
            'image' => 'Image is required.',
        ];
    }
}
