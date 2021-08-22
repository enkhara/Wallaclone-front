import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LinkNewButton  = styled(Link)`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:1px;
  background-color:#fff;
  color:lightblue;
  padding:10px;
  cursor:pointer;
  text-decoration:none;
  
  font-size: 1.1rem;
  font-weight: 700;
  width:240px;
`;
const ButtonNewAdvert = () => {

  const [t]= useTranslation('global');

  return (
    <LinkNewButton 
      to={`/adverts/new`}
    >
      <AddCircleOutlineIcon 
         style={{marginRight:'5px'}}
      />
      {t('header.Add new advert')}
    </LinkNewButton>
  );
};

export default ButtonNewAdvert;
