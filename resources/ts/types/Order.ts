import Item from "./Item";

type Order = {
    id: number | undefined,
    name: string,
    items: Item[],
}
export default Order;
