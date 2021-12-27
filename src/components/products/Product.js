import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./product.css";
import {
    Link
} from "react-router-dom";
const Product = () => {
    const [product, setProduct] = useState([])


    useEffect(() => {
        axios("https://61c9d67920ac1c0017ed8ec2.mockapi.io/products").then((res) => setProduct(res.data))

    }, [])

    return (
        <div className="productContainer">

            {
                product.map(item => (
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
                        <div className="banaOzel">
                            <div className="favori"><i className="far fa-heart"></i></div>
                            <div className="favori"><i className="fas fa-heart"></i></div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Product
