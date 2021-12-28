import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { added, selectFavori, showDetail, showProduct } from '../../redux/eCommerceSlice'
import "./productDetail.css"
const ProductDetails = () => {
    //const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    const cart = useSelector(state => state.ecommerce.cart)
    const detail = useSelector(state => state.ecommerce.detail)
    const favori = useSelector(state => state.ecommerce.favoriCart)

    const dispatch = useDispatch()

    console.log(favori)
    console.log(detail)

    useEffect(() => {
        axios(`https://61c9d67920ac1c0017ed8ec2.mockapi.io/products/${id}`)
            .then((res) => dispatch(showDetail(res.data)))
            .finally(() => setLoading(false))

    }, [id, dispatch])


    const handleClick = (product) => {
        dispatch(added(product))

    }

    const handleFavori = (detail) => {
        dispatch(selectFavori(detail))
    }
    return (
        <div className="detail">

            {
                loading && <div className="loading">Loading...</div>
            }

            {!loading &&


                detail.map(item => (
                    <>
                        <div>
                            <img src={item.avatar} alt="imageAvatar"></img>
                        </div>

                        <div className="productInfo">
                            <div className="productName">{item.productName}</div>
                            <div className="productDescription">{item.productDescription}</div>
                            <div className="price">
                                <div className="productPrice">{item.price}TL</div>
                                <div className="productIndirim">{(item.price - (item.price * 20) / 100).toFixed(2)}TL</div>
                            </div>
                            <div className="detailSepet">
                                <div className="sepet" onClick={() => handleClick(item)}>SEPETE EKLE</div>
                                <div className="detailFavori" onClick={() => handleFavori(item)}>
                                    {
                                        item.favori !== true ? <i className="far fa-heart"></i>
                                            :
                                            <i className="fas fa-heart"></i>
                                    }
                                </div>



                            </div>
                        </div>
                    </>
                ))






            }

        </div>
    )
}

export default ProductDetails
