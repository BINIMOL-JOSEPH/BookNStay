import React from "react";
import {
    Box
} from '@mui/material';
import styles from './NotFound.module.css';

const NotFound = () => {
    return(
        <Box className={styles.box}>
            <img src="http://localhost:3000/NotFound-removebg-preview(1).png" alt="Notfound" />
        </Box>
    );
}

export default NotFound;