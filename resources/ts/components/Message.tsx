import React, {FC} from "react";

import {Typography} from '@material-ui/core'

const Message: FC = ({children}) => {
    return (
        <Typography>{children}</Typography>
    )
};

export default Message;
