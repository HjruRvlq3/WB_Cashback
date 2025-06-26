import React from "react"
import { NavLink } from "react-router-dom"

import Header from "../../layout/header/HeaderTransparent"
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"

import './AddProduct.css'

// Артикул
// 230621845

class AddProduct extends React.Component {
    state = {
        nmId: ""
    }

    handleInputChange = (e) => {
        this.setState({ nmId: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { nmId } = this.state;

        if (!nmId) return;

        try {
            const response = await fetch('http://localhost:8000/api/products/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ wb_product_id: nmId }),
            });

            const data = await response.json();
            console.log('Ответ от сервера:', data);
        } catch (error) {
            console.error('Ошибка запроса:', error);
        }
    }

    render() {
        return (
            <>
            <Header title="Размещение товара" />
            <main>
                <form className="add-product__form" onSubmit={this.handleSubmit}>
                    <div className="add-product__inupt">
                        <label htmlFor="ItemNumber">Введите артикул товара</label>
                        
                        <Input 
                            id={"ItemForm"}
                            value={this.state.nmId}
                            onChange={this.handleInputChange}
                        />    
                    </div>
                    <div>
                        <NavLink to="/add-product-step-two" className="no-style-link">
                        <Button 
                            title="Загрузить данные о товаре"
                            type="submit"
                        />
                        </NavLink>
                    </div>                    
                </form>
            </main>
            </>
        )
    }
}

export default AddProduct;
