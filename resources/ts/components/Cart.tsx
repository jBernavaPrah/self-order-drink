import React, {FC} from 'react'
import useOrder from "../hooks/useOrder";

import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@material-ui/core";

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Item from "../types/Item";
import {useHistory} from "react-router";
import path from "../helpers/path";
import OrderReview from "../pages/OrderReview";

const Cart: FC<{ hideActions?: boolean }> = ({hideActions = false}) => {

    const order = useOrder();
    const history = useHistory();

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" variant="subtitle1">
                    My Order
                </Typography>

                {!hideActions && order.items.length > 0 &&
                <CardActions>
                    <Grid container spacing={1}>
                        <Button fullWidth size="small" color="primary" onClick={() => history.push(path(OrderReview))}>Complete
                            Order!</Button>
                    </Grid>
                </CardActions>
                }

                <List dense>
                    {
                        order.items && order.items.map((item: Item, index) => (
                            <ListItem key={index} dense button>
                                <ListItemIcon>
                                    {item.quantity === 0 ?
                                        <IconButton edge="end" aria-label="remove quantity" onClick={() => order.set(prev => {
                                                const items = [...prev.items];
                                                items.splice(index, 1);
                                                return {...prev, items}
                                            }
                                        )}>
                                            <DeleteForeverIcon/>
                                        </IconButton>
                                        :
                                        <Avatar alt="Remy Sharp" src={item.cocktail.thumb}/>
                                    }
                                </ListItemIcon>
                                <ListItemText primary={`${item.cocktail.name}`} secondary={`Quantity: ${item.quantity}`}/>


                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="add quantity" onClick={() => order.set(prevItems => {
                                            const items = [...prevItems.items];
                                            items[index].quantity = items[index].quantity + 1;
                                            return {...prevItems, items}
                                        }
                                    )}>
                                        <AddIcon/>
                                    </IconButton>
                                    <IconButton edge="end" aria-label="remove quantity" onClick={() => order.set(prevItems => {
                                            const items = [...prevItems.items];
                                            if (items[index].quantity > 0) {
                                                items[index].quantity = items[index].quantity - 1;
                                            }
                                            return {...prevItems, items}
                                        }
                                    )}>
                                        <RemoveIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>


                            </ListItem>
                        ))
                    }
                </List>
            </CardContent>

            {!hideActions &&
            <CardActions>
                {
                    order.items.length > 0 && <Button onClick={() => order.reset()} color="secondary">Reset
                        order</Button>
                }

            </CardActions>
            }


        </Card>

    )
};

export default Cart;
