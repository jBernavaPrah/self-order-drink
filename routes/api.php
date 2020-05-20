<?php

use Illuminate\Support\Facades\Route;
use JBernavaPrah\CocktailDB\Facades\CocktailDB;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function () {
    dd(CocktailDB::getDrinkById(11007));
});

Route::post('/orders/{order}/complete', 'OrderController@complete');
Route::apiResource('/orders', 'OrderController');
Route::apiResource('/drinks', 'DrinkController');

Route::get('/cocktails', 'CocktailController');
Route::get('/ingredients', 'IngredientController');
