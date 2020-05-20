import React, {FC, useState} from "react";
import {
    Button,
    FormControl,
    FormHelperText,
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    Input,
    InputLabel,
    ListSubheader,
    Theme,
} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {searchCocktail as apiSearchCocktail} from "../helpers/api";
import CocktailType from "../types/Cocktail";
import {createStyles, makeStyles} from "@material-ui/styles";
import useOrder from "../hooks/useOrder";
import Item from "../types/Item";
import Message from "./Message";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        results: {
            marginTop: theme.spacing(3),
        },
        item: {
            margin: theme.spacing(1)
        },
        gridList: {},
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);


const SearchCocktail: FC = () => {

    const classes = useStyles();
    const [search, setSearch] = useState<string>("");
    const [cocktails, setCocktails] = useState<CocktailType[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [alreadySearched, setAlreadySearched] = useState<boolean>(false);

    const order = useOrder();

    const searchCocktails = async () => {
        setIsSearching(true);
        setAlreadySearched(true);
        setCocktails([]);
        try {
            const response = await apiSearchCocktail({by_name: search, by_ingredient: search});
            setCocktails(response.data.data);
            setIsSearching(false)
        } catch (e) {
            const error = e as Error;
            console.error(error)
        }
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="input-search">What taste you search?</InputLabel>
                    <Input value={search}
                           onChange={(e) => setSearch(e.currentTarget.value)}
                           id="input-search" autoFocus placeholder="Example: Vodka "/>
                    <FormHelperText id="helper-desk">Add the name of Drink or one of ingredient of
                        it.</FormHelperText>
                </FormControl>
                <Button fullWidth onClick={searchCocktails}>Search</Button>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {isSearching &&
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Skeleton variant="rect" height={350}/>
                            </Grid>
                        </Grid>}

                        {alreadySearched && !isSearching && cocktails.length === 0 &&
                        <Message>No data found :(</Message>}

                        {cocktails.length > 0 &&
                        <GridList cellHeight={180} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                                <ListSubheader component="div">Results</ListSubheader>
                            </GridListTile>
                            {cocktails.filter(
                                cocktail => order && !order.items.map((item: Item) => item.cocktail.id).includes(cocktail.id))
                                .map((cocktail, index) => (
                                    <GridListTile key={index}>
                                        <img src={cocktail.thumb} alt={cocktail.name}/>
                                        <GridListTileBar
                                            title={cocktail.name}
                                            actionIcon={
                                                <IconButton aria-label={`Add to cart ${cocktail.name}`} className={classes.icon} onClick={() => order.set(
                                                    prevState => ({
                                                        ...prevState, items: [...prevState.items, {
                                                            cocktail: cocktail,
                                                            quantity: 1,
                                                        }]
                                                    })
                                                )}>
                                                    <AddShoppingCartIcon/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                ))}
                        </GridList>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default SearchCocktail;
