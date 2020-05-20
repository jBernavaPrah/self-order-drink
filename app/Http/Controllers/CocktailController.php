<?php

namespace App\Http\Controllers;

use App\Http\Requests\IndexCocktail;
use App\Http\Resources\CocktailResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use JBernavaPrah\CocktailDB\Facades\CocktailDB;

class CocktailController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param IndexCocktail $request
     * @return AnonymousResourceCollection
     */
    public function __invoke(IndexCocktail $request)
    {


        $drinks = collect();
        $request->has('by_name') && $drinks->add(CocktailDB::searchDrinksByName($request->by_name));
        $request->has('by_ingredient') && $drinks->add(CocktailDB::searchDrinksByIngredient($request->by_ingredient));
        $request->has('by_id') && $drinks->add(CocktailDB::getDrinkById($request->by_id));

        return CocktailResource::collection($drinks->flatten()->all());

    }
}
