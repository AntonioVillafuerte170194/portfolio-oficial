import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { WebsiteList } from "./components/WebsiteList";
import { WebsiteForm } from "./components/WebsiteForm";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="bg-slate-300 text-black h-screen flex text-white">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home/><WebsiteList/></ProtectedRoute>}/>
          <Route path="add" element={<ProtectedRoute><Home/><WebsiteForm /></ProtectedRoute>} />
          <Route path="edit/:id" element={<ProtectedRoute><Home/><WebsiteForm /></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
