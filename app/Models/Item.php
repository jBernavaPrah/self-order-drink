<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Drink
 * @package App\Models
 *
 * @property integer $id
 * @property-read  Order $order
 * @property integer $order_id
 * @property integer $cocktail_id
 * @property integer $quantity
 *
 * @property DateTime $created_at
 * @property DateTime $updated_at
 *
 */
class Item extends Model
{

    protected $guarded = [];

    /**
     * @return BelongsTo|Order
     */
    function order()
    {
        return $this->belongsTo(Order::class);
    }
}
