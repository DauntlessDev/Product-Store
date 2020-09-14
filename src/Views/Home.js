import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequest'


function Home() {
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
    let products = useAxiosGet(url)

    if (products.error) {
        return (
            <div>
                Error 404: Page Not Found
            </div>
        )
    } else if (products.loading) {
        return (
            <div>
                <Loader />
            </div>
        )
    } else if (products.data) {
        return (
            <div>
                <div className="font-bold text-2xl mb-3">Best Sellers</div>
                {
                    products.data.map((product) =>
                        <div key={product.id} >
                            <ProductCard product={product} />
                        </div>
                    )
                }
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}

export default Home
