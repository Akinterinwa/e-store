import React from 'react';
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/328634826/original/92829e8cc9f69492eda5cbddec250df7fc052060/design-3d-clothes-3d-fashion-products-and-fashion-animation.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iYhZU56-vcphSZP7y_ihtB3xWAAE6hnAAA&usqp=CAU" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Woman</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://img.freepik.com/premium-photo/3d-dress-design-with-divergent-waves-from-bottom_763713-5779.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">New Season</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRywjmKOQqojMq7FDONa3NzmApmIOqlfblCaxenJrKrUhu8O_XuKZeF1x4cYYWWYLssyE&usqp=CAU" alt="" />
                    <button>
                        <Link className="link" to="/products/1">men</Link>
                    </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRywjmKOQqojMq7FDONa3NzmApmIOqlfblCaxenJrKrUhu8O_XuKZeF1x4cYYWWYLssyE&usqp=CAU" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Accessories</Link>
                    </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iojWveBrxAx7_Am8PDRDqZDNNPyWlvS2RA&usqp=CAU" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories;