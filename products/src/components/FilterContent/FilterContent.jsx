import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { 
    Box,
    TextField,
    Typography,
    Button,
    Divider,
    Stack
 } from "@mui/material";

const FilterContent = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '7% 0% 7% 0%', gap: '7%' }}>
                <Stack direction={"column"}>
                    <Typography sx={{ fontFamily: 'serif', color: '#6f6f6f', fontSize: '17px', padding: '0% 0% 5% 0%' }}>Location</Typography>
                    <TextField id="outlined-basic" placeholder="Location" variant="outlined" sx={{ width: '125%' }} />
                </Stack>
                <Stack direction={"column"}>
                    <Typography sx={{ fontFamily: 'serif', color: '#6f6f6f', fontSize: '17px', padding: '0% 0% 5% 0%' }}>Check In</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker slotProps={{ textField: { placeholder: 'Check-In Date' } }} sx={{ width: '120%' }} />
                    </LocalizationProvider>               
                </Stack>
                <Stack direction={"column"}>
                    <Typography sx={{ fontFamily: 'serif', color: '#6f6f6f', fontSize: '17px', padding: '0% 0% 5% 0%' }}>Check Out</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker slotProps={{ textField: { placeholder: 'Check-Out Date' } }} sx={{ width: '120%' }} />
                    </LocalizationProvider>
                </Stack>
                <Stack direction="column" padding={'2.3% 0% 0% 0%'} width={'15%'}>
                    <Button sx={{ fontWeight: 'bold', fontFamily: 'initial', background: '#2196f3', color: 'white', padding: '0% 2% 0% 2%', height: '56px', '&:hover': { background: '#1a75bd' } }}>Check Availability</Button>
                </Stack>
            </Box>
            <Divider />
        </>
    );
}

export default FilterContent;