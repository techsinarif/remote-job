import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Filters.scss';

const Filters = () => {
  return (
    <div className='filters'>
      <Typography className='filter-title' variant="h6">Filters</Typography>
      <div className='filter-items'>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="category-content"
            id="category-header"
          >
            <Typography>Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
              <FormControlLabel control={<Checkbox />} label="Design" />
              <FormControlLabel control={<Checkbox />} label="Front-End Development" />
              <FormControlLabel control={<Checkbox />} label="Back-End Development" />
              <FormControlLabel control={<Checkbox />} label="Full-Stack Development" />
              <FormControlLabel control={<Checkbox />} label="DevOps" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="job-type-content"
            id="job-type-header"
          >
            <Typography>Job type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
              <FormControlLabel control={<Checkbox />} label="Full-Time" />
              <FormControlLabel control={<Checkbox />} label="Part-Time" />
              <FormControlLabel control={<Checkbox />} label="Contract" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="job-type-content"
            id="job-type-header"
          >
            <Typography>Location</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
              <FormControlLabel control={<Checkbox />} label="Remote" />
              <FormControlLabel control={<Checkbox />} label="USA" />
              <FormControlLabel control={<Checkbox />} label="India" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Filters;