import React from 'react';
import { useStyles } from './searchCSS';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './FiltersAdverts.css';

const FiltersAdverts = () => {
    const classes = useStyles();
    return (
        <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.containerSearch}
        >
          <div className={classes.heading}>Search</div>
        </AccordionSummary>
        <AccordionDetails>
            <form
                        // onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                            // value={name}
                            // onChange={handleChange}
                />
                        
                        <div className="battery-level">
                        
                            <p>Battery Level</p>
                            <input 
                                type="checkbox" id="low-battery" 
                                name="low-battery" 
                                value="low-battery"
                                // onChange={handleChangeChecked}
                            />
                            <label htmlFor="low-battery"> {'< 25%'}</label>
                            <input 
                                type="checkbox" 
                                id="medium-battery" 
                                name="medium-battery" 
                                value="medium-battery" 
                                // onChange={handleChangeChecked}
                            />
                            <label htmlFor="medium-battery"> 25% - 50% </label>
                            <input 
                                type="checkbox" 
                                id="high-battery" 
                                name="high-battery" 
                                value="high-battery" 
                                // onChange={handleChangeChecked}
                            />
                            <label htmlFor="high-battery"> {'> 50%'} </label>
                        </div>
                            <p>Range</p>
                            {/* <SelectRange
                                {...props}
                            /> */}

                        <input
                            type="submit"
                            className="button-search"
                            value="Search"
                        />
                    </form>
            

        </AccordionDetails>
      </Accordion>
    );
}

export default FiltersAdverts;


<div className="container-form">

{/* <TreeView style={{ marginTop:'15px'}}>
    <TreeItem nodeId="1" label="Filter">
        <TreeItem nodeId="2" label="Options">
            
            <TreeItem nodeId="3" 
                style={{ paddingTop:'5px'}}         
            />
               
                    <form
                        onSubmit={handleSubmit}
                    >
                        <input 
                            type="text" 
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                        
                        <div className="battery-level">
                        
                            <p>Battery Level</p>
                            <input 
                                type="checkbox" id="low-battery" 
                                name="low-battery" 
                                value="low-battery"
                                onChange={handleChangeChecked}
                            />
                            <label htmlFor="low-battery"> {'< 25%'}</label>
                            <input 
                                type="checkbox" 
                                id="medium-battery" 
                                name="medium-battery" 
                                value="medium-battery" 
                                onChange={handleChangeChecked}
                            />
                            <label htmlFor="medium-battery"> 25% - 50% </label>
                            <input 
                                type="checkbox" 
                                id="high-battery" 
                                name="high-battery" 
                                value="high-battery" 
                                onChange={handleChangeChecked}
                            />
                            <label htmlFor="high-battery"> {'> 50%'} </label>
                        </div>
                            <p>Range</p>
                            <SelectRange
                                {...props}
                            />

                        <input
                            type="submit"
                            className="button-search"
                            value="Search"
                        />
                    </form>
            
                    
            </TreeItem>
                            
    </TreeItem>           
   

</TreeView> */}



</div>