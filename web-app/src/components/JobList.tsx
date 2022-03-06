import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import './JobList.scss';

const JobList = () => {
  return (
    <div className='job-list'>
      <Card className='card'>
        <CardContent>
          <Typography className='company-name' variant="h5">HCL Technologies Pvt Ltd</Typography>
          <Typography className='job-title' variant="h6">Full-Stack Developer</Typography>
          <div className='filter-options'>
              {/* <Stack direction="row" spacing={1}> */}
                <Chip className='chip-info' label='FULL-TIME' color="success" variant="outlined" />
                <Chip className='chip-info' label="FULL-STACK PROGRAMMING" color="success" variant="outlined" />
                <Chip className='chip-info' label="MOBILE" color="success" variant="outlined" />
                <Chip className='chip-info' label="ANYWHERE IN THE WORLD" color="success" variant="outlined" />
                <Chip className='chip-info' label="MOBILE" color="success" variant="outlined" />
                <Chip className='chip-info' label="FULL-STACK PROGRAMMING" color="success" variant="outlined" />
              {/* </Stack> */}
            </div>
          <Typography className='job-desc-short' variant="subtitle1" gutterBottom component="div">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>
        </CardContent>
        <CardActions className='apply-btn'>
          <Button size="small">Apply</Button>
        </CardActions>
      </Card>
      <Card className='card'>
        <CardContent>
          <Typography className='company-name' variant="h5">Company Name</Typography>
          <Typography className='job-title' variant="h6">Senior Designer</Typography>
          <div className='filter-options'>
              {/* <Stack direction="row" spacing={1}> */}
                <Chip className='chip-info' label='FULL-TIME' color="success" variant="outlined" />
                <Chip className='chip-info' label="FULL-STACK PROGRAMMING" color="success" variant="outlined" />
                <Chip className='chip-info' label="MOBILE" color="success" variant="outlined" />
                <Chip className='chip-info' label="ANYWHERE IN THE WORLD" color="success" variant="outlined" />
                <Chip className='chip-info' label="MOBILE" color="success" variant="outlined" />
                <Chip className='chip-info' label="FULL-STACK PROGRAMMING" color="success" variant="outlined" />
              {/* </Stack> */}
            </div>
          <Typography className='job-desc-short' variant="subtitle1" gutterBottom component="div">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>
        </CardContent>
        <CardActions className='apply-btn'>
          <Button size="small">Apply</Button>
        </CardActions>
      </Card>
      <Card className='card'>
        <CardContent>
          <Typography className='company-name' variant="h5">Company Name</Typography>
          <Typography className='job-title' variant="h6">Senior Designer</Typography>
          <div className='filter-options'>
              {/* <Stack direction="row" spacing={1}> */}
                <Chip className='chip-info' label='FULL-TIME' color="success" variant="outlined" />
                <Chip className='chip-info' label="FULL-STACK PROGRAMMING" color="success" variant="outlined" />
                <Chip className='chip-info' label="MOBILE" color="success" variant="outlined" />
                <Chip className='chip-info' label="ANYWHERE IN THE WORLD" color="success" variant="outlined" />
                <Chip className='chip-info' label="MOBILE" color="success" variant="outlined" />
                <Chip className='chip-info' label="FULL-STACK PROGRAMMING" color="success" variant="outlined" />
              {/* </Stack> */}
            </div>
          <Typography className='job-desc-short' variant="subtitle1" gutterBottom component="div">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>
        </CardContent>
        <CardActions className='apply-btn'>
          <Button size="small">Apply</Button>
        </CardActions>
      </Card>
      <Card className='card'>
        <CardContent>
          <Typography className='company-name' variant="h5">Company Name</Typography>
          <Typography className='job-title' variant="h6">Senior Designer</Typography>
          <div className='filter-options'>
              {/* <Stack direction="row" spacing={1}> */}
                <Chip className='chip-info' label='FULL-TIME' color="success" variant="outlined" />
                <Chip className='chip-info' label="FULL-STACK PROGRAMMING" color="success" variant="outlined" />
                <Chip className='chip-info' label="MOBILE" color="success" variant="outlined" />
                <Chip className='chip-info' label="ANYWHERE IN THE WORLD" color="success" variant="outlined" />
                <Chip className='chip-info' label="MOBILE" color="success" variant="outlined" />
                <Chip className='chip-info' label="FULL-STACK PROGRAMMING" color="success" variant="outlined" />
              {/* </Stack> */}
            </div>
          <Typography className='job-desc-short' variant="subtitle1" gutterBottom component="div">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>
        </CardContent>
        <CardActions className='apply-btn'>
          <Button size="small">Apply</Button>
        </CardActions>
      </Card>
    </div>
  )
};

export default JobList;