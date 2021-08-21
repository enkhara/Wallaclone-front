import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField
} from '@material-ui/core';
import { SelectTags } from '../Adverts';
import SelectRange from './SelectRange';
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
      <form
        
      >
        <Accordion 
          style={{width:'40%'}}
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
              <p>Name</p>
              <input
                type="text"
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
              <p>Price</p>
                <SelectRange

                />

            </div>
                
            </AccordionDetails>
          </Accordion>
        </form>
      </section>
    );
}

export default FiltersForm;
