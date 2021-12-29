import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCart } from '../../redux/eCommerceSlice'
import "./sepet.css"
const Sepet = () => {
    const cart = useSelector(state => state.ecommerce.cart)
    const totalPriceCart = useSelector(state => state.ecommerce.totalPriceCart)
    const dispatch = useDispatch();


    const handleClick = (product) => {
        dispatch(deleteCart(product))
    }


    return (
        <div className="sepetContainer">
            <div className="sepetProduct">
                {
                    cart.map(item => (
                        <div key={item.id} className="cart">
                            <Link to={`/product/${item.id}`} className="cart">
                                <div className="cartImage"><img className="imageCart" src={item.avatar} alt=""></img></div>
                                <div className="cartInfo">
                                    <div className="cartName">{item.productName}</div>
                                    <div className="cartPrice">{(item.price - (item.price * 20) / 100).toFixed(2)}TL</div>

                                </div>
                            </Link>
                            <div className="deleteCart" onClick={() => handleClick(item)}>SEPETTEN ÇIKAR</div>
                        </div>
                    ))
                }
                <div className="totalPrice">Toplam Tutar: {(totalPriceCart).toFixed(2)} TL</div>
            </div>
        </div>
    )
}

export default Sepet
