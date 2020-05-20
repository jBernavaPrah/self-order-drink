type OrderResourceApi = {
    id: number,
    items: { id: number, cocktail_id: number, quantity: number }[]
    name: string,
}

export default OrderResourceApi
