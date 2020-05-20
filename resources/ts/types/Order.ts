import Item from "./Item";

type Order = {
    id: number | undefined,
    table: number | undefined,
    items: Item[],
}
export default Order;
