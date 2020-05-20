type CreateOrder = {
    table: string,
    items: { cocktail_id: number, quantity: number }[]
}

export default CreateOrder
