import React from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField
} from '@material-ui/core';
import { SelectTags } from '../Adverts';


const AccordionDetailsContainer  = styled(AccordionDetails)`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const InputText = styled.input`
  width: 100%;
  border: 2px solid lightblue;
  border-radius:4px;
  font-size:1.2rem;
  outline:none;
  padding: 0.8rem;
  box-sizing:borderBox;
  transition:.3s;
  
  &:focus{
    border-color:dodgerBlue;
    box-shadow:0 0 8px 0 dodgerBlue;
  }
`;

const FiltersForm = () => {
    return (
      <section style={{margin:'2rem 0'}}>
        <form>
          <Accordion 
            style={{width:'50%', margin:'0 auto'}}
          >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
          >
                <h3 style={{margin:0}} >Search</h3>
              </AccordionSummary>
              <AccordionDetailsContainer>
                
                  <div>
                    <InputText
                      type="text"
                      placeholder="Name"
                       
                    />
                    <p>Price</p>
                    {/* <SelectTags
                      multiple
                      name="tags"
                      value={tags}
                      onChange={handleChange}
                    /> */}
                  </div>
                
            </AccordionDetailsContainer>
          </Accordion>
        </form>
      </section>
    );
}

export default FiltersForm;
