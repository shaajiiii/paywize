import { Button, Drawer } from "@mui/material";
import "./App.css";
import React from "react";
import { Menu } from "./components/Menu/Menu";
import { useDrawer } from "./context/AppContext";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Users } from "./pages/Users/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./pages/Error/Error";

function App() {
  const { open, toggleDrawer } = useDrawer();

  return (
    <>
      <Router>
        <div>
          <div style={{ position: "absolute", top: 0, float: "right" }}>
            <Button onClick={toggleDrawer}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer}>
              <Menu toggleMenu={toggleDrawer} />
            </Drawer>
          </div>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
