import './ImageGrid.css';

export default function ImageGrid({image1, image2, text1, text2}) {
    return (
        <div className='grid-container'>
            <div className='grid-item'>
                <img width='100%' height='100%' src={image1} alt='Image 1'/>
            </div>
            <div className='grid-item'>{text1}</div>
            <div className='grid-item'>
                <img width='100%' height='100%' src={image2} alt='Image 2'/>
            </div>
            <div className='grid-item'>{text2}</div>
        </div>
    );
}