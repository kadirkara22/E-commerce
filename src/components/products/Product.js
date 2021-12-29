import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./product.css";
import {
    Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectFavori, showProduct } from '../../redux/eCommerceSlice';
const Product = () => {

    const [loading, setLoading] = useState(true)

    const favori = useSelector(state => state.ecommerce.favoriCart)
    const items = useSelector(state => state.ecommerce.items)
    const dispatch = useDispatch()

    useEffect(() => {
        axios("https://61c9d67920ac1c0017ed8ec2.mockapi.io/products")
            .then((res) => dispatch(showProduct(res.data)))
            .finally(() => setLoading(false))

    }, [dispatch])

    const handleClick = (product) => {
        dispatch(selectFavori(product))
    }


    return (
        <div className="productContainer">

            {
                loading && <div className="loading">Loading...</div>
            }
            {
                items.map(item => (
                    <div className="cardForm">
                        <Link key={item.id} to={`/product/${item.id}`} className="productCard">
                            <div >
                                <img src={item.avatar} alt={item.productName} className="productImage"></img>
                            </div>
                            <div className="productInfo">
                                <div className="productName">{item.productName}</div>
                                <div className="price">
                                    <div className="productPrice">{item.price}TL</div>
                                    <div className="productIndirim">{(item.price - (item.price * 20) / 100).toFixed(2)}TL</div>
                                </div>

                            </div>

                        </Link>

                        <div className="banaOzel" onClick={() => handleClick(item)}>
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
    )
}

export default Product
