<?php

namespace Tests\Unit;

use App\Exceptions\OrderNotHaveDrinksException;
use App\Models\Item;
use App\Models\Order;
use PHPUnit\Framework\TestCase;


class OrderModelTest extends TestCase
{


    public function testThrowExceptionIfOrderNotHaveDrinksAttachedWhenCompleteIt()
    {
        $this->expectException(OrderNotHaveDrinksException::class);

        $drink = \Mockery::mock(Item::class);
        $drink->shouldReceive('count')->andReturn(0);

        $order = \Mockery::mock(Order::class);
        $order->shouldReceive('complete')->passthru();
        $order->shouldReceive('drinks')->andReturn($drink);

        $order->complete();
    }


}
