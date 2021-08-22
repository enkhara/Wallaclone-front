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


 
const FiltersForm = ({ clickSearch,...props }) => {
  
  const [filters, setFilters] = React.useState({
      name:'',
      tags:[],
  });

  const { name, tags } = filters;

  const handleChange = (event) => {
    setFilters((oldAdvert) => ({
      ...oldAdvert,
      [event.target.name]:
        event.target.type === 'checked'
          ? event.target.checked
          : event.target.value,
    }));
  };

  const handleSubmit = ev =>{
    ev.preventDefault();
    clickSearch(filters);

  }

  return (

    <section>
      <form
        onSubmit={handleSubmit}
      >
        <Accordion 
          className="accordion"
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
              <div style={{paddingLeft:'0.5rem'}}>
                <SelectRange
                  {...props}
                />

              </div>
            </div>
            </AccordionDetails>
            <div className="button">
              <input
                type="submit"
                className="button-search"
                value="Search"
              />
            </div>
          </Accordion>
        </form>
      </section>
    );
}

export default FiltersForm;
