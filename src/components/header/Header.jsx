import {useNavigate} from "react-router-dom";
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const navElements = [
    { label: 'TESLA', route: '', style: { marginRight: 'auto' } },
    { label: 'Model S', route: '#modelS' },
    { label: 'Model X', route: '#modelX' },
    { label: 'Cybertruck', route: '#cybertruck' },
    { label: 'Shop', route: '#shop' },
    { label: <ShoppingCartIcon />, route: '#cart', style: { marginLeft: 'auto' } },
    { label: 'Menu', route: null },
]

export default function Header({ setShowSidebar }) {
    const navigate = useNavigate()
    return(
        <>
        <nav>
            <ul className='headerList'>
                {navElements.map(({ label, route, style = {} }) => {
                    if (route === 'cart') {
                        return (
                            <li onClick={() => {
                                    navigate(`/${route}`);
                                }}
                                key={route}
                                style={style}
                            >
                                <span className='cart-items-count'>2</span>
                                {label}
                            </li>
                        )
                    }
                    return (
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
                    )
                })}
            </ul>
        </nav>
        </>
    );
}