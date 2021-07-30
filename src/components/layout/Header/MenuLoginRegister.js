import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MenuLoginRegister = () => {
  const { t, i18n } = useTranslation(['global']);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link
        to={`/login`}
        style={{ color: '#fff', margin: '7px', textDecoration: 'none' }}
      >
        {t('header.Login')}
      </Link>
      <Link to={`/register`} style={{ color: '#fff', textDecoration: 'none' }}>
        {t('header.Register')}
      </Link>
    </div>
  );
};

export default MenuLoginRegister;
