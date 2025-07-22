import { Button, Drawer } from "@mui/material";
import "./App.css";
import React from "react";
import { Menu } from "./components/Menu/Menu";
import { useDrawer } from "./context/AppContext";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Users } from "./pages/Users/Users";

function App() {
  const { open, toggleDrawer } = useDrawer();

  return (
    <>
      <div>
        <div style={{ position: "absolute", top: 0, float: "right" }}>
          <Button onClick={toggleDrawer}>Open drawer</Button>
          <Drawer open={open} onClose={toggleDrawer}>
            <Menu />
          </Drawer>
        </div>

        <Dashboard />
        {/* <Users /> */}
      </div>
    </>
  );
}

export default App;
