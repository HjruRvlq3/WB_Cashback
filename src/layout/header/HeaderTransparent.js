import React from "react"

import './HeaderTransparent.css'

class Header extends React.Component {
    render() {

        const { title } = this.props;

        return (
            <header className="header-transparent">
                <span>{title}</span>                
            </header>
        )
    }
}

export default Header
