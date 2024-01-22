import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelXImage from '../assets/model-x.jpg'
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from '../assets/tesla-charger.jpg'

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
                    header='Model X'
                    description='View inventory'
                    backgroundImage={modelXImage}
                    featureItems={featureItems}
                />
            </section>
            <section className='section'>
                <ImageBackgroundNoText
                backgroundImage={teslaChargerImage}
                />
            </section>
        </div>
    )
}