import React, {FC} from "react";
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import Order from "./Order";
import NotFound from "./NotFound";
import OrderReview from "./OrderReview";

const Root: FC = () => {
    return (
        <Switch>
            <Route exact component={Home} path={Home.path}/>
            <Route exact component={Order} path={Order.path}/>
            <Route component={OrderReview} path={OrderReview.path}/>

            <Route component={NotFound} path={NotFound.path}/>
        </Switch>
    )
}

export default Root
