import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, Button, Typography, TextField, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const localizer = momentLocalizer(moment);

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [employeeFilter, setEmployeeFilter] = useState('All');
  const [clientFilter, setClientFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, start: new Date(newEvent.start), end: new Date(newEvent.end) }]);
    handleClose();
  };

  return (
    <Box sx={{ backgroundColor: '#f3f4f8', minHeight: '100vh', ml: '250px' }}>
      <Box sx={{ backgroundColor: 'white', pb: 2, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, borderBottom: '1px solid #eef2f6' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" fontWeight="bold" sx={{ textTransform: 'none' }}>Events</Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ ml: 2, textTransform: 'none' }}>Home • Events</Typography>
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', px: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="text" sx={{ borderRight: '1px solid #eef2f6', borderRadius: 0, color: 'gray', ml: 2, textTransform: 'none', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
            Employee
            <TextField
              select
              size="small"
              value={employeeFilter}
              onChange={(e) => setEmployeeFilter(e.target.value)}
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
              <MenuItem value="All" fontWeight="bold" sx={{ textTransform: 'none' }}>All</MenuItem>
            </TextField>
          </Button>
          <Button variant="text" sx={{ borderRight: '1px solid #eef2f6', borderRadius: 0, color: 'gray', ml: 2, textTransform: 'none', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
            Client
            <TextField
              select
              size="small"
              value={clientFilter}
              onChange={(e) => setClientFilter(e.target.value)}
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
              <MenuItem value="All" 
              sx={{ textTransform: 'none' ,
              }}>All</MenuItem>
            </TextField>
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', pr:4,
                    borderRight: 1, borderRightColor:'#eef2f6'  }}>
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
              variant="outlined"
              size="large"
              placeholder="Start typing to search"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '40px', 
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderLeft: 'none'
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Button variant="contained" sx={{ backgroundColor: '#ff9000', color: 'white', ml: 4, mb: 2, textTransform: 'none' }} onClick={handleClickOpen}>
        <AddIcon sx={{ mr: 1 }} />
        Add Event
      </Button>
      <Box sx={{ backgroundColor: 'white', height: 640, p: 2, ml: 4, mr: 4 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
        />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textTransform: 'none' }}>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            fullWidth
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            sx={{ textTransform: 'none' }}
          />
          <TextField
            margin="dense"
            label="Start Date"
            type="datetime-local"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={newEvent.start}
            onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
            sx={{ textTransform: 'none' }}
          />
          <TextField
            margin="dense"
            label="End Date"
            type="datetime-local"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={newEvent.end}
            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
            sx={{ textTransform: 'none' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ textTransform: 'none' }}>Cancel</Button>
          <Button onClick={handleAddEvent} sx={{ textTransform: 'none' }}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EventsPage;
