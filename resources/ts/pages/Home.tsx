import React from 'react'
import FC from '../types/FC'
import Title from "../components/Title";
import {Grid} from "@material-ui/core";
import SearchCocktail from "../components/SearchCocktails";
import Cart from "../components/Cart";

const Home: FC = () => {

    return (
        <Grid container>
            <Grid item>
                <Title>Search Your Cocktail</Title>
            </Grid>
            <Grid container spacing={1} justify="space-between">
                <Grid item md={7}>
                    <SearchCocktail/>
                </Grid>
                <Grid item md={4}>
                    <Cart/>
                </Grid>
            </Grid>
        </Grid>
    )
};
Home.path = '/';

export default Home
