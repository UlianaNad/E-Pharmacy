
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout/SharedLayout'
import MedicinePage from './pages/MedicinePage'
import MedicineStorePage from './pages/MedicineStorePage/MedicineStorePage'
import HomePage from './pages/HomePage/HomePage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="store" element={<MedicineStorePage />} />
          <Route path="medicine" element={<MedicinePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  )
}

export default App
