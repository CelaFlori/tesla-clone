import './Product.css';

export default function Product({ image, title, description, price }) {
    return (
        <div className='product'>
            <img  src={image} alt={title} className='product-image'/>
            <h2 className='product-title'>{title}</h2>
            <p className='product-description'>{description}</p>
            <p className='product-price'>${price}</p>
            <button className='product-button'>Add To Card</button>
        </div>
    );
}