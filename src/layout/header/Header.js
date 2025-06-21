import React from "react"

import HeaderProfile from "./HeaderProfile"

class Header extends React.Component {
    renderContentByType() {
        const { type } = this.props;

        if (type === "profile") return <HeaderProfile />;
        return <div>Неизвестный тип шапки</div>;
    }

    render() {
        return (
            <>{this.renderContentByType()}</>
        );
    }
}

export default Header
