import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import JobList from './JobList';
import Filters from './Filters';
import Contact from './Contact';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='job-list-container'>
        <Box sx={{ flexGrow: 1 }}> 
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <p>Remote Jobs / home text / Filter</p>
            </Grid>
            <Grid item xs={3}>
              <Filters />
            </Grid>
            <Grid item xs={9}>
              <JobList />
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className='contact-container'>
        <Box sx={{ flexGrow: 1 }}> 
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Contact />
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className='copy-rights-container'>
        <Box sx={{ flexGrow: 1 }}> 
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography className='copy-rights' variant="subtitle1">All rights reserved @ 2022 Info Edge (India) Ltd.</Typography> {/* TODO: Update the copyrights info */}
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
};

export default Home;