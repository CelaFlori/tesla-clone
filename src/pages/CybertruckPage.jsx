import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import cybertruckImage from "../assets/cybertruck.jpg";
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from "../assets/tesla-charger.jpg";

const featureItems = [
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
];

export default function CybertruckPage() {
    return (
        <div className='content'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Cybertruck'
                    description='View inventory'
                    backgroundImage={cybertruckImage}
                featureItems={featureItems}/>
            </section>
            <section className='section'>
                <ImageBackgroundNoText
                    backgroundImage={teslaChargerImage}
                />
            </section>
        </div>
    )
}