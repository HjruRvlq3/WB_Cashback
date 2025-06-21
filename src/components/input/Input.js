import React from "react"
import './Input.css'

class Input extends React.Component {
    render() {
        return (
            <input 
                type="text" 
                className="default-input"
                {...this.props} // Передаёт все полученные пропсы внутрь <input>
            />
        )
    }
}

export default Input
