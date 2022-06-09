<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PreferenceBubbleRequest extends FormRequest
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
            'name'  =>  'required|unique:preference_bubbles,name,'.$this->id.',id,deleted_at,NULL',
            'preference_category_id'  =>  'required|exists:preference_categories,id',
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
            'name.required' => 'Bubble Name is required.',
            'name.unique' => 'Bubble Name already exist.',
            'preference_category_id.required' => 'Preferece Category is required.',
            'preference_category_id.exists' => 'Preferece Category is invalid.',
            'image' => 'Image is required.',
        ];
    }
}
