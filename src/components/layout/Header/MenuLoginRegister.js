import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';


const NavLink = styled(Link)`
     
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
    padding: 1rem 0.5rem;
    margin-right: 1rem;
    border-bottom: 3.5px solid transparent;

    
    &:last-of-type {
      margin-right:0;
    }
    &:hover{
      border-bottom: 3.5px solid #ffffff;
    }
`;

const MenuLoginRegister = () => {
  const { t } = useTranslation(['global']);
  return (
    <>
      <NavLink
        to={`/login`}
      >
        {t('header.Login')}
      </NavLink>
      <NavLink 
        to={`/register`}
      >
        {t('header.Register')}
      </NavLink>
    </>
  );
};

export default MenuLoginRegister;
