import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./index.css";
import { SidebarProvider } from "./context/SidebarContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <SidebarProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </SidebarProvider>
  </React.StrictMode>
);