import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import cybertruckImage from "../assets/cybertruck.jpg";

export default function CybertruckPage() {
    return (
        <div className='content'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Cybertruck'
                    description='View inventory'
                    backgroundImage={cybertruckImage}/>
            </section>
        </div>
    )
}