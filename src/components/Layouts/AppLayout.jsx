
import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home/Home.jsx"
import Login from "../../pages/Auth/Login/index.jsx"
import Register from "../../pages/Auth/Register/index.jsx"
import Products from "../../pages/Products/index.jsx"
import Carts from "../../pages/Carts/index.jsx"
import Header from "../Common/Header.jsx"
import NotFound from "../../pages/NotFound/index.jsx"
import ForgotPassword from "../../pages/Auth/ForgotPassword/index.jsx"
import ResetPassword from "../../pages/Auth/ResetPassword/index.jsx"
import Checkout from "../../pages/Carts/Checkout.jsx"
import CheckoutFailed from '../../pages/Carts/CheckoutFailed';
import CheckoutSuccess from '../../pages/Carts/CheckoutSuccess';

const AppLayout = () => {
  return (
    <div>
        <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products">
        <Route index element={<Products/>}/>
        </Route>
        <Route path="/carts/*">
          <Route index element={<Carts />} />
          <Route path="checkout-process" element={<Checkout />} />
        </Route>
        <Route path="checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/fail/:orderId" element={<CheckoutFailed />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/password/reset/:token" element={<ResetPassword/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  )
}

export default AppLayout