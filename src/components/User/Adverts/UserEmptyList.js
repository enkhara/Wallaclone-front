import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared';
import { useTranslation } from 'react-i18next';

const EmptyList = (...props) => {
  const [t] = useTranslation('global');

  if (props.favs) {
    return (
      <div style={{ textAlign: 'center', height: '100vh' }}>
      
        <p> {t('adverts.In this list you can see all the products that you have saved as favorites')} </p>
          
      </div>)
  }
  else {
    return (
      <div style={{ textAlign: 'center', height: '100vh' }}>
        <p> {t('adverts.Be the first Advert!')} </p>
          
        <Button as={Link} to="/adverts/new" variant="primary">
          {t('adverts.Advert')}
        </Button>
      
      </div>
    )
  }
};
  
export default EmptyList;