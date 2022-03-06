import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Contact.scss';

const Contact = () => {

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <div className='contact'>
      <Typography className='contact-title' variant="h6">Contact Us</Typography>
      <Typography className='contact-sub-title' variant="subtitle1">We will get back to you asap! </Typography>
      <Box component="form" onSubmit={(e: any) => {handleSubmit(e)}} sx={{ flexGrow: 1, margin: '0 0 20px 0' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
            />
          </Grid>
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
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              multiline={true}
              minRows={7}
              id="message"
              label="Message"
              name="message"
            />
          </Grid>
          <Grid item xs={12} className='submit-btn'>
            <Button variant="contained" type='submit'>Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
};

export default Contact;