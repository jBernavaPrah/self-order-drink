<?php

namespace Tests\Feature;

use App\Models\Item;
use App\Models\Order;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DrinkTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @dataProvider createDrinkDataProvider
     * @param array $data - Data from provider
     * @param $status - Status from provider
     */
    public function testCreateOrder($data, $status)
    {

        /** @var Order $order */
        $order = factory(Order::class)->create();

        $data = array_merge(
            $data,
            [
                'order_id' => $order->id
            ]
        );

        $response = $this->json('POST', '/api/drinks', $data);

        $response->assertStatus($status);
    }

    /**
     * @dataProvider updateDrinkDataProvider
     * @param $data
     * @param $status
     */
    function testUpdateDrink($data, $status)
    {

        /** @var Order $order */
        $order = factory(Order::class)->create();
        /** @var Item $drink */
        $drink = factory(Item::class)->create(['order_id' => $order->id]);

        $response = $this->json('PUT', "/api/drinks/{$drink->id}", $data);

        $response->assertStatus($status);
    }

    function testUpdateNotExistingDrink()
    {

        $response = $this->json('PUT', "/api/drinks/5", ['quantity' => 5]);

        $response->assertStatus(404);
    }

    function testDeleteDrink()
    {
        /** @var Order $order */
        $order = factory(Order::class)->create();
        /** @var Item $drink */
        $drink = factory(Item::class)->create(['order_id' => $order->id]);

        $response = $this->json('DELETE', "/api/drinks/{$drink->id}");

        $response->assertStatus(200);
    }

    public function createDrinkDataProvider()
    {

        return [
            [[], 422],
            [['invalid_property' => 'a'], 422],
            [['quantity' => 12, 'cocktail_id' => 123123], 201],
        ];
    }

    public function updateDrinkDataProvider()
    {
        return [
            [
                [], 422
            ],
            [
                ['order_id' => 2], 422
            ],
            [
                ['quantity' => 0], 422
            ],
            [
                ['quantity' => -1], 422
            ],
            [
                ['quantity' => 5], 200
            ],

        ];
    }

}
