import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateAd from "./pages/CreateAd";
import TextAdForm from "./pages/TextAdForm";
import MediaAdForm from "./pages/MediaAdForm";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/text-ad-form" element={<TextAdForm />} />
        <Route path="/media-ad-form" element={<MediaAdForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
