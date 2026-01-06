import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogIndex from "./pages/BlogIndex.jsx";
import BlogPost from "./pages/BlogPost.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/zh" replace />} />
        <Route path="/en" element={<App lang="en" />} />
        <Route path="/zh" element={<App lang="zh" />} />
        <Route path="/en/about-us" element={<AboutPage lang="en" />} />
        <Route path="/zh/about-us" element={<AboutPage lang="zh" />} />
        <Route path="/en/blog" element={<BlogIndex lang="en" />} />
        <Route path="/zh/blog" element={<BlogIndex lang="zh" />} />
        <Route path="/en/blog/:slug" element={<BlogPost lang="en" />} />
        <Route path="/zh/blog/:slug" element={<BlogPost lang="zh" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
