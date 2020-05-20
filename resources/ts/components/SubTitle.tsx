import React, {FC} from "react";
import {Typography} from "@material-ui/core";

const SubTitle: FC = ({children, ...props}) => {
    return (
        <Typography {...props} variant={"subtitle1"}>{children}</Typography>
    )
};
export default SubTitle;
