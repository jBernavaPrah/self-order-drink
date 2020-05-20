import React, {FC} from "react";

import {Typography} from "@material-ui/core";

const Error: FC<{ error: string }> = ({error}) => {
    return (
        <>
            {error && <Typography variant="body1" color="error">{error}</Typography>}
        </>
    )
};
export default Error
