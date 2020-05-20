<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreOrder
 * @package App\Http\Requests
 *
 * @property-read string table
 * @property-read array items
 */
class StoreOrder extends FormRequest
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
            'table' => 'required|string',
            'items' => 'required|array',
            'items.*.quantity' => "required|numeric|min:0",
            'items.*.cocktail_id' => "required|numeric|min:0",
        ];
    }
}
