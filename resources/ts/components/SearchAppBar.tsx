import React, {FC, useState} from 'react';
import Input from '@material-ui/core/Input'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import SearchIcon from '@material-ui/icons/Search';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';
import path from "../helpers/path";
import Home from "../pages/Home";
import {useHistory} from "react-router";
import OrderReview from "../pages/OrderReview";
import useOrder from "../hooks/useOrder";


const SearchAppBar: FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const order = useOrder();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Order on PUBX
                    </Typography>

                    <Button color="inherit" onClick={() => {
                        order.reset();
                        history.push(path(Home))
                    }}>Start new Order</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },

    }),
);

export default SearchAppBar;
