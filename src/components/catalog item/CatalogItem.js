import React from "react"
import './CatalogItem.css'

class CatalogItem extends React.Component {
    render() {
        return (
            <>
            <div>                
                <div></div> {/* картинка */}
                <div>
                    <div></div> {/* заголовок */}
                    <div>
                        <div></div> {/* старая цена */}
                        <div></div> {/* новая цена */}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default CatalogItem
