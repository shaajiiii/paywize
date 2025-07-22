import { Button, Drawer } from "@mui/material";
import "./App.css";
import React from "react";
import { Menu } from "./components/Menu/Menu";

function App() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div>
        <div>
          <Button onClick={toggleDrawer(true)}>Open drawer</Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <Menu />
          </Drawer>
        </div>
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
      </div>
    </>
  );
}

export default App;
