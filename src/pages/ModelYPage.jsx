import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import ModelYImage from '../assets/model-y.jpg'
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from '../assets/tesla-charger.jpg'
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    { title: '260mi', description: 'Range (EPA est.)' },
    { title: '135mph', description: 'Top Speed' },
    { title: '6.6sec', description: '0-60 mph'},
];


export default function ModelYPage() {
    return (
        <div className='container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Model Y'
                    description='Lease starting at $379/mo*'
                    backgroundImage={ModelYImage}
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
                    image1={ModelYImage}
                    image2={teslaChargerImage}
                    text1='Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
                    text2='Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.'
                />
            </section>
        </div>
    )
}