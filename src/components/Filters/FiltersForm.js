import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField
} from '@material-ui/core';
import { SelectTags } from '../Adverts';
import './FiltersForm.css';


 
const FiltersForm = () => {
  
  const [filter, setFilter] = React.useState({
      name:'',
      tags:[],
  });

  const { name, tags } = filter;

  const handleChange = (event) => {
    setFilter((oldAdvert) => ({
      ...oldAdvert,
      [event.target.name]:
        event.target.type === 'checked'
          ? event.target.checked
          : event.target.value,
    }));
  };

  return (
    <section>
      <form>
        <Accordion 
          style={{width:'50%', margin:'0 auto'}}
        >
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
            <h3>Search</h3>
          </AccordionSummary>
          <AccordionDetails
            className="container-detail"
          >            
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}     
                name="name"
                onChange={handleChange}

              />
              <p>Tags</p>
              <div 
                className="tags"
              >
                <SelectTags
                  multiple
                  name="tags"
                  value={tags}
                  onChange={handleChange}
                />
              </div>
            </div>
                
            </AccordionDetails>
          </Accordion>
        </form>
      </section>
    );
}

export default FiltersForm;
