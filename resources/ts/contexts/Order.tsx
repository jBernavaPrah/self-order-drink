import React, {createContext, Dispatch, FC, SetStateAction, useState} from "react";
import Order from "../types/Order";

type OrderContext = [Order, Dispatch<SetStateAction<Order>>]

const OrderContext = createContext<OrderContext>([
        {
            id: undefined,
            name: "",
            items: []
        },
        () => {
        }
    ]
    )
;

const OrderContextProvider: FC = ({children}) => {

    const [order, setOrder] = useState<Order>({
        id: undefined,
        name: "",
        items: [],

    });

    return (
        <OrderContext.Provider value={[order, setOrder]}>
            {children}
        </OrderContext.Provider>
    )
};

export {OrderContext, OrderContextProvider}
