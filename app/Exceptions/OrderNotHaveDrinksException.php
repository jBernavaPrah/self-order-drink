<?php

namespace App\Exceptions;

use Symfony\Component\HttpKernel\Exception\HttpException;

class OrderNotHaveDrinksException extends HttpException
{
    public function __construct($message = null)
    {
        parent::__construct(422, $message ?: "Order not have Drinks attached.");
    }
}
