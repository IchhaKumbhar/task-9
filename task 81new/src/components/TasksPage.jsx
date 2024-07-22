import React, { useState } from 'react';
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
import ClearIcon from '@mui/icons-material/Clear';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GetAppIcon from '@mui/icons-material/GetApp';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const TasksPage = () => {
  const [duration, setDuration] = useState({ start: '', end: '' });
  const [statusFilter, setStatusFilter] = useState('Hide Completed Task');
  const navigate = useNavigate();

  const handleAddTaskClick = () => {
    navigate('/add-task'); 
  };

  

 
  const columns = [
    { field: 'code', headerName: 'Code', width: 90 },
    { field: 'timer', headerName: 'Timer', width: 130 },
    { field: 'dueDate', headerName: 'Due Date', width: 130 },
    { field: 'title', headerName: 'Task', width: 150 },
    { field: 'completedOn', headerName: 'Completed On', width: 150 },
    { field: 'startDate', headerName: 'Start Date', width: 130 },
    { field: 'hoursLogged', headerName: 'Hours Logged', width: 150 },
    { field: 'assignedTo', headerName: 'Assigned To', width: 150 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => (
        <Button onClick={() => handleDelete(params.rowIndex)} variant="outlined">Delete</Button>
      ),
    },
  ];

  // Sample data
  const rows = [
    { id: 1, code: 1, timer: '00:30:00', dueDate: '2024-07-20', title: 'Task 1', completedOn: '', startDate: '2024-07-01', hoursLogged: '5h 30m', assignedTo: 'Purva Gharat', status: 'Pending' },
    { id: 2, code: 2, timer: '01:15:00', dueDate: '2024-07-25', title: 'Task 2', completedOn: '', startDate: '2024-07-05', hoursLogged: '8h 45m', assignedTo: 'Purva Gharat', status: 'Completed' },
  ];

  return (
    <Box sx={{ backgroundColor: '#f3f4f8', minHeight: '100vh', mr: 0, overflowX: 'hidden', ml: '250px' }}>
      <Box sx={{ backgroundColor: 'white', pb: 2, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, borderBottom: '1px solid #eef2f6' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" fontWeight="bold" sx={{ textTransform: 'none' }}>Tasks</Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ ml: 2, textTransform: 'none' }}>Home • Tasks</Typography>
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
          <Typography variant="subtitle1" sx={{ color: '#a2a2a2', textTransform: 'none' }}>Duration</Typography>
          <TextField
            type="date"
            size="small"
            value={duration.start}
            onChange={(e) => setDuration({ ...duration, start: e.target.value })}
            sx={{ width: 'auto', minWidth: 5, '& .MuiOutlinedInput-root': { border: 'none', '& fieldset': { border: 'none' }, } }}
          />
          <Typography variant="subtitle1" sx={{ textTransform: 'none', mx: 0 }}>To</Typography>
          <TextField
            type="date"
            size="small"
            value={duration.end}
            onChange={(e) => setDuration({ ...duration, end: e.target.value })}
            sx={{ width: 'auto', minWidth: 100, '& .MuiOutlinedInput-root': { border: 'none', '& fieldset': { border: 'none' }, }, borderRight: 1, borderRightColor: '#f3f4f8' }}
          />
          <Typography variant="subtitle1" sx={{ color: '#a2a2a2', textTransform: 'none', mx: 1 }}>Status</Typography>
          <TextField
            select
            size="small"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            sx={{ width: 'auto', minWidth: 150, '& .MuiOutlinedInput-root': { border: 'none', '& fieldset': { border: 'none' }, }, pr: 4, borderRight: 1, borderRightColor: '#f3f4f8' }}
          >
            <MenuItem value="Hide Completed Task">Hide Completed Task</MenuItem>
            <MenuItem value="Show All Tasks">Show All Tasks</MenuItem>
          </TextField>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ my: 1, backgroundColor: '#f3f4f8', border: 'solid 1px', borderColor: '#c4c4c4', borderRadius: 0, p: 1, height: '40px', width: '45px' }}>
              <SearchIcon />
            </IconButton>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Start typing to search"
              sx={{ ml: 0, '& .MuiOutlinedInput-root': { height: '40px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 'none' } }}
            />
          </Box>
          <Button variant="outlined" sx={{ ml: 1, textTransform: 'none', borderColor: '#616e7f', color: '#616e7f' }}>
            <ClearIcon sx={{ mr: 0 }} />
            Clear
          </Button>
        </Box>
        <Typography variant="subtitle1" sx={{ color: '#a2a2a2', textTransform: 'none', display: 'flex', alignItems: 'center', ml: 2, borderLeft: 1, borderLeftColor: '#f3f4f8', pl: 2 ,mr: 2}}>
          <FilterListIcon sx={{ mr: 1 }} />
          Filter
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, mb: 2 }}>
        
        <Button sx={{ backgroundColor: '#ff9000', textTransform: 'none', color: 'white', mr: 2  }} onClick={handleAddTaskClick}>
          <AddIcon />
          Add Task
        </Button>
        <Button variant="outlined" sx={{ backgroundColor: '#fff', textTransform: 'none', borderColor: '#616e7f', color: '#616e7f', mr: 2 }}>
          <AccountCircleIcon sx={{ mr: 1 }} />
          My Tasks
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
