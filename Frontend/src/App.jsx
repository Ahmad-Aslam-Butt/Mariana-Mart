import './App.css'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Admin_Home } from './Admin/Pages/Admin_Home'
import { Customer_Home } from './Customer/Pages/Customer_Home'
import { Drop_Ship_Home } from './Dropshipper/Pages/Drop_Ship_Home'
import { AdminDashboard } from './Admin/Pages/AdminDashboard'
import { CustomerDashboard } from './Customer/Pages/CustomerDashboard'
import { DropShipDashboard } from './Dropshipper/Pages/DropShipDashboard'
import { Reports } from './Admin/Pages/Reports'
import { ProductManagement } from './Admin/Pages/ProductManagement'
import { OrderManagement } from './Admin/Pages/OrderManagement'
import { CustomerManagement } from './Admin/Pages/CustomerManagement'
import { ShippingManagement } from './Admin/Pages/ShippingManagement'
import { DropShippingManagement } from './Admin/Pages/DropShippingManagement'
import { CouponManagement } from './Admin/Pages/CouponManagement'
import { Settings } from './Admin/Pages/Settings'
import { AllProducts } from './Admin/Components/AllProducts'
import { AddProduct } from './Admin/Components/AddProduct'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/admin' element={<Admin_Home />}>
          <Route index element={<Navigate to='dashboard' replace />} />
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='reports' element={<Reports />} />
          <Route path='sales' element={<Reports />} />
          <Route path='products' element={<Reports />} />
          <Route path='customers' element={<Reports />} />
          <Route path='inventory' element={<Reports />} />
          <Route path='product-management' element={<ProductManagement />} />
          <Route path='all-products' element={<AllProducts />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path='order-management' element={<OrderManagement />} />
          <Route path='all-orders' element={<OrderManagement />} />
          <Route path='add-order' element={<OrderManagement />} />
          <Route path='customer-management' element={<CustomerManagement />} />
          <Route path='all-customer' element={<CustomerManagement />} />
          <Route path='add-customer' element={<CustomerManagement />} />
          <Route path='shipping-management' element={<ShippingManagement />} />
          <Route path='shipping-services' element={<ShippingManagement />} />
          <Route path='add-shipping-services' element={<ShippingManagement />} />
          <Route path='drop-shipping' element={<DropShippingManagement />} />
          <Route path='coupons' element={<CouponManagement />} />
          <Route path='all-coupons' element={<CouponManagement />} />
          <Route path='add-coupon' element={<CouponManagement />} />
          <Route path='setting' element={<Settings />} />
          <Route path='profile' element={<Settings />} />
          <Route path='users' element={<Settings />} />
          <Route path='change-password' element={<Settings />} />
        </Route>
        <Route path='/customer' element={<Customer_Home />}>
          <Route index element={<Navigate to='dashboard' replace />} />
          <Route path='dashboard' element={<CustomerDashboard />} />
        </Route>
        <Route path='/dropship' element={<Drop_Ship_Home />}>
          <Route index element={<Navigate to='dashboard' replace />} />
          <Route path='dashboard' element={<DropShipDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
