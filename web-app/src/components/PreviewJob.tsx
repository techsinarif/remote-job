import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import TextEditor from '../utils/components/TextEditor';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';
import './PreviewJob.scss';

const PreviewJob = () => {
  return(
    <div className='preview-job'>
    <Typography variant='h4' className='preview-heading'>Preview job post</Typography>
      <Box sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="caption">POSTED DATE: 03.03.2022</Typography>
            <Typography className='job-title' variant="h5">Senior Designer</Typography>
            <div>
              {/* <Stack direction="row" spacing={1}> */}
                <Chip className='chip-info' label='FULL-TIME' color="success" variant="outlined" />
                <Chip className='chip-info' label="FULL-STACK PROGRAMMING" color="success" variant="outlined" />
                <Chip className='chip-info' label="MOBILE" color="success" variant="outlined" />
                <Chip className='chip-info' label="ANYWHERE IN THE WORLD" color="success" variant="outlined" />
                <Chip className='chip-info' label="MOBILE" color="success" variant="outlined" />
                <Chip className='chip-info' label="FULL-STACK PROGRAMMING" color="success" variant="outlined" />
              {/* </Stack> */}
            </div>
            <div className='preview-editor'>
              <TextEditor />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className='company-info'>
              <Typography variant="h4">Company Name</Typography>
              
              <Typography variant="h6"><span className='comp-hq-icon'><LocationOnIcon /></span> Company HQ</Typography>
              <Typography variant="h6"><span className='comp-web-icon'><LanguageIcon /></span> Company Website</Typography>
              <div className='apply-job'>
                <Button variant="contained" disabled>Apply for this job</Button>
                {/* <Typography variant="h6">View all job openings</Typography> */}
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
};

export default PreviewJob;