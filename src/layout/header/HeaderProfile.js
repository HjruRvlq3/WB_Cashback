<<<<<<< HEAD
import React from "react";
import './HeaderProfile.css';
import { ReactComponent as ProfileIcon } from '../../img/nav/profile.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Гость",
        };
    }

    componentDidMount() {
        const user = window.Telegram.WebApp.initDataUnsafe?.user;
        if (user) {
            const fullName = user.first_name + (user.last_name ? " " + user.last_name : "");
            this.setState({ userName: fullName });
        }
    }

    render() {
        return (
            <header className="header-profile">
                <div className="header-profile__user">
                    <ProfileIcon />
                    <span>{this.state.userName}</span>
                </div>
                <div className="header-profile__actions">
                    {/* кнопка инструкция */}
                    {/* кнопка о сервисе */}
                </div>
            </header>
        )
    }
}

export default Header;
=======
import React from "react";
import './HeaderProfile.css';
import { ReactComponent as ProfileIcon } from '../../img/nav/profile.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Гость",
        };
    }

    componentDidMount() {
        const user = window.Telegram.WebApp.initDataUnsafe?.user;
        if (user) {
            const fullName = user.first_name + (user.last_name ? " " + user.last_name : "");
            this.setState({ userName: fullName });
        }
    }

    render() {
        return (
            <header className="header-profile">
                <div className="header-profile__user">
                    <ProfileIcon />
                    <span>{this.state.userName}</span>
                </div>
                <div className="header-profile__actions">
                    {/* кнопка инструкция */}
                    {/* кнопка о сервисе */}
                </div>
            </header>
        )
    }
}

export default Header;
>>>>>>> 529fbc0 (New commit)
