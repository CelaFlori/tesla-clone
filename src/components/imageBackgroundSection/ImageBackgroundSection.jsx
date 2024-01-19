import './ImageBackgroundSection.css';
export default function ImageBackgroundSection({ backgroundImage, header, description }) {
    return(
        <div
            className='image-background'
            style={{ backgroundImage: `url(${backgroundImage})` }}
           >
            <div className='overlay'>
                <div className='top-section'>
                    <h2>{header}</h2>
                    <p>{description}</p>
                </div>
                <div className='bottom-section'>
                    <button>Order Now</button>
                    <button>Demo Drive</button>
                </div>
            </div>
        </div>
    )
}