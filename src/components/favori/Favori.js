import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { added, selectFavori } from '../../redux/eCommerceSlice';
import "./favori.css"
const Favori = () => {
    const favoriCart = useSelector(state => state.ecommerce.favoriCart)
    const dispatch = useDispatch();



    const handleClick = (product) => {
        dispatch(added(product))

    }
    const handleFavori = (product) => {
        dispatch(selectFavori(product))
    }
    return (
        <div className="sepetContainer">
            <div className="sepetProduct">
                {
                    favoriCart.map(item => (
                        <div key={item.id} className="cart">
                            <Link to={`/product/${item.id}`} className="cart">
                                <div className="cartImage"><img className="imageCart" src={item.avatar} alt=""></img></div>
                                <div className="cartInfo">
                                    <div className="cartName">{item.productName}</div>
                                    <div className="cartPrice">{(item.price - (item.price * 20) / 100).toFixed(2)}TL</div>

                                </div>
                            </Link>
                            <div className="deleteCart" onClick={() => handleClick(item)}>SEPETE EKLE</div>
                            <div className="banafavori" onClick={() => handleFavori(item)}>
                                {
                                    item.favori !== true ? <i className="far fa-heart"></i>
                                        :
                                        <i className="fas fa-heart"></i>
                                }

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Favori
