// src/context/DrawerContext.tsx
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type DrawerContextType = {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <DrawerContext.Provider
      value={{ open, openDrawer, closeDrawer, toggleDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

// Custom hook for easy access
export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};
