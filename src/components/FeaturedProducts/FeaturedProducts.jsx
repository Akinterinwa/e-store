import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';


const FeaturedProducts = ({ type }) => {

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
        <div className='featuredProducts'>

            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint fugiat, eum voluptatum voluptatem magni saepe consequatur ipsum modi consectetur eius nisi accusamus ad aliquid deserunt. Ut provident
                    aliquid ipsa consectetur.</p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts