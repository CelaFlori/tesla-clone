import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelXImage from '../assets/model-x.jpg'

const featureItems = [
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
];
export default function ModelXPage() {
    return (
        <div className='container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Model S'
                    description='View inventory'
                    backgroundImage={modelXImage}
                    featureItems={featureItems}
                />
            </section>
            <section></section>
        </div>
    )
}