<?php

namespace App\Http\Controllers;

use App\Exceptions\OrderNotHaveDrinksException;
use App\Http\Requests\StoreOrder;
use App\Http\Requests\UpdateOrder;
use App\Http\Resources\OrderResource as OrderResource;
use App\Models\Item;
use App\Models\Order;
use Exception;

class OrderController extends Controller
{

    /**
     * Store a newly created resource in storage.
     * Validate the request with the StoreOrder's class.
     *
     * @param StoreOrder $request
     * @return OrderResource
     */
    public function store(StoreOrder $request)
    {

        $order = new Order();
        $order->table = $request->table;
        $order->save();

        foreach ($request->items as $value) {
            $item = new Item();
            $item->order_id = $order->id;
            $item->cocktail_id = $value['cocktail_id'];
            $item->quantity = $value['quantity'];
            $item->save();
        }

        return new OrderResource($order);
    }

    /**
     * Set order as completed.
     * Validate the request with the CompleteOrder's class.
     *
     * @param Order $order
     * @return OrderResource
     * @throws OrderNotHaveDrinksException
     */
    public function complete(Order $order)
    {

        $order->complete();

        return new OrderResource($order);
    }

    /**
     * Display the specified resource.
     *
     * @param Order $order
     * @return OrderResource
     */
    public function show(Order $order)
    {
        return new OrderResource($order);
    }

    /**
     * Update the specified resource in storage.
     * Validate the request with the UpdateOrder's class.
     *
     * @param UpdateOrder $request
     * @param Order $order
     * @return OrderResource
     */
    public function update(UpdateOrder $request, Order $order)
    {


        $order->update($request->all());
        return new OrderResource($order);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Order $order
     * @return void
     * @throws Exception
     */
    public function destroy(Order $order)
    {
        $order->delete();
    }
}
