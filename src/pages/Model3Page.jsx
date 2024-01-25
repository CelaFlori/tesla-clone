import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import model3Image from '../assets/model-3.jpg'
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from '../assets/tesla-charger.jpg'
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    { title: '15 min', description: 'Recharge up to 175 miles†' },
    { title: '341 mi', description: 'Range (EPA est.)' },
    { title: 'AWD', description: 'Dual Motor' },
];
export default function Model3Page() {
    return (
        <div className=' container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Model 3'
                    description='Lease starting at $329/mo*'
                    backgroundImage={model3Image}
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
                    image1={model3Image}
                    image2={teslaChargerImage}
                    text1='Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
                    text2='Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.'
                />
            </section>
        </div>
    )
}