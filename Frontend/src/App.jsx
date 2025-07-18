import './App.css'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Admin_Home } from './Admin/Pages/Admin_Home'
import { Customer_Home } from './Customer/Pages/Customer_Home'
import { Drop_Ship_Home } from './Dropshipper/Pages/Drop_Ship_Home'
import { AdminDashboard } from './Admin/Pages/AdminDashboard'
import { About } from './Customer/Pages/About'
import { Contact } from './Customer/Pages/Contact'
import { DropShipDashboard } from './Dropshipper/Pages/DropShipDashboard'
import { CustomerDashboard } from './Customer/Pages/CustomerDashboard'
import { AccountDetail } from './Customer/Pages/AccountDetail'
import { AllProducts } from './Customer/Pages/AllProducts'
import { SingleProduct } from './Customer/Pages/SingleProduct'
import { Payment } from './Customer/Pages/Payment'
import { PaymentSettings } from './Customer/Pages/PaymentSettings'
import { Orders } from './Customer/Pages/Orders'
import { OrderTracking } from './Customer/Pages/OrderTracking'
import { Footer } from './Customer/Pages/Footer'
import { FilterProduct } from './Customer/Pages/FilterProduct'
import { Cart } from './Customer/Pages/Cart'
import { Checkout } from './Customer/Pages/Checkout'
import { Category } from './Customer/Pages/Category'
import { Coupons } from './Customer/Pages/Coupons'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* Admin Routes */}
        <Route path='/admin' element={<Admin_Home />}>
          <Route index element={<Navigate to='dashboard' replace />} />
          <Route path='dashboard' element={<AdminDashboard />} />
        </Route>

        {/* Customer Routes */}
        <Route path='/customer' element={<Customer_Home />}>
          <Route index element={<Navigate to='dashboard' replace />} />
          <Route path='dashboard' element={<CustomerDashboard />} />
          <Route path='about' element={<About/>} />
          <Route path='accountdetail' element={<AccountDetail/>} />
          <Route path='allproducts' element={<AllProducts/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='category' element={<Category/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='coupons' element={<Coupons/>} />
          <Route path='filterproduct' element={<FilterProduct/>} />
          <Route path='footer' element={<Footer/>} />
          <Route path='orders' element={<Orders/>} />
          <Route path='ordertracking' element={<OrderTracking/>} />
          <Route path='payment' element={<Payment/>} />
          <Route path='paymentsettings' element={<PaymentSettings/>} />
          <Route path='singleproduct' element={<SingleProduct/>} />
          <Route path='contact' element={<Contact/>} />
          </Route>

        {/* Drop shipping Routes */}
        <Route path='/dropship' element={<Drop_Ship_Home />}>
          <Route index element={<Navigate to='dashboard' replace />} />
          <Route path='dashboard' element={<DropShipDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
