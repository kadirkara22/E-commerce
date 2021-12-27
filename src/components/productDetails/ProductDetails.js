import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./productDetail.css"
const ProductDetails = () => {
    const [product, setProduct] = useState([])

    const { id } = useParams();

    useEffect(() => {
        axios(`https://61c9d67920ac1c0017ed8ec2.mockapi.io/products/${id}`).then((res) => setProduct(res.data))

    }, [id])
    return (
        <div className="detail">
            <div>
                <img src={product.avatar} alt="imageAvatar"></img>
            </div>

            <div className="productInfo">
                <div className="productName">{product.productName}</div>
                <div className="price">
                    <div className="productPrice">{product.price}TL</div>
                    <div className="productIndirim">{(product.price - (product.price * 20) / 100).toFixed(2)}TL</div>
                </div>

            </div>

        </div>
    )
}

export default ProductDetails
