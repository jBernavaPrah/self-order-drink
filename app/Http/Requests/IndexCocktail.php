<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class IndexCocktail
 * @package App\Http\Requests
 *
 * @property-read string $by_name
 * @property-read string $by_ingredient
 * @property-read string $by_id
 */
class IndexCocktail extends FormRequest
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
            'by_name' => 'string',
            'by_ingredient' => 'string',
            'by_id' => 'numeric|min:1'
        ];
    }
}
