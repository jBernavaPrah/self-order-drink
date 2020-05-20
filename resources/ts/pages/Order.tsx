import React from "react";
import FC from "../types/FC";
import {Button, Divider, Grid} from "@material-ui/core";
import {useHistory} from "react-router";
import SubTitle from "../components/SubTitle";
import path from "../helpers/path";
import Title from "../components/Title";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Home from "./Home";
import useOrder from "../hooks/useOrder";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            divider: {
                marginTop: theme.spacing(5),
                marginBottom: theme.spacing(5),
            }
        }
    )
)

const Order: FC = () => {

    const order = useOrder();
    const history = useHistory();

    const classes = useStyles();

    return (

        <Grid container justify="center">
            <Grid item xs={6}>
                <Title>Your Order is <b>{order.id}</b></Title>
                <SubTitle> and will be served immediately...</SubTitle>
                <Divider className={classes.divider} variant="middle"/>
                <Button onClick={() => {
                    order.reset();
                    history.push(path(Home))
                }}>Start New Order!</Button>

            </Grid>

        </Grid>
    )
};

Order.path = '/orders/:id';

export default Order
