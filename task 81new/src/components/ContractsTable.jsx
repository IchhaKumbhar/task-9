import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography, TextField, MenuItem, InputAdornment, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LayersIcon from '@mui/icons-material/Layers';
import GetAppIcon from '@mui/icons-material/GetApp';
import rowsData from '../data/contracts.json'; 
import clients from '../data/clients.json';

const columns = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'subject', headerName: 'Subject', width: 200, headerClassName: 'header-text' },
  { field: 'client', headerName: 'Client', minWidth: 150, headerClassName: 'header-text' },
  { field: 'project', headerName: 'Project', width: 150, headerClassName: 'header-text' },
  { field: 'amount', headerName: 'Amount', width: 100, headerClassName: 'header-text' },
  { field: 'startDate', headerName: 'Start Date', width: 120, headerClassName: 'header-text' },
  { field: 'endDate', headerName: 'End Date', width: 120, headerClassName: 'header-text' },
];

export default function ContractsTable() {
  const [rows, setRows] = React.useState(rowsData);
  const [clientFilter, setClientFilter] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleClientChange = (event) => {
    setClientFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    return (
      (clientFilter === 'All' || row.client === clientFilter) &&
      (row.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <Box sx={{ backgroundColor: '#f3f4f8', minHeight: '100vh', ml: '250px' }}>
      <Box sx={{ backgroundColor: 'white',  p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, borderBottom: '1px solid #eef2f6' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" fontWeight="bold" sx={{ textTransform: 'none' }}>Contracts</Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ ml: 2, textTransform: 'none' }}>Home • Contracts</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', color: '#616e7f' }}>
          <IconButton><SearchIcon /></IconButton>
          <IconButton><InboxIcon /></IconButton>
          <IconButton><AccessTimeIcon /></IconButton>
          <IconButton><AddCircleIcon /></IconButton>
          <IconButton><NotificationsIcon /></IconButton>
          <IconButton><PowerSettingsNewIcon /></IconButton>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'white', px: 2, borderBottom: '1px solid #eef2f6',}}>
        <Button variant="text" sx={{  textTransform: 'none', borderRight: '1px solid #eef2f6', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Duration Start Date To End Date
        </Button>
        <Button variant="text" sx={{  textTransform: 'none',borderRight: '1px solid #eef2f6', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Client
          <TextField
            select
            size="small"
            value={clientFilter}
            onChange={handleClientChange}
            sx={{
                ml: 1,
                width: 'auto',
                minWidth: 50,
                '& .MuiOutlinedInput-root': {
                  border: 'none',
                  '& fieldset': {
                    border: 'none',
                  },
                },
              }}
          >
            {clients.map((client) => (
              <MenuItem key={client.value} value={client.value}>
                {client.label}
              </MenuItem>
            ))}
          </TextField>
        </Button>
        <Button variant="text" sx={{  textTransform: 'none', borderRight: '1px solid #eef2f6', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Contract Type
          <TextField select size="small" defaultValue="All" sx={{ ml: 1, width: 'auto', minWidth: 50, '& .MuiOutlinedInput-root': { border: 'none','& fieldset': {border: 'none',}, } }}>
            <MenuItem value="All" sx={{ fontWeight: 'bold', color: 'black', border: 'none' }}>All</MenuItem>
          </TextField>
        </Button>
        <IconButton sx={{
              backgroundColor: '#f3f4f8',
              border: 'solid 1px',
              borderColor: '#c4c4c4',
              borderRadius: 0,
              p: 1,
              height: '40px',  
              width: '45px',
              ml: '30px'
            }}>
              <SearchIcon />
            </IconButton>
        <TextField
          size="large"
          variant="outlined"
          placeholder="Start Typing to search"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                
              </InputAdornment>
            ),
          }}
          sx={{ '& .MuiOutlinedInput-root': {
                  height: '40px', 
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderLeft: 'none',
                  mt:0.8
                }, }}
        />
      </Box>
      <Box sx={{ display: 'flex', backgroundColor: '#f3f4f8', px: 2, py: 2, ml: 2 }}>
        <Button variant="contained" sx={{  textTransform: 'none', backgroundColor: '#ff9000', color: 'white', mr: 1, border: 'none' }}>
          <AddIcon sx={{ mr: 1 }} />
          Create Contract
        </Button>
        <Button variant="outlined" sx={{  backgroundColor: 'white', textTransform: 'none', mr: 1, color: 'gray', border: '1px solid gray' }}>
          <LayersIcon sx={{ mr: 1 }} />
          Contract Template
        </Button>
        <Button variant="outlined" sx={{  backgroundColor: 'white', textTransform: 'none', color: 'gray', border: '1px solid gray' }}>
          <GetAppIcon sx={{ mr: 1 }} />
          Export
        </Button>
      </Box>
      <Box sx={{ height: 400, mr:8, ml:4, backgroundColor: 'white' }}>
        <DataGrid rows={filteredRows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
      </Box>
    </Box>
  );
}
