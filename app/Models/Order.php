<?php

namespace App\Models;

use App\Exceptions\OrderNotHaveDrinksException;
use App\Traits\CommonModelDefinitions;
use Carbon\Carbon;
use DateTime;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Order
 * @package App\Models
 *
 * @property integer $id
 * @property string $table
 * @property DateTime $completed_at
 * @property-read boolean $is_completed
 *
 * @property DateTime $created_at
 * @property DateTime $updated_at
 */
class Order extends Model
{

    use CommonModelDefinitions;

    /**
     * The attributes that aren't mass assignable.
     * We can do that because we use Custom Requests.
     *
     * @var array
     */
    protected $guarded = [];


    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['is_completed'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'completed_at',
    ];

    /**
     * Get if Order is Completed.
     *
     * @return string
     */
    public function getIsCompletedAttribute()
    {
        return (bool)$this->completed_at;
    }

    /**
     * @return HasMany|Item
     */
    public function items()
    {
        return $this->hasMany(Item::class);
    }

    /**
     * Set order as completed
     * @return $this
     * @throws OrderNotHaveDrinksException
     */
    public function complete()
    {

        // can be do only if has drinks attached.
        if (!$this->drinks()->count()) {
            throw new OrderNotHaveDrinksException();
        }

        $this->completed_at = Carbon::now();
        $this->save();
        return $this;
    }
}
