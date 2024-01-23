import Product from "../components/product/Product";
import cybertruckImage from '../assets/cybertruck.jpg'

export default function ShopPage() {
    return (
        <div className='container shop-page'>
                <h1>Products</h1>
            <Product
            image={cybertruckImage}
            title='Product Title'
            description='Product Description'
            price={19.99}
            />
        </div>
    )
}