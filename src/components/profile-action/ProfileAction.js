<<<<<<< HEAD
import React from "react";

import { ReactComponent as Arrow } from '../../img/arrow.svg';

import './ProfileAction.css'

class ProfileAction extends React.Component {
    render() {
        const { icon: Icon, title, subtitle } = this.props;

        return (
            <>
            <div className="profile-action">
                <div className="profile-action__content"> {/* Основной контент слева: иконка + текст */}
                    <div className="profile-action__icon-wrapper"> {/* Справа картинка */}
                        {Icon && <Icon className="profile-action__icon" />}
                    </div>
                    <div className="profile-action__text"> {/* Слева текст */}
                        <div className="profile-action__title">{title}</div> {/* Заголовок */}
                        <div className="profile-action__subtitle">{subtitle}</div> {/* Подзаголовок */}
                    </div>
                </div>
                <div className="profile-action__arrow"> {/* Стрелка справа */}
                    <Arrow />
                </div>
            </div>
            </>
        );
    }
}

export default ProfileAction;
=======
import React from "react";

import { ReactComponent as Arrow } from '../../img/arrow.svg';

import './ProfileAction.css'

class ProfileAction extends React.Component {
    render() {
        const { icon: Icon, title, subtitle } = this.props;

        return (
            <>
            <div className="profile-action">
                <div className="profile-action__content"> {/* Основной контент слева: иконка + текст */}
                    <div className="profile-action__icon-wrapper"> {/* Справа картинка */}
                        {Icon && <Icon className="profile-action__icon" />}
                    </div>
                    <div className="profile-action__text"> {/* Слева текст */}
                        <div className="profile-action__title">{title}</div> {/* Заголовок */}
                        <div className="profile-action__subtitle">{subtitle}</div> {/* Подзаголовок */}
                    </div>
                </div>
                <div className="profile-action__arrow"> {/* Стрелка справа */}
                    <Arrow />
                </div>
            </div>
            </>
        );
    }
}

export default ProfileAction;
>>>>>>> 529fbc0 (New commit)
