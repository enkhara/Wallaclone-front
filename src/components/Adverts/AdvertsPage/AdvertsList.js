import React, {useState} from 'react';
import T from 'prop-types';
import Advert from './Advert';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import usePagination from '../../hooks/usePagination';
import { useTranslation } from 'react-i18next';
import { pageSizes } from './pageSizes';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 130,
		marginBottom:'0.5rem',
		marginTop:'0.5rem',
		 
	},
	selectControl: {
		fontSize:'1.2rem', 
		fontWeight:'700',
		paddingLeft:'0.5rem',
		
	}
  }));


const AdvertsList = ({ adverts }) => {
	const classes = useStyles();

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
				style={{display:'flex', flexDirection:'column', alignItems:'flex-end', marginTop:'2rem'}}
			>
				 
        		<InputLabel style={{fontWeight:'700'}}>{t('adverts.Adverts/Page')}</InputLabel>
				<FormControl className={classes.formControl}>
					<Select
						native
						value={pageSize}
						onChange={handlePageSizeChange}
						className={classes.selectControl}
					>
          				{pageSizes.map((size) => (
							<option key={size} value={size} >
								{size}
							</option>
						))}
           
        			</Select>
      			</FormControl>
				<Pagination
					count={count}
					size="large"
					page={pageNumber}
					variant="outlined"
					shape="rounded"
					onChange={handlePageChange}
					color="secondary"
				/>
			</div>
				
		
		 
	</section>
	);
};

AdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

export default AdvertsList;
 