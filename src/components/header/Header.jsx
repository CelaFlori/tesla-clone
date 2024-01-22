import {useNavigate} from "react-router-dom";
import './Header.css'

export const navElements = [
    { label: 'TESLA', route: '', style: { marginRight: 'auto' } },
    { label: 'Model S', route: '#modelS' },
    { label: 'Model X', route: '#modelX' },
    { label: 'Cybertruck', route: '#cybertruck' },
    { label: 'Menu', route: null, style: { marginLeft: 'auto' } },
]

export default function Header({ setShowSidebar }) {
    const navigate = useNavigate()
    return(
        <>
        <nav className="header">
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

                        <a href={route}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    );
}