import { Button, Drawer } from "@mui/material";
import "./App.css";
import React from "react";
import { Menu } from "./components/Menu/Menu";
import { useDrawer } from "./context/AppContext";

function App() {
  const { open, toggleDrawer } = useDrawer();

  return (
    <>
      <div>
        <div>
          <Button onClick={toggleDrawer}>Open drawer</Button>
          <Drawer open={open} onClose={toggleDrawer}>
            <Menu />
          </Drawer>
        </div>
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
      </div>
    </>
  );
}

export default App;
