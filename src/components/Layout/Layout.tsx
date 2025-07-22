import React from "react";
import {
  Box,
  Drawer,
  Button,
  useMediaQuery,
  useTheme,
  Toolbar,
} from "@mui/material";
import { useDrawer } from "../../context/AppContext";
import { Menu } from "../Menu/Menu";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;
const rightPanelWidth = 300;

export const Layout = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const { open, toggleDrawer } = useDrawer();

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Sidebar */}
      {isDesktop ? (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: "1px solid #e5e7eb",
            },
          }}
        >
          <Menu />
        </Drawer>
      ) : (
        <>
          <Button
            onClick={toggleDrawer}
            sx={{ position: "absolute", top: 16, right: 16 }}
          >
            Menu
          </Button>
          <Drawer anchor="left" open={open} onClose={toggleDrawer}>
            <Menu toggleMenu={toggleDrawer} />
          </Drawer>
        </>
      )}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          overflowY: "auto",
          maxWidth: `calc(100% - ${drawerWidth + rightPanelWidth}px)`,
        }}
      >
        {/* <Toolbar />    */}
        <Outlet />
      </Box>

      {/* Right Sidebar */}
      <Box
        sx={{
          width: rightPanelWidth,
          padding: 2,
          borderLeft: "1px solid #e5e7eb",
          backgroundColor: "#fff",
          display: { xs: "none", md: "block" }, // Hide on small screens
        }}
      >
        <p className="text-sm text-gray-600">Right Panel</p>
        {/* Replace with user profile / activity / chat */}
      </Box>
    </Box>
  );
};
