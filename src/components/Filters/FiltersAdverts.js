import React from 'react';
import AdvertsList from '../Adverts/AdvertsPage/AdvertsList';
import FiltersForm from './FiltersForm';
import { minAndMaxRange } from './minAndMaxRange';
let advertsUser = {};

const FiltersAdverts = ({ adverts, username }) => {
    
    const { min: minPrice, max: maxPrice } = minAndMaxRange(adverts);
    const [filteredAdverts,setFilteredAdverts] = React.useState(adverts);
    const [priceRange,setPriceRange] = React.useState([minPrice, maxPrice]);

    React.useEffect(() => {

        if (username !== undefined) {
        
            setFilteredAdverts(adverts.filter(advert => {
                
                return (advert.userId.username.toLowerCase() === username.toLowerCase());
            
            }));
        }
	}, [username]);

    const filteredRange = selectedRange =>(setPriceRange(selectedRange));
    
    const clickSearch = selectedFilter =>{
        setFilteredAdverts(
            adverts.filter(advert=>{
                const filterByName = advert.name.toLowerCase().includes(selectedFilter.name.toLowerCase())

                let filterByTags = true;
                if (selectedFilter.tags.length > 0) {
                  filterByTags = advert.tags.some((tag) => selectedFilter.tags.indexOf(tag) >-1);
                  
                }

                let filterPrice = 0;
                if(advert.price >= priceRange[0] && advert.price <= priceRange[1]){
                        filterPrice = advert.price;
                }
                
                    
                return filterByTags && filterByName && filterPrice; 
            })
                
        );
            
    }
   
    return (
        <React.Fragment>
            <FiltersForm
                clickSearch={clickSearch}
                filteredRange={filteredRange}
                minPrice={minPrice}
                maxPrice={maxPrice}
            />
            <AdvertsList
                adverts={filteredAdverts}
            />    
            
        </React.Fragment>
    );
}

export default FiltersAdverts;
