import React from 'react'
import styles from './Loader.module.css';
import {
    Box, 
    CircularProgress
 } from '@mui/material';

function Loader() {
    return (
        <Box className={styles.loader}>
            <CircularProgress />
        </Box>
    )
}

export default Loader