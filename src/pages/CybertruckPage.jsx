import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import cybertruckImage from "../assets/cybertruck.jpg";
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from "../assets/tesla-charger.jpg";
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    { title: '2.6SEC†', description: '0-60 MPH' },
    { title: '340MILES*', description: 'EST. RANGE' },
    { title: '11,000LBS', description: 'TOWING CAPACITY' },
];

export default function CybertruckPage() {
    return (
        <div className='container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Cybertruck'
                    description='EST. $57,390*'
                    backgroundImage={cybertruckImage}
                    featureItems={featureItems}/>
            </section>
            <section className='section'>
                <ImageBackgroundNoText
                    backgroundImage={teslaChargerImage}
                />
            </section>
            <section className='section'>
                <ImageGrid
                    image1={cybertruckImage}
                    image2={teslaChargerImage}
                    text1='Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
                    text2='Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.'
                />
            </section>
        </div>
    )
}