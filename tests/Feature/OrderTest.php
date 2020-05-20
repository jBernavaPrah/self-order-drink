<?php

namespace Tests\Feature;

use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class OrderTest extends TestCase
{

    use RefreshDatabase;

    /**
     * @dataProvider createOrderDataProvider
     * @param array $data - Data from provider
     * @param $status - Status from provider
     */
    public function testCreateOrder($data, $status)
    {
        $response = $this->json('POST', '/api/orders', $data);

        $response->assertStatus($status);
    }

    /**
     * @dataProvider updateOrderDataProvider
     * @param $data
     * @param $status
     */
    public function testUpdateOrder($data, $status)
    {
        $order = factory(Order::class)->create();

        $response = $this->json('PUT', "/api/orders/{$order->id}", $data);

        $response->assertStatus($status);

    }

    public function testGetNotExistingOrder()
    {

        $response = $this->json('GET', "/api/orders/5");

        $response->dump();
        $response->assertStatus(404);
        $response->assertJson([
            'message' => "No query results for model [App\\Models\\Order] 5",
            'error' => 'not_found_http_exception',
            'type' => 'api_error'
        ]);

    }

    public function testGetOrder()
    {

        /** @var Order $order */
        $order = factory(Order::class)->create();

        $response = $this->json('GET', "/api/orders/{$order->id}");

        $response->assertStatus(200);
        $response->assertJson(['data' => [
            'id' => $order->id,
            'table' => $order->table,
            'is_completed' => false,
            'completed_at' => null,
        ]]);

    }

    public function testCompleteOrderWithDrinks()
    {

    }

    public function testExceptionReturnWhenCompleteOrderWithoutDrinks()
    {
        /** @var Order $order */
        $order = factory(Order::class)->create();

        $response = $this->json('POST', "/api/orders/{$order->id}/complete");

        $response->assertStatus(422);
        $response->assertJson([
            'message' => "Order not have Drinks attached.",
            'error' => 'order_not_have_drinks_exception',
            'type' => 'api_error'
        ]);

    }

    public function createOrderDataProvider()
    {
        return [
            [
                [], 422
            ],
            [
                ['param_not_valid' => 'a'], 422
            ],
            [
                ['table' => '1'], 201
            ],
        ];
    }

    public function updateOrderDataProvider()
    {
        return [
            [
                [], 422
            ],
            [
                ['param_not_valid' => 'a'], 422
            ],
            [
                ['completed_at' => Carbon::now()], 422
            ],
            [
                ['table' => '5'], 200
            ],
        ];
    }
}
