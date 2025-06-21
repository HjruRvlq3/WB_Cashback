<<<<<<< HEAD
// Button.js
import React from "react"
import './Button.css'

class Button extends React.Component {
    render() {
        const { icon: Icon, title, type = "button", ...rest } = this.props;

        return (
            <button 
                className="default-button"
                type={type}
                {...rest} // Прокидывает onClick и другие пропсы
            >
                {Icon && <Icon className="profile-action__icon" />}
                {title}
            </button>
        )
    }
}

export default Button
=======
// Button.js
import React from "react"
import './Button.css'

class Button extends React.Component {
    render() {
        const { icon: Icon, title, type = "button", ...rest } = this.props;

        return (
            <button 
                className="default-button"
                type={type}
                {...rest} // Прокидывает onClick и другие пропсы
            >
                {Icon && <Icon className="profile-action__icon" />}
                {title}
            </button>
        )
    }
}

export default Button
>>>>>>> 529fbc0 (New commit)
