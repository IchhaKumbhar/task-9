import * as React from 'react';
import {
  Box, Button, TextField, MenuItem, Typography, Accordion, AccordionSummary, AccordionDetails,
  Grid, Checkbox, FormControlLabel, Tooltip, IconButton, Avatar, InputBase
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LinkIcon from '@mui/icons-material/Link';

export default function AddLeadContactInfo() {
  const today = new Date().toISOString().split('T')[0]; 

  return (
    <Box sx={{ p: 2, maxWidth: 2900, mx: 'auto', backgroundColor: '#f3f4f8', ml: '250px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Add Task
      </Typography>
      <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom color="black">
            Task Info
          </Typography>
          <Box sx={{ borderBottom: '1px solid #f3f4f8', ml: 0, mb: 2 }}></Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="gray">Title <span style={{ color: '#984a55', fontSize: 'small' }}>*</span></Typography>
              <TextField fullWidth placeholder="Enter a task title" required id="task" 
              sx={{
                '& fieldset': { 
                  borderColor: '#efeff1',
                  maxHeight: '90%'
                } 
              }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="gray">Task Category</Typography>
              <Grid container>
                <Grid item xs={9}>
                  <TextField select fullWidth defaultValue="--" id="task-category" 
                  sx={{
                    '& fieldset': { 
                      borderRadius: '5px 0 0 5px',
                      borderColor: '#efeff1',
                      maxHeight: '90%'
                    } 
                  }}
                  >
                    <MenuItem value="--">--</MenuItem>
                    <MenuItem value="Task 1">Task 1</MenuItem>
                    <MenuItem value="Task 2">Task 2</MenuItem>
                    <MenuItem value="Task 3">Task 3</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="outlined"
                    sx={{ height: '81%', borderRadius: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5, color: 'gray', textTransform: 'none', borderColor:'#efeff1' }}
                    aria-label="Add Task Category"
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="gray">
                Project
                <Tooltip title="Project information">
                  <HelpOutlineIcon sx={{ fontSize: 14, ml: 1, color: 'gray' }} />
                </Tooltip>
              </Typography>
              <TextField select fullWidth defaultValue="--" id="project"
              sx={{
                '& fieldset': { 
                  borderColor: '#efeff1',
                  maxHeight: '90%'
                } 
              }}
              >
                <MenuItem value="--">--</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} mt={2}>
              <Typography variant="body2" color="gray">
                Start Date <span style={{ color: '#984a55', fontSize: 'small' }}>*</span>
              </Typography>
              <TextField type="date" fullWidth defaultValue={today} required id="start-date" 
              sx={{
                '& fieldset': { 
                  borderColor: '#efeff1',
                  maxHeight: '90%'
                } 
              }}
              />
            </Grid>
            <Grid item xs={12} sm={3} mt={2}>
              <Typography variant="body2" color="gray">
                Due Date <span style={{ color: '#984a55', fontSize: 'small' }}>*</span>
              </Typography>
              <TextField type="date" fullWidth defaultValue={today} required id="due-date" 
              sx={{
                '& fieldset': { 
                  borderColor: '#efeff1',
                  maxHeight: '90%'
                } 
              }}
              />
            </Grid>
            <Grid item xs={12} sm={3} mt={5} color={'gray'}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Without Due Date"
              />
            </Grid>
          </Grid>
          <Typography variant="body2" color="gray" mt={2}>
            Assigned To
          </Typography>
          <Box display="flex" alignItems="center" mt={1} >
            <Avatar alt="User 1" src="user1.jpg" sx={{ height: '43px', border: '1px solid #efeff1', borderRadius: '5px 0 0 5px' }} />
            <InputBase fullWidth sx={{ border: '1px solid #efeff1', p: 0.5 }}></InputBase>
            <Avatar alt="User 2" src="user2.jpg" sx={{ height: '43px', border: '1px solid #efeff1', borderRadius: '0' }} />
            <Button
              variant="outlined"
              sx={{ height: '43px', borderColor: '#efeff1', color: 'gray', textTransform: 'none', borderRadius: '0 5px 5px 0'}}
              aria-label="Add User">
              Add
            </Button>
          </Box>
          <Typography variant="body2" color="gray" mt={2}>
            Description
          </Typography>
          <Box display="flex" flexDirection="column" mt={1}>
            <Box display="flex" gap={1} sx={{ border: '1px solid #efeff1', borderRadius: '5px 5px 0  0', p: 1 }}>
              <Typography sx={{mt: 1}}>
                Normal
              </Typography>
              <IconButton>
                <FormatBoldIcon />
              </IconButton>
              <IconButton>
                <FormatItalicIcon />
              </IconButton>
              <IconButton>
                <FormatUnderlinedIcon />
              </IconButton>
              <IconButton>
                <StrikethroughSIcon />
              </IconButton>
              <IconButton>
                <FormatListBulletedIcon />
              </IconButton>
              <IconButton>
                <FormatListNumberedIcon />
              </IconButton>
              <IconButton>
                <InsertPhotoIcon />
              </IconButton>
              <IconButton>
                <LinkIcon />
              </IconButton>
            </Box>
            <TextField
              fullWidth
              multiline
              rows={4}
              InputProps={{ 
                sx: { 
                  height: 100,
                  '& fieldset': { 
                    borderRadius: '0 0 5px 5px',
                    borderColor: '#efeff1'
                  } 
                 } 
              }}
            />
          </Box>
        </Box>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="black">
              Other Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1" color="gray">Label</Typography>
                <Grid container spacing={0} >
                  <Grid item xs={9}>
                    <TextField select fullWidth defaultValue="--" id="label"
                    sx={{
                      '& fieldset': { 
                        borderRadius: '5px 0 0 5px',
                        borderColor: '#efeff1',
                  maxHeight: '90%'
                      } 
                    }}
                    >
                      <MenuItem value="--">Nothing Selected</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="outlined"
                      sx={{ height: '81%', borderRadius: 1, color: 'gray', borderColor: '#efeff1', textTransform: 'none' }}
                      aria-label="Add Label"
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={10} sm={6} md={4}>
                <Typography variant="body1" color="gray">Milestones</Typography>
                <TextField select fullWidth defaultValue="--" id="milestones"
                sx={{
                  '& fieldset': { 
                    borderColor: '#efeff1',
                    maxHeight: '90%'
                  } 
                }}
                >
                  <MenuItem value="--">--</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3} ml={5}>
                <Typography variant="body1" color="gray">Status</Typography>
                <TextField select fullWidth defaultValue="Incomplete" id="status"
                sx={{
                  '& fieldset': { 
                    borderColor: '#efeff1',
                    maxHeight: '90%'
                  } 
                }}
                >
                  <MenuItem value="Incomplete">
                    <span style={{ color: '#dc0006', marginRight: '4px' }}>⬤</span>Incomplete
                  </MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3} mt={2}>
                <Typography variant="body1" color="gray">Priority</Typography>
                <TextField select fullWidth defaultValue="Medium" id="priority"
                sx={{
                  '& fieldset': { 
                    borderColor: '#efeff1',
                  maxHeight: '90%'
                  } 
                }}
                >
                  <MenuItem value="Medium">
                    <span style={{ color: '#f3c301', marginRight: '4px' }}>⬤</span>Medium
                  </MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} mt={3} color={'gray'}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Make Private"
                />
                <HelpOutlineIcon sx={{ fontSize: 14, color: 'gray' }} />
              </Grid>
              <Grid item xs={12} sm={3} mt={3} color={'gray'}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Billable"
                />
                <HelpOutlineIcon sx={{ fontSize: 14, color: 'gray' }} />
              </Grid>
              <Grid item xs={12} sm={3} mt={3} color={'gray'}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Time Estimate"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} mt={3} color={'gray'}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Repeat"
                />
              </Grid>
              <Grid item xs={12} sm={3} mt={3} color={'gray'} ml={35.7}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Task is dependent on another task"
                />
              </Grid>
            </Grid>
          </AccordionDetails>
          <Typography variant="body1" color="gray" ml={2}>
            Add File
          </Typography>
          <Box
            sx={{
              ml: 2,
              p: 2,
              border: '1px solid #efeff1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
              borderRadius: 1,
              m: 2  
            }}
          >
            <Typography variant="body1" color="gray" sx={{ textAlign: 'center'}}>
              Choose a file
            </Typography>
          </Box>
        </Accordion>

        <Box sx={{ mt: 2, display: 'flex', gap: 1}}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#ff8300', color: 'white', '&:hover': { backgroundColor: '#ff8300' } }}
            startIcon={<SaveIcon />}
            aria-label="Save"
          >
            Save
          </Button>
          <Button
            variant="outlined"
            sx={{ color: 'black', border: '1px solid black' }}
            startIcon={<DoneAllIcon />}
            aria-label="Save & Add More"
          >
            Save & Add More
          </Button>
          <Button
            variant="text"
            sx={{ color: 'black' }}
            aria-label="Cancel"
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
