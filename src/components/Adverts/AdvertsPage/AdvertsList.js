import React, {useState} from 'react';
import T from 'prop-types';
import Advert from './Advert';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import usePagination from '../../hooks/usePagination';
import { useTranslation } from 'react-i18next';
import { pageSizes } from './pageSizes';


const AdvertsList = ({ adverts }) => {
	
	const [t] = useTranslation('global');
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(3);
	
	const count = Math.ceil(adverts.length / pageSize);

	const [pageNumber, setPageNumber] = useState(1);
	
	const _advertsData = usePagination(adverts, pageSize);

	const handlePageChange = (event, value) => {
		setPageNumber(value);
		_advertsData.jump(value);
	};


	const handlePageSizeChange = (event) => {
		setPageSize(event.target.value);
		setPage(1);
	};
	
	return (
		<section> 
			<Grid container spacing={10}>
				{_advertsData.currentData().map((advert) => (
					<Advert key={advert._id} {...advert} />
				))}

			</Grid>
			<div
				style={{backgroundColor:'yellow', display:'flex', flexDirection:'column', alignItems:'flex-end'}}
			>
				<div>
					{t('adverts.Adverts per Page')}
					<select onChange={handlePageSizeChange} value={pageSize}>
						{pageSizes.map((size) => (
							<option key={size} value={size}>
								{size}
							</option>
						))}
					</select>

				</div>
				 
				<Pagination
					count={count}
					size="large"
					page={pageNumber}
					variant="outlined"
					shape="rounded"
					onChange={handlePageChange}
					color="primary"
				/>
			</div>
				
		
		 
	</section>
	);
};

AdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

export default AdvertsList;
 