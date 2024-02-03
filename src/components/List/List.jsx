import React from 'react';
import "./List.scss";
import Card from '../Card/Card';

const List = () => {

    const data = [
        {
            id: 1,
            img: 'https://images.asos-media.com/products/asos-design-long-sleeve-t-shirt-with-crew-neck-in-dark-green/203608353-1-scarab?$n_640w$&wid=513&fit=constrain',
            img2: 'https://cdn.ssactivewear.com/Images/Style/135_fl.jpg',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: 'https://www.max.co.nz/media/catalog/product/T/h/The_Hooded_Wool_Coat_Camel_Campaign_Hero.jpg',
            title: 'Coat',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/4059241/1.jpg?1028',
            title: 'skirt',
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: 'https://contents.mediadecathlon.com/p2551189/0407b0fd1216905899226e576ee433d1/p2551189.jpg?format=auto&quality=70&f=650x0',
            title: 'Hat',
            oldPrice: 19,
            price: 12
        },
    ];


  return (
    <div className='list'>{data?.map(item=> (
        <Card item={item} key={item.id} />
    ))}</div>
  )
}

export default List;