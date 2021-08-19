import React from 'react';
import { SelectRange } from '../shared';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField
} from '@material-ui/core';

const Search = () => {
    return (
      <section style={{margin:'2rem 0'}}>
        <form>
          <Accordion 
            style={{
                width:'50%', 
                margin:'0 auto',
            }}
          >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
          >
                <h3 style={{margin:0}} >Search</h3>
              </AccordionSummary>
              <AccordionDetails>
                
                  <div 
                    style={{
                      width:'100%', 
                      display:'flex',
                      flexDirection:'column',
                      alignItem:'center', 
                      justifyContent:'flex-start',
                      padding:'0 2rem',
                      marginBotton:'4rem'
                      }}
                    >
                    <TextField
                      placeholder="Name"
                      variant="outlined"
                    />
                    <p>Price</p>
                    <SelectRange
                      style={{width:'100%', marginLeft:'4px'}}
                     
                    />
                  </div>
                
            </AccordionDetails>
          </Accordion>
        </form>
      </section>
    );
}

export default Search;
