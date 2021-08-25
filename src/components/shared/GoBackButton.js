import React from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';

const CancelButton = styled.button`
${({ styleclassName }) => styleclassName ==='404' 

? 
css`
    background-color: #0077d8f4;
    color: #ffffff;
    font-weight: 700;
    font-family: sans-serif, 'Gill Sans MT', Calibri, 'Trebuchet MS';
    padding: 0.8em 1em;
    border-radius: 50px;
    width: 100%;
    cursor: pointer;
   `
:
css`
    width: 100%;
    height: 3rem;
    padding: 0.5rem;
    font-size: 1.1rem;
    border-radius: 10px;
    border: 0;
    background: var(--color-secondary);
    color: #fff;
    margin: 1rem 0;
    cursor:pointer;
     

    `
}
`;
const GoBackButton = ({...props }) => {
    const history = useHistory();
    return (
        <CancelButton
            onClick={()=> (history.goBack())}
            {...props}
        />
            
    );
}

export default GoBackButton;
