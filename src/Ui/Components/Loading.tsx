import * as React from "react";
import {Box, CircularProgress} from "@mui/material";

const LoadingView = () => {
    return (
        <Box
            flexGrow={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={"100%"}
            width={"100%"}
        >
            <CircularProgress/>
        </Box>
    );
};

export default LoadingView;