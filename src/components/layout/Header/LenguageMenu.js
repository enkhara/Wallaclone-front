import React from 'react';
import { useTranslation } from 'react-i18next';
import { CardMedia } from "@material-ui/core";
import styled from 'styled-components';

const CardLenguage  = styled(CardMedia)`
    width: 40px; 
    height: 25px;
    cursor: pointer;
`;
const ContainerLenguage  = styled.section`
    display:flex;
    align-items:space-between;
    justify-content:space-between;
    width: 90px;
`;

const LenguageMenu = () => {

    const { i18n } = useTranslation(['global']);
    function TranslationClick(lang) {
        i18n.changeLanguage(lang);
    }
    
    return (
        <ContainerLenguage>
            <CardLenguage 
                onClick={() => TranslationClick('es')}
                image='/spain.png'
            />
            <CardLenguage 
               onClick={() => TranslationClick('en')}
               image='/united_kingdom.png'               
            />
        </ContainerLenguage>
    );
}

export default LenguageMenu;
