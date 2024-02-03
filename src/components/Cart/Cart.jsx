import React from 'react';
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.asos-media.com/products/asos-design-long-sleeve-t-shirt-with-crew-neck-in-dark-green/203608353-1-scarab?$n_640w$&wid=513&fit=constrain',
            img2: 'https://cdn.ssactivewear.com/Images/Style/135_fl.jpg',
            title: 'Long Sleeve Graphic T-shirt',
            desc: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: 'https://www.max.co.nz/media/catalog/product/T/h/The_Hooded_Wool_Coat_Camel_Campaign_Hero.jpg',
            title: 'Coat',
            desc: 'Coat',
            isNew: true,
            oldPrice: 19,
            price: 12
        }
    ]

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=> (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$220</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart;