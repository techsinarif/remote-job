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
import './AboutPosition.scss';

const AboutPosition = () => {
  const [category, setCategory] = React.useState('Design');
  const [isPosAccGlobe, setIsPosAccGlobe] = React.useState('Yes');

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

  const handlePositionChange = (event: any) => {
    console.log('event', event);
    setIsPosAccGlobe(event?.target?.value);
  }

  return (
    <div className='about-position'>
      {/* <h1 className='position-heading'>About the Position</h1> */}
      <Typography variant='h4' className='position-heading'>About the position</Typography>
      <div className='about-position-form-container'>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ margin: '0 0 40px 0' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="job_title"
            label="Job Title"
            name="job_title"
          />
          <FormHelperText>Example: “Senior Designer”. Titles must describe one position.</FormHelperText>
        </Box>
        <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
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
        <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
          <FormControl>
            <FormLabel id="opening-accross-globe">Is this position opening accross the globe?</FormLabel>
            <RadioGroup row
              aria-labelledby="opening-accross-globe"
              defaultValue="Yes"
              name="radio-buttons-group"
              onChange={(event) => {handlePositionChange(event)}}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            <FormHelperText>'Yes' means, candidate can work from anywhere in the world</FormHelperText> {/* TODO: show this info if only yes is selected */}
          </FormControl>
        </Box>
        {
          isPosAccGlobe === 'No' ? (
            <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="country"
                    label="Country"
                    name="country"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                  />
                </Grid>
              </Grid>
            </Box>
          ) : null
        }
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
        </Box>
        <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
          <h3 className='job-description'>Job Description</h3>
          <TextEditor />
        </Box>
      </div>
    </div>
  )
};

export default AboutPosition;