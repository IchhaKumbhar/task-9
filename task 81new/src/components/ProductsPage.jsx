import React from 'react';
import {
  Box, Button, Typography, TextField, MenuItem, IconButton, Tooltip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import GetAppIcon from '@mui/icons-material/GetApp';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const TasksPage = () => {
  const navigate = useNavigate();

  const handleAddProductClick = () => {
    navigate('/add-products'); 
  };

  const columns = [
    { field: 'Id', headerName: 'Id', width: 80 },
    { field: 'productImage', headerName: 'Product Image', width: 200 },
    { field: 'products', headerName: 'Product', width: 130 },
    { field: 'price', headerName: 'Price (inclusive of all taxes)', width: 300 },
    { field: 'clientCanPurchase', headerName: 'Client can Purchase', width: 300 },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => (
        <Button onClick={() => handleDelete(params.rowIndex)} variant="outlined">Delete</Button>
      ),
    },
  ];

  const rows = [
    //adding later
  ];

  return (
    <Box sx={{ backgroundColor: '#f3f4f8', minHeight: '100vh', mr: 0, overflowX: 'hidden', ml: '250px' }}>
      <Box sx={{ backgroundColor: 'white', pb: 2, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, borderBottom: '1px solid #eef2f6' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" fontWeight="bold" sx={{ textTransform: 'none' }}>Products</Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ ml: 2, textTransform: 'none' }}>Home • Products</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', color: '#616e7f' }}>
          <Tooltip title="Search"><IconButton><SearchIcon /></IconButton></Tooltip>
          <Tooltip title="Inbox"><IconButton><InboxIcon /></IconButton></Tooltip>
          <Tooltip title="Timer"><IconButton><AccessTimeIcon /></IconButton></Tooltip>
          <Tooltip title="Add Circle"><IconButton><AddCircleIcon /></IconButton></Tooltip>
          <Tooltip title="Notifications"><IconButton><NotificationsIcon /></IconButton></Tooltip>
          <Tooltip title="Power Settings"><IconButton><PowerSettingsNewIcon /></IconButton></Tooltip>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', pl: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="text" sx={{  textTransform: 'none', borderRight: '1px solid #eef2f6', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Product Category
          <TextField select size="small" defaultValue="All" sx={{ ml: 1, width: 'auto', minWidth: 50, '& .MuiOutlinedInput-root': { border: 'none','& fieldset': {border: 'none',}, } }}>
            <MenuItem value="All" sx={{ fontWeight: 'bold', color: 'black', border: 'none' }}>All</MenuItem>
          </TextField>
        </Button>
        <Button variant="text" sx={{  textTransform: 'none', borderRight: '1px solid #eef2f6', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Product Sub Category
          <TextField select size="small" defaultValue="All" sx={{ ml: 1, width: 'auto', minWidth: 50, '& .MuiOutlinedInput-root': { border: 'none','& fieldset': {border: 'none',}, } }}>
            <MenuItem value="All" sx={{ fontWeight: 'bold', color: 'black', border: 'none' }}>All</MenuItem>
          </TextField>
        </Button>
        <Button variant="text" sx={{  textTransform: 'none', borderRight: '1px solid #eef2f6', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Unit Type
          <TextField select size="small" defaultValue="All" sx={{ ml: 1, width: 'auto', minWidth: 50, '& .MuiOutlinedInput-root': { border: 'none','& fieldset': {border: 'none',}, } }}>
            <MenuItem value="All" sx={{ fontWeight: 'bold', color: 'black', border: 'none' }}>All</MenuItem>
          </TextField>
        </Button>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ my: 1, ml: 2, backgroundColor: '#f3f4f8', border: 'solid 1px', borderColor: '#c4c4c4', borderRadius: 0, p: 1, height: '40px', width: '45px' }}>
              <SearchIcon />
            </IconButton>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Start typing to search"
              sx={{ ml: 0, '& .MuiOutlinedInput-root': { height: '40px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 'none'} }}
            />
          </Box>
          
        </Box>
        
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, mb: 2 }}>
        
        <Button sx={{ backgroundColor: '#ff9000', textTransform: 'none', color: 'white', mr: 2  }} onClick={handleAddProductClick}>
          <AddIcon />
          Add Products
        </Button>
        
        <Button variant="outlined" sx={{ backgroundColor: '#fff',textTransform: 'none', borderColor: '#616e7f', color: '#616e7f', mr: 2 }}>
          <GetAppIcon sx={{ mr: 1 }} />
          Export
        </Button>
      </Box>
      <Box sx={{ backgroundColor: 'white', height: 400, width: '95%', ml: 4}}>
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection disableSelectionOnClick />
      </Box>
    </Box>
  );
};

export default TasksPage;
