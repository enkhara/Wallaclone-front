import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import './NotFoundPage.css';

function NotfoundPage() {
	const history = useHistory();
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
                <button 
					className="button_goback"
					onClick={()=> (history.goBack())}
				>{t('page404.GO BACK')}
				</button>
            </div>
        </div>
    );
}

export default NotfoundPage;
