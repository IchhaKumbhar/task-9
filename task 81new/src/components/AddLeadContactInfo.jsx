import * as React from 'react';
import {
  Box, Button, TextField, MenuItem, Typography, Accordion, AccordionSummary, AccordionDetails,
  Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function AddLeadContactInfo() {
  return (
    <Box sx={{ p: 2, maxWidth: 2900, mx: 'auto', backgroundColor: '#f3f4f8', ml: '250px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Add Lead Contact Info
      </Typography>
      <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom color="black">
            Lead Contact Detail
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" color="gray">Salutation</Typography>
              <TextField select fullWidth defaultValue="--" id="salutation">
                <MenuItem value="--">--</MenuItem>
                <MenuItem value="Mr.">Mr.</MenuItem>
                <MenuItem value="Mrs.">Mrs.</MenuItem>
                <MenuItem value="Ms.">Ms.</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" color="gray">Name</Typography>
              <TextField fullWidth placeholder="eg. John Doe" required id="name" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" color="gray">Email</Typography>
              <TextField fullWidth type="email" placeholder="eg. johndoe@gmail.com" id="email" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" color="gray">Lead Source</Typography>
              <TextField select fullWidth defaultValue="--" id="lead-source">
                <MenuItem value="--">--</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" color="gray">Added By</Typography>
              <TextField select fullWidth defaultValue="--" id="added-by">
                <MenuItem value="--">--</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" color="gray">Lead Owner</Typography>
              <TextField select fullWidth defaultValue="--" id="lead-owner">
                <MenuItem value="--">--</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Box>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="black">
              Company Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body1" color="gray">Company Name</Typography>
                <TextField fullWidth placeholder="Acme Corporation" id="company-name" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body1" color="gray">Website</Typography>
                <TextField fullWidth placeholder="/www.example.com" id="website" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body1" color="gray">Mobile</Typography>
                <TextField fullWidth placeholder="e.g. 1234567890" id="mobile" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body1" color="gray">Office Phone Number</Typography>
                <TextField fullWidth id="office-phone" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body1" color="gray">Country</Typography>
                <TextField select fullWidth defaultValue="--" id="country">
                  <MenuItem value="--">--</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body1" color="gray">State</Typography>
                <TextField fullWidth placeholder="California, Rajasthan, Dubai" id="state" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body1" color="gray">City</Typography>
                <TextField fullWidth placeholder="e.g. New York, Jaipur, Dubai" id="city" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body1" color="gray">Postal Code</Typography>
                <TextField fullWidth placeholder="e.g. 90250" id="postal-code" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="gray">Address</Typography>
                <TextField fullWidth placeholder="e.g. 132, My Street, Kingston, New York 12401" multiline rows={4} id="address" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="gray">Industry Type</Typography>
                <TextField select fullWidth defaultValue="--" id="industry-type">
                  <MenuItem value="--">--</MenuItem>
                  <MenuItem value="Medical">Medical</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
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
