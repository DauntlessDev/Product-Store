import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequest'

function Product() {
    const { id } = useParams()
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    let product = useAxiosGet(url)

    if (product.error) {
        return (
            <div>
                Error 404: Page Not Found
            </div>
        )
    } else if (product.loading) {
        return (
            <div>
                <Loader />
            </div>
        )
    }
    else if (product.data) {
        return (
            <div>
                <h1 className="font-bold text-2x1 mb-3"> {product.data.name}</h1>
                <div>
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name} />
                </div>
                <h1 className="font-bold text-2x1 mb-3"> $ {product.data.price}</h1>
                <div>
                    {product.data.description}
                </div>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}


export default Product
