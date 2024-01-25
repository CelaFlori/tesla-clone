import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelSImage from '../assets/model-s.jpg'
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from '../assets/tesla-charger.jpg'
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    { title: '405mi', description: 'Range (est.)' },
    { title: '130mph', description: 'Top Speed' },
    { title: '3.1sec', description: '0-60 mph' },
];


export default function ModelSPage() {
    return (
        <div className='container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Model S'
                    description='From $71,090*'
                    backgroundImage={modelSImage}
                    featureItems={featureItems}
                />
            </section>
            <section className='section'>
                <ImageBackgroundNoText
                    backgroundImage={teslaChargerImage}
                />
            </section>
            <section className='section'>
                <ImageGrid
                image1={modelSImage}
                image2={teslaChargerImage}
                text1='Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
                text2='Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.'
                />
            </section>
        </div>
    )
}