import React from "react"

import Header from "../../layout/header/HeaderTransparent"
import AddProductForm from "./AddProductForm"

import './AddProduct.css'

class AddProductSecondStep extends React.Component {
    
    state = {
        brand: "",         // Бренд товара
        name: "",          // Название товара
        category: "",      // Категория
        price: "",         // Цена на сайте
    };

    // Обработчик изменения любого поля
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    
    render() {
        return (
            <>
            <Header title="Размещение товара" />
            <main>
                <AddProductForm />                
            </main>
            </>
        )
    }
}

export default AddProductSecondStep
