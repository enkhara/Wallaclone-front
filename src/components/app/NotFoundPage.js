import React from 'react';
import { useTranslation } from 'react-i18next';

import './NotFoundPage.css';
import { GoBackButton } from '../shared';

function NotfoundPage() {
	
	const [t] = useTranslation('global');
	return (
        <div className="container">
            <div className="container_img">
                <img src="404.png" alt="404"/>
               <p className="container_404">
                     404
                </p>
            </div>

            <div className="container_error">
                <p className="error">
					{t('page404.PAGE NOT FOUND')}
                </p>
                <GoBackButton
                    styleclassName={'404'}
                >

                    {t('page404.GO BACK')}
                </GoBackButton>
            </div>
        </div>
    );
}

export default NotfoundPage;
