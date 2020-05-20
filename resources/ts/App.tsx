import React from 'react';
import {createMuiTheme, CssBaseline, Grid, MuiThemeProvider} from "@material-ui/core";
import Root from './pages/Root'
import {OrderContextProvider} from "./contexts/Order";
import SearchAppBar from './components/SearchAppBar'

const theme = createMuiTheme();

function App() {

    return (
        <OrderContextProvider>

            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <SearchAppBar/>

                <Grid container justify="center">
                    <Grid item xs={11} sm={8}>
                        <Root/>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        </OrderContextProvider>
    );
}

export default App;
