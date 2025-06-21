import React from "react"
import { Routes, Route } from "react-router-dom"

import Catalog from "./pages/catalog/Catalog"
import Backet from "./pages/basket/Basket"
import Profile from "./pages/profile/Profile"
import AddProduct from "./pages/add-product/AddProduct"

import { Nav } from "./layout/navigation/Nav"

class App extends React.Component {
    render() {
        return (
            <>
              <Routes>
                <Route path="/" element={<Nav />} >
                  <Route path="profile" element={<Profile type="seller" />} />
                  <Route path="catalog" element={<Catalog />} />
                  <Route path="basket" element={<Backet />} />
                  <Route path="add-product" element={<AddProduct />} />
                </Route>                
              </Routes>
            </>
        )
    }
}

export default App
