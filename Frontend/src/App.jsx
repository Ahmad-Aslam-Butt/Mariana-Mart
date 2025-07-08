import './App.css'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Admin_Home } from './Admin/Pages/Admin_Home'
import { Customer_Home } from './Customer/Pages/Customer_Home'
import { Drop_Ship_Home } from './Dropshipper/Pages/Drop_Ship_Home'
import { AdminDashboard } from './Admin/Pages/AdminDashboard'
import { CustomerDashboard } from './Customer/Pages/CustomerDashboard'
import { DropShipDashboard } from './Dropshipper/Pages/DropShipDashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/admin' element={<Admin_Home />}>
          <Route index element={<Navigate to='dashboard' replace />} />
          <Route path='dashboard' element={<AdminDashboard />} />
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
