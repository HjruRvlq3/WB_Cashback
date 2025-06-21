import React from "react"
import { NavLink } from "react-router-dom"

import ProfileAction from "../../components/profile-action/ProfileAction"

import { ReactComponent as AddProduct } from '../../img/nav/add product.svg';
import { ReactComponent as Support } from '../../img/support.svg';

class ProfileSeller extends React.Component {
    render() {
        return (
            <>
            <NavLink to="/add-product" className="no-style-link">
                <ProfileAction 
                    icon={AddProduct}
                    title="Разместить товар"
                    subtitle="Для продавца"
                />                
            </NavLink>
            
            <div className="profile-divider" />

            <ProfileAction 
                icon={Support}
                title="Поддержка"
                subtitle="Оперативно ответим на все ваши вопросы"
            />
            </>
        )
    }
}

export default ProfileSeller
