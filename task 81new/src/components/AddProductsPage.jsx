import * as React from 'react';
import {
  Box, Button, TextField, MenuItem, Typography, Grid, Checkbox, FormControlLabel, Tooltip, IconButton, Avatar, InputBase
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function AddLeadContactInfo() {
  const today = new Date().toISOString().split('T')[0]; 

  return (
    <Box sx={{ p: 2, maxWidth: 2900, mx: 'auto', backgroundColor: '#f3f4f8', ml: '250px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" >
        Add Products
      </Typography>
      <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 1 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom color="black" >
            Add Products
          </Typography>
          <Box sx={{ borderBottom: '1px solid #f3f4f8', ml: 0, mb: 2 }}></Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" color="gray" my={2} sx={{ fontSize: '16px' }}>Name <span style={{ color: '#984a55', fontSize: 'small' }}>*</span></Typography>
              <TextField fullWidth placeholder="e.g. Web Hosting. Laptop. Notebook, Mobile App etc." required id="task" sx={{ 
                      '& fieldset': { 
                        borderColor: '#efeff1',
                        height: '90%'
                      } 
                    }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" color="gray" my={2} sx={{ fontSize: '16px' }}>Price <span style={{ color: '#984a55', fontSize: 'small' }}>*</span></Typography>
              <TextField fullWidth placeholder="0" required id="price" sx={{ 
                      fontSize: '16px', 
                      '& fieldset': { 
                        borderColor: '#efeff1',
                        height: '90%'
                      } 
                    }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" color="gray" my={2} sx={{ fontSize: '16px' }}>Product Category</Typography>
              <Grid container>
                <Grid item xs={10}>
                  <TextField 
                    select 
                    fullWidth 
                    defaultValue="--" 
                    id="product-category" 
                    sx={{ 
                      fontSize: '16px', 
                      '& fieldset': { 
                        borderRadius: '5px 0 0 5px',
                        borderColor: '#efeff1',
                        height: '90%'
                      } 
                    }}
                  >
                    <MenuItem value="--" sx={{ fontSize: '16px' }}>--</MenuItem>
                    <MenuItem value="Task 1" sx={{ fontSize: '16px' }}>Type 1</MenuItem>
                    <MenuItem value="Task 2" sx={{ fontSize: '16px' }}>Type 2</MenuItem>
                    <MenuItem value="Task 3" sx={{ fontSize: '16px' }}>Type 3</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    variant="outlined"
                    sx={{ height: '81%', borderRadius: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5, color: 'gray', textTransform: 'none', borderColor:'#efeff1', fontSize: '16px' }}
                    aria-label="Add Task Category"
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" color="gray" my={2} sx={{ fontSize: '16px' }}>Product Sub Category</Typography>
              <Grid container>
                <Grid item xs={10}>
                  <TextField 
                    select 
                    fullWidth 
                    defaultValue="--" 
                    id="product-sub-category" 
                    sx={{ 
                      fontSize: '16px', 
                      '& fieldset': { 
                        borderRadius: '5px 0 0 5px',
                        borderColor: '#efeff1',
                        height: '90%'
                      } 
                    }}
                  >
                    <MenuItem value="--" sx={{ fontSize: '16px' }}>--</MenuItem>
                    <MenuItem value="Task 1" sx={{ fontSize: '16px' }}>Type 1</MenuItem>
                    <MenuItem value="Task 2" sx={{ fontSize: '16px' }}>Type 2</MenuItem>
                    <MenuItem value="Task 3" sx={{ fontSize: '16px' }}>Type 3</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    variant="outlined"
                    sx={{ height: '81%', borderRadius: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5, color: 'gray', textTransform: 'none', borderColor:'#efeff1', fontSize: '16px' }}
                    aria-label="Add Task Category">
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" color="gray" my={2} sx={{ fontSize: '16px' }}>Tax</Typography>
              <Grid container>
                <Grid item xs={10}>
                  <TextField 
                    select 
                    fullWidth 
                    defaultValue="Nothing Selected" 
                    id="tax" 
                    sx={{ 
                      fontSize: '16px', 
                      '& fieldset': { 
                        borderRadius: '5px 0 0 5px',
                        borderColor: '#efeff1',
                        height: '90%'
                      } 
                    }}
                  >
                    <MenuItem value="Nothing Selected" sx={{ fontSize: '16px' }}>Nothing Selected</MenuItem>
                    <MenuItem value="GST" sx={{ fontSize: '16px' }}>GST</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    variant="outlined"
                    sx={{ height: '81%', borderRadius: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5, color: 'gray', textTransform: 'none', borderColor:'#efeff1', fontSize: '16px' }}
                    aria-label="Add Task Category">
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" color="gray" my={2} sx={{ fontSize: '16px' }}>Hsn/Sac</Typography>
              <TextField fullWidth placeholder="e.g. 995431" required id="hsn-sac" sx={{ 
                      fontSize: '16px', 
                      '& fieldset': { 
                        borderColor: '#efeff1',
                        height: '90%'
                      } 
                    }} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" color="gray" my={2} sx={{ fontSize: '16px' }}>Unit Type</Typography>
              <TextField 
                select 
                fullWidth 
                defaultValue="--" 
                id="unit-type" 
                sx={{ 
                  fontSize: '16px', 
                  '& fieldset': { 
                    borderColor: '#efeff1',
                        height: '90%'
                  } 
                }}
              >
                <MenuItem value="Pcs" sx={{ fontSize: '16px' }}>
                  Pcs
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={3} mt={5} color={'gray'}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Client can Purchase"
                sx={{ fontSize: '16px' }}
              />
            </Grid>
            <Grid item xs={12} sm={3} mt={5} ml={15} color={'gray'}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Downloadable"
                sx={{ fontSize: '16px' }}
              />
              <HelpOutlineIcon sx={{ fontSize: 14, ml: 1, color: 'gray' }} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="gray" my={2} sx={{ fontSize: '16px' }}>SKU </Typography>
             <TextField
                fullWidth
                placeholder="Write the product's sku here"
                required
                id="sku"
                sx={{
                  fontSize: '16px',
                    '& fieldset': {
                      borderColor: '#efeff1',
                      height: '90%',
                    },
                    maxWidth: '375px', 
                }}
              />
          </Grid>
          <Typography variant="body2" color="gray" mt={6} sx={{ fontSize: '16px' }}>
            Description
          </Typography>
          <Box display="flex" flexDirection="column" mt={1}>
            <TextField
              fullWidth
              multiline
              rows={4}
              InputProps={{ sx: { height: 100 } }}
              sx={{ 
                fontSize: '16px', 
                '& fieldset': { 
                  borderColor: '#efeff1'
                } 
              }}
            />
          </Box>
          <Typography variant="body1" color="gray" my={2} sx={{ fontSize: '16px' }}>
            Add File
          </Typography>
          <Box
            sx={{
                p: 2,
              border: '1px solid #efeff1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
              borderRadius: 1
            }}
          >
            <Typography variant="body1" color="gray" sx={{ textAlign: 'center', fontSize: '16px' }}>
              Choose a file
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', gap: 1}}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#ff8300', color: 'white', '&:hover': { backgroundColor: '#ff8300' }, fontSize: '16px' }}
            startIcon={<SaveIcon />}
            aria-label="Save"
          >
            Save
          </Button>
          <Button
            variant="outlined"
            sx={{ color: 'black', border: '1px solid black', fontSize: '16px' }}
            startIcon={<DoneAllIcon />}
            aria-label="Save & Add More"
          >
            Save & Add More
          </Button>
          <Button
            variant="text"
            sx={{ color: 'black', fontSize: '16px' }}
            aria-label="Cancel"
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
