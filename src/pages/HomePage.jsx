import HomeSectionVideo from "../components/homeSectionVideo/HomeSectionVideo";
import ModelSPage from "./ModelSPage";
import ModelXPage from "./ModelXPage";
import CybertruckPage from "./CybertruckPage";

const featureItems = [
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
];

const homePageSections = [
    {
        id: 'modelS',
        component: <ModelSPage />
    },
    {
        id: 'modelX',
        component: <ModelXPage />
    },
    {
        id: 'cybertruck',
        component: <CybertruckPage />
    },
]

export default function HomePage() {
    return(
        <div className='container'>
            <section className='section'>
        <HomeSectionVideo />
            </section>
            {homePageSections.map((item) => (
                <section id={item.id} className="section">
                    {item.component}
                </section>

            ))}


        </div>
    )
}