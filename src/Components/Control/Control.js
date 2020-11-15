import React from 'react'
import Builder from '../Control/Builder/Builder'


import './Control.css'

const products = [
    {
        id: 1,
        title: 'T-shirt',
        price: 50,
        img: require('../../assets/Tshirt.jpg')
    },
    {
        id: 2,
        title: 'shoes',
        price: 72,
        img: require('../../assets/shoes.jpg')
    },
    {
        id: 3,
        title: 'pwbag',
        price: 92,
        img: require('../../assets/pwbag.jpg')
    },
    {
        id: 4,
        title: 'perfume',
        price: 45,
        img: require('../../assets/perfume.jpg')
    },
    {
        id: 5,
        title: 'mbag',
        price: 67,
        img: require('../../assets/mbag.jpg')
    },
    {
        id: 6,
        title: 'womenbag',
        price: 36,
        img: require('../../assets/womenbag.jpg')
    },

]


const Control = (props) => {
    return (

        <div className="flex-container">
            {products.map((item) => {
                return <Builder
                    key={item.id}
                    title={item.title}
                    photo={item.img}
                    price={item.price}
                    show={() => props.addProduct(item.id, item.title, item.price)}
                />
            })}
        </div>

    )
}

export default Control