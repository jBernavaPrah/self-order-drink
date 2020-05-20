<?php

namespace Tests\Feature;

use JBernavaPrah\CocktailDB\Facades\CocktailDB;
use JBernavaPrah\CocktailDB\Resources\Drink;
use Tests\TestCase;

class CocktailTest extends TestCase
{

    public function testSearchByIngredient()
    {
        $drink = new Drink(['idDrink' => '12', 'drinkThumb' => 'http://', 'drink' => 'nameDrink', 'ingredients' => ['Vodka'], 'measures' => '1']);
        CocktailDB::shouldReceive('searchDrinkByIngredient')->andReturn([$drink]);

        $response = $this->get('/api/cocktails?' . http_build_query(['by_ingredient' => 'Vodka']));

        $response->assertJson(['data' => [
            ['id' => '12',
                'thumb' => 'http://',
                'name' => 'nameDrink',
                'ingredients' => ['Vodka'],
                'measures' => '1']
        ]]);


        $response->assertStatus(200);
    }

    public function testSearchByName()
    {
        $drink = new Drink(['idDrink' => '5', 'drinkThumb' => 'http://', 'drink' => 'Margarita', 'ingredients' => ['Vodka'], 'measures' => '1']);
        CocktailDB::shouldReceive('searchDrinkByName')->andReturn([$drink]);

        $response = $this->get('/api/cocktails?' . http_build_query(['by_name' => 'Margarita']));

        $response->assertJson(['data' => [
            ['id' => '5',
                'thumb' => 'http://',
                'name' => 'Margarita',
                'ingredients' => ['Vodka'],
                'measures' => '1']
        ]]);

        $response->assertStatus(200);
    }
}
