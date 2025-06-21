import React from "react";
import { NavLink, Outlet } from "react-router-dom"

import './Nav.css'

// import { ReactComponent as AddIcon } from '../../img/nav/add product.svg';
import { ReactComponent as HomeIcon } from '../../img/nav/home.svg';
import { ReactComponent as BasketIcon } from '../../img/nav/basket.svg';
import { ReactComponent as ProfileIcon } from '../../img/nav/profile.svg';

const setActive = ({isActive}) => isActive ? 'nav-active' : '';

class Nav extends React.Component {
    render() {
        return(
            <>
            <Outlet />
            <footer>
                <nav>
                    {/* <NavLink to="/add-product" className={setActive}>
                        <AddIcon />
                    </NavLink> */}
                    <NavLink to="/catalog" className={setActive}>
                        <HomeIcon />
                    </NavLink>
                    <NavLink to="/basket" className={setActive}>
                        <BasketIcon />                
                    </NavLink>
                    <NavLink to="/profile" className={setActive}>
                        <ProfileIcon />
                    </NavLink>
                </nav>
            </footer>            
            </>            
        )
    }
}

export { Nav }
