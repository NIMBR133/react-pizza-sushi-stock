import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import './Nav.scss'
import { ReactComponent as Pizza } from '../../../img/icons/pizza.svg'
import { ReactComponent as Stock } from '../../../img/icons/stock.svg'
import { ReactComponent as Delivery } from '../../../img/icons/delivery.svg'
import Humburger from './Humburger/Humburger'

const Nav = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    const onClickHumburger = () => {
        setActiveMenu(!activeMenu)
    }
    return (
        <nav className='nav'>
            <ul className={`menu ${activeMenu && 'menu_active'}`}>
                <MenuItem icon={Pizza} link={'/'} >Меню</MenuItem>
                <MenuItem icon={Stock} link={'/stocks'}>Акции</MenuItem>
                <MenuItem icon={Delivery} link={'/delivery'}>Доставка</MenuItem>
            </ul>
            <Humburger 
                activeMenu={activeMenu}
                onClickHumburger={onClickHumburger} />
        </nav>
    )
}

const MenuItem = (props) => {
    return (
        <li>
            <NavLink to={`${props.link}`} exact activeClassName="active" className="menu__link">
                <props.icon />
                <span>
                    {props.children}
                </span>
            </NavLink >
        </li>
    )
}

export default Nav