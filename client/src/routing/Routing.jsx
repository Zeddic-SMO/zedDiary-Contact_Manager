import React from "react";
import Layout from "../layout/Layout";
import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../pages/home/Home";
import Register from "../components/auth/Register";
import About from "../pages/about/About";
import ResetPassword from "../components/setting/ResetPassword";
import ChangePassword from "../components/setting/ChangePassword";
import Profile from "../pages/profile/Profile";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
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
        element={
          <Layout>
            <ChangePassword />
          </Layout>
        }
      />

      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />

      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
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
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Routing;
