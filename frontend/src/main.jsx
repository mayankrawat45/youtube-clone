import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./index.css";
import { SidebarProvider } from "./context/SidebarContext";
import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./context/SearchContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <SidebarProvider>
        <AuthProvider>
          <SearchProvider>
            <RouterProvider router={router} />
          </SearchProvider>
        </AuthProvider>
      </SidebarProvider>
  </React.StrictMode>
);