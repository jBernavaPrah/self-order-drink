import React from 'react';
import FC from "../types/FC";

import {Button, Divider, FormControl, Grid, Input, InputLabel, Typography} from "@material-ui/core";
import useOrder from "../hooks/useOrder";
import Title from "../components/Title";
import {createOrder} from "../helpers/api";
import Cart from "../components/Cart";
import path from "../helpers/path";
import Order from "./Order";
import {Redirect, useHistory} from "react-router";
import Home from "./Home";

const OrderReview: FC = () => {


    const order = useOrder();
    const history = useHistory();

    if (order.items.length === 0) {
        return (
            <Redirect to={path(Home)}/>
        )
    }

    const finalizeOrder = async () => {
        if (!order.name) {
            return;
        }
        try {
            const response = await createOrder({
                table: order.name,
                items: order.items.map(elem => ({cocktail_id: elem.cocktail.id, quantity: elem.quantity}))
            });
            order.set({...order, id: response.data.data.id});
            history.push(path(Order, {id: response.data.data.id}))
        } catch (e) {
            const error = e as Error;
            console.error(error.message)
        }

    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Title>Order Review</Title>
            </Grid>
            <Grid item xs={8}>
                <Cart hideActions/>
            </Grid>
            <Grid item xs={4}>

                <Button fullWidth size="small" color="secondary" onClick={() => history.push(path(Home))}>Add
                    more Drinks </Button>
                <Divider variant="fullWidth" style={{marginBottom: "15px", marginTop: "5px"}}/>

                <Typography variant="button">Complete the order</Typography>

                <FormControl fullWidth>
                    <InputLabel htmlFor="input-search">Your name is:</InputLabel>
                    <Input value={order.name || ''}
                           onChange={(e) => order.set({...order, name: e.currentTarget.value})}
                           id="input-search" autoFocus/>
                </FormControl>
                <Divider variant="fullWidth" style={{margin: "5px"}}/>
                <Button fullWidth size="small" color="primary" disabled={!order.name} onClick={() => finalizeOrder()}>Complete
                    Order!</Button>

            </Grid>

        </Grid>
    )

};

OrderReview.path = '/review';

export default OrderReview
