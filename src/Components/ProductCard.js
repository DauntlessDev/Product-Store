import React from 'react'
import { Link } from 'react-router-dom'
function ProductCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">

            <div
                style={{
                    'backgroundImage': `url('${props.product.images[0].imageUrl}')`,
                }}
                className="w-full h-64 bg-blue bg-cover"
            >
            </div>
            <div className="p-4 font-bold text-xl">
                {props.product.name}
            </div>
            <div className="p-4 font-bold text-xl">
                {props.product.price}
            </div>
            <div className="px-4 pb-4">
                {props.product.description}
            </div>

            <Link to={`/products/${props.product.id}`}>
                <div className="bg-blue-500 text-white p-2 flex justify-center">
                    View
                </div>
            </Link>
        </div>
    )
}

export default ProductCard