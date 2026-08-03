import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ===========================
   User Pages
=========================== */

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import SearchResults from "./pages/SearchResults";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import OrderSuccess from "./pages/OrderSuccess";
import Wishlist from "./pages/Wishlist";

import ProfileDashboard from "./pages/ProfileDashboard";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import EditProduct from "./pages/EditProduct";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import NotFound from "./pages/NotFound";

/* ===========================
   Admin Pages
=========================== */

import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import ProductManagement from "./pages/ProductManagement";
import ManageOrders from "./pages/ManageOrders";
import CustomerManagement from "./pages/CustomerManagement";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import AdminOffer from "./pages/AdminOffer";
function App() {

  const location = useLocation();

  const hideLayout = [
    "/login",
    "/register",
    "/forgot-password",
  ].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="app-main">

        <Routes>

          {/* ================= HOME ================= */}

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          
          {/* ================= PRODUCTS ================= */}

          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search" element={<SearchResults />} />

          {/* ================= SHOPPING ================= */}

          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          {/* ================= PROFILE ================= */}

          <Route
            path="/profile"
            element={<ProfileDashboard />}
          />

          {/* ================= LOGIN ================= */}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          {/* ================= INFO ================= */}

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/privacy"
            element={<PrivacyPolicy />}
          />

          {/* ================= ADMIN ================= */}

<Route
  path="/admin"
  element={
    <AdminProtectedRoute>
      <AdminDashboard />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/add-product"
  element={
    <AdminProtectedRoute>
      <AddProduct />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/products"
  element={
    <AdminProtectedRoute>
      <ProductManagement />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/manage-orders"
  element={
    <AdminProtectedRoute>
      <ManageOrders />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/customers"
  element={
    <AdminProtectedRoute>
      <CustomerManagement />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/reports"
  element={
    <AdminProtectedRoute>
      <Reports />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/notifications"
  element={
    <AdminProtectedRoute>
      <Notifications />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/settings"
  element={
    <AdminProtectedRoute>
      <Settings />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/offer"
  element={
    <AdminProtectedRoute>
      <AdminOffer />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/edit-product/:id"
  element={
    <AdminProtectedRoute>
      <EditProduct />
    </AdminProtectedRoute>
  }
/>
          {/* ================= 404 ================= */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;