import React, { useContext } from "react";
import Layout from "../layout/Layout";
import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../pages/home/Home";
import Register from "../components/auth/Register";
import About from "../pages/about/About";
import ResetPassword from "../components/setting/ResetPassword";
import ChangePassword from "../components/setting/ChangePassword";
import Profile from "../pages/profile/Profile";
import { ContactProvider } from "../context/Contact_Context";

const Routing = () => {
  const { userAccess } = useContext(ContactProvider);
  return (
    <Routes>
      <Route
        path="/login"
        element={<Layout>{!userAccess ? <Login /> : <Home />}</Layout>}
      />

      <Route
        path="/reset_password"
        element={
          <Layout>
            <ResetPassword />
          </Layout>
        }
      />

      <Route
        path="/change_password"
        element={<Layout>{userAccess ? <ChangePassword /> : <Login />}</Layout>}
      />

      <Route
        path="/register"
        element={<Layout>{!userAccess ? <Register /> : <Home />}</Layout>}
      />

      <Route
        path="/"
        element={<Layout>{userAccess ? <Home /> : <Login />}</Layout>}
      />

      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route
        path="/profile"
        element={<Layout>{userAccess ? <Profile /> : <Login />}</Layout>}
      />
    </Routes>
  );
};

export default Routing;
