import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from 'aos';
import NotFound from "./pages/static_pages/NotFound";
import { Register, Login } from "./components";
import { CategoryDetails, Categories } from "./components/faetures";
import Admin from "./components/admin";
import { ProductDetails } from './components'
import EmailConfirmation from "./components/auth/Confirmed";




type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="category/:cid/product/:pid" element={<ProductDetails />} />
       <Route path="/new-category" element={<Admin.AddCategory />} />
       <Route path="/new-product" element={<Admin.AddProduct/>} />
       {/* caategory */}
       <Route path="/category/:id" element={<CategoryDetails />} />   
       <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Account confirmation */}
      <Route path="/account-confirmation" element={<EmailConfirmation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
