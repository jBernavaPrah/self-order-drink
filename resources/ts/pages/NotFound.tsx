import React from "react";
import FC from "../types/FC";
import {Grid, Typography} from "@material-ui/core"

const NotFound: FC = () => {
    return (
        <Grid>
            <Typography>Not Found :(</Typography>
        </Grid>
    )
}
NotFound.path = '*'
export default NotFound
