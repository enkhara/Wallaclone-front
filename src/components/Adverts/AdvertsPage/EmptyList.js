import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../shared/Button';

const EmptyList = () => (
	<div style={{ textAlign: 'center' }}>
		<p>Be the first Advert!</p>
		{/* <Button as={Link} to="/adverts/new" variant="primary">
        Advert
      </Button> */}
	</div>
);
export default EmptyList;
