import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './PostInfo.scss';

const PostInfo = () => {
  return (
    <div className='post-info'>
      <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography className='disclaimer-text' variant="h5">Disclaimer</Typography>
            <ul>
              <li>Every 30 days, your listing will be automatically renewed.</li>
              <li>We will remove your job posting after 180 days.</li>
              <li>If you want to keep your job posting after 180 days, send us an email.</li>
              <li>If the position is not filled within 40 days, please contact us via email.</li>
              <li>techsinarif@gmail.com is our e-mail address.</li>
            </ul>
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
        </Grid>
      </Box>
    </div>
  )
};

export default PostInfo;