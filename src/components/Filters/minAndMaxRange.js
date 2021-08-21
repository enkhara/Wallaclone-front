export const minAndMaxRange = adverts=>{
    let max=adverts[0].price;
    let min=max;
    adverts.forEach(advert => {
        if(advert.price > max){
            max=advert.price;
        }
        if(advert.price < min){
            min=advert.price;
        }
        
    });
    return{ min, max }

}
