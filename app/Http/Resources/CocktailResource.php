<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use JBernavaPrah\CocktailDB\Resources\Drink;

class CocktailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {


        /** @var Drink|ResourceCollection $this */
        return [
            'id' => $this->idDrink,
            'name' => $this->drink,
            'thumb' => $this->drinkThumb,
            'ingredients' => property_exists($this, 'ingredients') ? $this->ingredients : [],
            'measures' => property_exists($this, 'measures') ? $this->measures : [],
        ];
    }
}
