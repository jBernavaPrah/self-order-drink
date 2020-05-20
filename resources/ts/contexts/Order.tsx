import React, {createContext, Dispatch, FC, SetStateAction, useState} from "react";
import Order from "../types/Order";

type OrderContext = [Order, Dispatch<SetStateAction<Order>>]

const OrderContext = createContext<OrderContext>([
        {
            id: undefined,
            table: undefined,
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
        table: undefined,
        items: [],

    });

    return (
        <OrderContext.Provider value={[order, setOrder]}>
            {children}
        </OrderContext.Provider>
    )
};

export {OrderContext, OrderContextProvider}
