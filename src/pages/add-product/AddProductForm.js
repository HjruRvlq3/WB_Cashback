import React from "react"

import Input from "../../components/input/Input"

import './AddProduct.css'

class AddProductForm extends React.Component {
    state = {
        brand: "VOLTEX",             // Предзаполненный бренд
        name: "Вентилятор настольный с увлажнителем воздуха портативный",       // Предзаполненное название
        category: "Вентиляторы",     // Предзаполненная категория
        price: "864 ₽",         // Предзаполненная цена
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <form className="add-product__form">
                <div className="add-product__inupt">
                    <label htmlFor="brand">Бренд товара</label>
                    <Input
                        id="brand"
                        name="brand"
                        value={this.state.brand}  // Передаём значение из state
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="add-product__inupt">
                    <label htmlFor="name">Название товара</label>
                    <Input
                        id="name"
                        name="name"
                        value={this.state.name}  // Передаём значение из state
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="add-product__inupt">
                    <label htmlFor="category">Категория</label>
                    <Input
                        id="category"
                        name="category"
                        value={this.state.category}  // Передаём значение из state
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="add-product__inupt">
                    <label htmlFor="price">Цена на сайте</label>
                    <Input
                        id="price"
                        name="price"
                        value={this.state.price}  // Передаём значение из state
                        onChange={this.handleInputChange}
                    />
                </div>

                {/* Фото товара */}
                <div className="add-product__inupt">
                    <label>Фото товара</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={this.handlePhotoChange}
                        ref={(ref) => (this.fileInputRef = ref)}
                        style={{ display: "none" }}
                    />
                    
                    <div 
                        className="upload-preview" 
                        onClick={this.triggerFileInput}
                    >
                        {this.state.photoPreview ? (
                            <img 
                                src={this.state.photoPreview} 
                                alt="Выбранное фото" 
                                className="preview-image"
                            />
                        ) : (
                            <span className="upload-placeholder">
                                Выберите фото товара
                            </span>
                        )}
                    </div>
                </div>

            </form>
        );
    }
}

export default AddProductForm;
