import { BrowserRouter as BigRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CustomNavBar from './components/CustomNavBar';
import NotFoundPage from './pages/NotFoundPage';
import Service from './pages/Service';
import AboutUs from './pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProductDashBoard from './pages/admin/ProductDashBoard';
import Dashboard from './pages/admin/Dashboard';
import UserDashboard from './pages/admin/UserDashboard';
import { useContext, useEffect, useState } from 'react';
import Layout from './components/routes/Layout';
import { ToastContainer } from 'react-toastify';
import AuthContext, { AuthContextProvider } from './components/shared/AuthContext';
import { GET_OWN_PROFILE } from './services/userService';
function App() {

  // we should check whether the token is valid or not 
  // check if the access_token is valid or not 
  const [isValidated, setIsValidated] = useState(
    localStorage.getItem("tokens") ? true : false
  )
  
  return (

    // !isLoading && 

    <BigRouter>
      <AuthContextProvider>
        <CustomNavBar
          isAuthenticated={isValidated}
          loginCallBack={handleLoginCallBack}
        />
        <Routes>

          {!isValidated ?
            <>
              <Route index
                element={
                  <Layout includeFooter={true}>
                    <HomePage />
                  </Layout>
                } />

              <Route path="/service"
                element={
                  <Layout includeFooter={true}>
                    <Service />
                  </Layout>} />
              <Route path="/aboutus"
                element={
                  <Layout includeFooter={true}>
                    <AboutUs />
                  </Layout>
                } />
              <Route path="/products" element={<Products />} />
              {/* /products/12 */}
              <Route path="/products/:id" element={<ProductDetail />} />
            </>
            :
            <>
              {/* these are for the admin page  */}
              <Route path='/admin/products' element={<ProductDashBoard />} />
              <Route index element={<Dashboard />} />
              <Route path='/admin/users' element={<UserDashboard />} />
            </>
          }
          <Route path="*" element={<NotFoundPage />} />

        </Routes>

        <ToastContainer />
      </AuthContextProvider>
    </BigRouter>

  );
}

export default App;
