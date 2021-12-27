import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./contact.css"
const Contacts = () => {
    const [product, setProduct] = useState([])


    useEffect(() => {
        axios("https://61c9d67920ac1c0017ed8ec2.mockapi.io/products").then((res) => setProduct(res.data))

    }, [])

    console.log(product)
    return (
        <div className="contacts">
            <div>
                <img className="addressImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZt2_TO7-mDuBrwp5U2TT_2d9LFo9ATR_Org&usqp=CAU" alt=""></img>
            </div>
            <div>Fevzi Çakmak mah. sok.104 No:1</div>
            <div> İstanbul /Mecidiyeköy</div>
            <div> Tel: 0212 678 84 65</div>
        </div>
    )
}

export default Contacts
