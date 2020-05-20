<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JBernavaPrah\CocktailDB\Facades\CocktailDB;

class IngredientController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return array
     */
    public function __invoke(Request $request)
    {
        return CocktailDB::ingredients();
    }
}
