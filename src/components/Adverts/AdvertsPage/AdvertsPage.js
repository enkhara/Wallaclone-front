import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../layout';
import { getAdverts } from '../../../store/selectors';
import { advertsLoadAction } from '../../../store/actions';
import EmptyList from './EmptyList';
import AdvertsList from './AdvertsList';
import Pagination from "@material-ui/lab/Pagination";

const AdvertsPage = () => {	
	const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);
	
	// paginación
	// const [limit, setLimit] = useState(9);
    // const [skip, setSkip] = useState(0);
	
	// const nextPage = () => {
	// 	setSkip(skip + limit)
	// }

	// const previousPage = () => {
	// 	setSkip(skip - limit)
	// }
	const [searchTitle, setSearchTitle] = useState("");
	const [page, setPage] = useState(1);
	//const [count, setCount] = useState(0);
	const [pageSize, setPageSize] = useState(3);

	const pageSizes = [3, 6, 9, 12, 15, 18];
	const count = Math.ceil(adverts.length / pageSize);

	const onChangeSearchTitle = (e) => {
		const searchTitle = e.target.value;
		setSearchTitle(searchTitle);
	};
 
	const getRequestParams = (searchTitle, page, pageSize) => {
		let params = {};
	
		if (searchTitle) {
		  params["title"] = searchTitle;
		}
	
		if (page) {
		  params["page"] = page - 1;
		}
	
		if (pageSize) {
		  params["size"] = pageSize;
		}
	
		return params;
	  };

	useEffect(() => {
		//const filterinicial = ''; // traemos todos los anuncios del back
		dispatch(advertsLoadAction()); //filterinicial, limit, skip));
		
  	}, [dispatch, page, pageSize]);

	const handlePageChange = (event, value) => {
		setPage(value);
	};

	const handlePageSizeChange = (event) => {
		setPageSize(event.target.value);
		setPage(1);
	  };

	return(
		<React.Fragment>			
			<Header />
			

			<div className="col-md-6">
        		<h4>Adverts List</h4>
				<div>Nº de páginas: {count} </div>
				<div className="mt-3">
					{"Adverts per Page: "}
					<select onChange={handlePageSizeChange} value={pageSize}>
						{pageSizes.map((size) => (
						<option key={size} value={size}>
							{size}
						</option>
						))}
					</select>
					
					{/* <Pagination
						className="my-3"
						count={count}
						page={page}
						siblingCount={1}
						boundaryCount={1}
						variant="outlined"
								shape="rounded"
								color="primary"
						onChange={handlePageChange}
					/> */}
        		</div>
			</div>		
				{adverts.length 
				? 
					<AdvertsList 
					adverts={adverts}
					count={count}
					page={page}
					pageSize={pageSize}
					/> 
				: 	
					<EmptyList/>
				}
				{/* <Pagination
					count={count}
					size="large"
					page={page}
					variant="outlined"
					shape="rounded"
					onChange={handlePageChange}
				/> */}
		</React.Fragment>
	)
};

export default AdvertsPage;
