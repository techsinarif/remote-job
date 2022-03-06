import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextEditor from '../utils/components/TextEditor';
import './AboutCompany.scss';

const AboutCompany = () => {
  const [category, setCategory] = React.useState('Design');
  const [isPostedbefore, setIsPostedbefore] = React.useState('No');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleJobPosted = (event: any) => {
    setIsPostedbefore(event?.target?.value);
  }

  return (
    <div className='about-position'>
      <Typography variant='h4' className='company-heading'>About the company</Typography>
      <div className='about-position-form-container'>
        <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
          <FormControl>
            <FormLabel id="opening-accross-globe">Job posted before?</FormLabel>
            <RadioGroup row
              aria-labelledby="opening-accross-globe"
              defaultValue="No"
              name="radio-buttons-group"
              onChange={(event) => {handleJobPosted(event)}}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            <FormHelperText>If 'Yes' just enter your email, other details will be filled automatically</FormHelperText> {/* TODO: show this info if only yes is selected */}
          </FormControl>
        </Box>
        {
          isPostedbefore === 'Yes' ? (
            <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="emailId"
                    label="Email Id"
                    name="emailId"
                  />
                </Grid>
              </Grid>
            </Box>
          ) : null
        }
        <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="companyName"
                label="Company Name"
                name="companyName"
              />
              <FormHelperText>Enter your company or organization’s name</FormHelperText>
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="companyHQ"
                label="Company Headquarters"
                name="companyHeadquarters"
              />
              <FormHelperText>Where your company is officially headquartered.</FormHelperText>
            </Grid>
          </Grid>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ margin: '0 0 20px 0' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="companyMission"
            label="Company Mission and Vission"
            name="companyMission"
          />
          <FormHelperText>Enter your company or organization’s mission statement. This will be displayed on your company’s profile.</FormHelperText>
        </Box>
        <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="companyUrl"
                label="Company's Website"
                name="companyUrl"
              />
              <FormHelperText>Example: https://example.com/</FormHelperText>
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="companyEmailId"
                label="Email Id"
                name="companyEmailId"
              />
              <FormHelperText>We’ll send your receipt and confirmation email here.</FormHelperText>
            </Grid>
          </Grid>
        </Box>
        {/* <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={'Design'}>Design</MenuItem>
                  <MenuItem value={'Front-End Development'}>Front-End Development</MenuItem>
                  <MenuItem value={'Back-End Development'}>Back-End Development</MenuItem>
                  <MenuItem value={'Full-Stack Development'}>Full-Stack Development</MenuItem>
                  <MenuItem value={'DevOps'}>DevOps</MenuItem>
                  <MenuItem value={'Others'}>Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Job Type</FormLabel>
                <RadioGroup row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Full-Time"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Full-Time" control={<Radio />} label="Full-Time" />
                  <FormControlLabel value="Part-Time" control={<Radio />} label="Part-Time" />
                  <FormControlLabel value="Contract" control={<Radio />} label="Contract" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '0 0 20px 0' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="application_link"
            label="Application Link or Email"
            name="application_link"
          />
          <FormHelperText>Link to Application page or Email address</FormHelperText>
        </Box> */}
        <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
          <h3 className='job-description'>Company Description</h3>
          <TextEditor />
        </Box>
      </div>
    </div>
  )
};

export default AboutCompany;