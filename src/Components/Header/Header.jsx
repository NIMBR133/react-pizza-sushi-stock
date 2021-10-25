import { NavLink } from 'react-router-dom'

import './Header.scss'
import { ReactComponent as Tel } from '../../img/icons/tel.svg'
import { ReactComponent as CartIcon } from '../../img/icons/cart.svg'
import logo from './../../img/logo.jpg'
import Cart from './Cart'
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <NavLink to='/'>
                    <img src={logo} alt='' className="header__logo" />
                </NavLink>
                <Nav />
                <div className="header__tel-cart">
                    <a href='tel:77777' className="header__tel">
                        <Tel />
                        <span>+7 999 8888 77 66</span>
                    </a>
                    <Cart icon={CartIcon}/>
                </div>
            </div>
        </header>
    )
}

export default Header