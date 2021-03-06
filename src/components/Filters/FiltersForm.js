import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import { SelectTags } from '../Adverts';
import SelectRange from './SelectRange';
import { useTranslation } from 'react-i18next';
import './FiltersForm.css';


 
const FiltersForm = ({ clickSearch,...props }) => {

  const [t]= useTranslation('global');
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
        className="form_search"
        onSubmit={handleSubmit}
      >
        <Accordion 
          className="accordion"
        >
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
            <h3>{t('filters.Search')}</h3>
          </AccordionSummary>
          <AccordionDetails
            className="container-detail"
            >            
            <div>
              <p>{t('filters.Name')}</p>
              <input
                type="text"
                value={name}     
                name="name"
                onChange={handleChange}
              />
              <p>{t('filters.Tags')}</p>
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
              <p>{t('filters.Price')}</p>
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
                value={t('filters.Search')}
              />
            </div>
          </Accordion>
        </form>
      </section>
    );
}

export default FiltersForm;
