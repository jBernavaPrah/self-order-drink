type OrderResourceApi = {
    id: number,
    items: { id: number, cocktail_id: number, quantity: number }[]
    table: number,
}

export default OrderResourceApi
