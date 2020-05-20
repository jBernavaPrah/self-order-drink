import {useContext} from "react";
import {OrderContext} from "../contexts/Order";

const useOrder = () => {

    const [order, setOrder] = useContext(OrderContext);

    return {
        ...order,
        set: setOrder,
        reset: () => {
            setOrder(
                {
                    id: undefined,
                    table: undefined,
                    items: []
                }
            )
        }
    }


    //return useContext(OrderContext);
    //@const [error, setError] = useState<string>("");

    /*
    const updateOrder = async (id: number, updateOrder: UpdateOrder) => {
        setError("");
        try {
            const response = await apiUpdateOrder(id, updateOrder);
            setOrder(response.data.data)
        } catch (e) {
            const error = e as Error;
            setError(error.message)
        }
    };

    const deleteOrder = async (id: number) => {
        setError("");
        try {
            await apiDeleteOrder(id);
            setOrder(undefined)
        } catch (e) {
            const error = e as Error;
            setError(error.message)
        }
    };
    const getOrder = async (id: number) => {
        setError("");
        try {
            const response = await apiGetOrder(id);
            setOrder(response.data.data);
        } catch (e) {
            const error = e as Error;
            setError(error.message);
        }
    };

    const createOrder = async (createOrder: CreateOrder) => {
        setError('');
        try {
            const response = await apiCreateOrder(createOrder);
            setOrder(response.data.data)
        } catch (e) {
            const error = e as Error;
            setError(error.message);
        }
    };

    return {order, updateOrder, deleteOrder, getOrder, createOrder, error}

     */

    //return [order, setOrder]
};

export default useOrder
