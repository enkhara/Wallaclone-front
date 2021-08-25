import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared';
import { useTranslation } from 'react-i18next';

const EmptyList = () => {
  const [t] = useTranslation('global');

  return (
    <div style={{ textAlign: 'center', height:'100vh' }}>
          <p>{t('adverts.Be the first Advert!')} NO DISPONE DE ANUNCIOS PUBLICADOS </p>
          
      <Button as={Link} to="/adverts/new" variant="primary">
        {t('adverts.Advert')}
      </Button>
    </div>
  );
};
export default EmptyList;