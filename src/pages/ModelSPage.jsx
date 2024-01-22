import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelSImage from '../assets/model-s.jpg'
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";

const featureItems = [
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
];


export default function ModelSPage() {
    return (
        <div className='content'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Model S'
                    description='View inventory'
                    backgroundImage={modelSImage}
                    featureItems={featureItems}
                />
            </section>
            <section className='section'>
                <ImageBackgroundNoText
                    backgroundImage={modelSImage}
                />
            </section>
        </div>
    )
}