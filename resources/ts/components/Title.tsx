import React, {FC} from "react";

import {Typography} from "@material-ui/core";

const Title: FC = ({children, ...props}) => {
    return (
        <Typography variant={"h3"} {...props}>{children}</Typography>
    )
};

export default Title;
