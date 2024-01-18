import {useNavigate} from "react-router-dom";
import './Header.css'

export const navElements = [
    { label: 'TESLA', route: '/', style: { marginRight: 'auto' } },
    { label: 'Model S', route: '/model_s' },
    { label: 'Model X', route: '/model_x' },
    { label: 'Cybertruck', route: '/cybertruck' },
    { label: 'Menu', route: null, style: { marginLeft: 'auto' } },
]

export default function Header({ setShowSidebar }) {
    const navigate = useNavigate()
    return(
        <>

        <nav>
            <ul className='headerList'>
                {navElements.map(({ label, route, style = {} }) => (
                    <li
                        style={style}
                        key={label}
                        onClick={() => {
                            if (label === 'Menu') {
                                setShowSidebar(true);
                            } else {
                                navigate(`/${route}`)
                            }
                        }}
                    >
                        {label}
                    </li>
                ))}
            </ul>
        </nav>
        </>
    );
}