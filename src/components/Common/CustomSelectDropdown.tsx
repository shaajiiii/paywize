import { useRef, useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { motion, AnimatePresence } from "framer-motion";

interface CustomSelectProps {
  value: string;
  fillColor?: "#fff";
  options: string[];
  onChange: (value: string) => void;
}
const dropdownAnim = {
  initial: { opacity: 0, y: -8, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, type: "spring" as "spring", stiffness: 200 },
  },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.16 } },
};

export default function CustomSelect({
  value,
  options,
  onChange,
  fillColor,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <Box
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        sx={{
          px: 2.5,
          py: 0.5,
          borderRadius: 5,
          bgcolor: fillColor ?? "grey.100",
          border: "solid",
          borderColor: "grey.100",
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          minWidth: 120,
          boxShadow: open ? 3 : 0,
          cursor: "pointer",
          transition: "box-shadow 0.15s",
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="medium"
          sx={{ fontSize: 16 }}
        >
          {value}
        </Typography>
        {open ? (
          <ArrowDropUpIcon
            sx={{ fontSize: 22, transition: "transform 0.2s" }}
          />
        ) : (
          <ArrowDropDownIcon
            sx={{ fontSize: 22, transition: "transform 0.2s" }}
          />
        )}
      </Box>

      <AnimatePresence>
        {open && (
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                mt: 1,
                zIndex: 10,
                width: "100%",
              }}
            >
              <motion.div {...dropdownAnim} style={{ width: "100%" }}>
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: 3,
                    py: 0.5,
                    bgcolor: "background.paper",
                    minWidth: buttonRef.current?.offsetWidth || 130,
                    overflow: "hidden",
                  }}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      selected={option === value}
                      onClick={() => {
                        onChange(option);
                        setOpen(false);
                      }}
                      sx={{
                        fontWeight: option === value ? 600 : 400,
                        fontSize: 15,
                        px: 2.5,
                        py: 1.1,
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Paper>
              </motion.div>
            </Box>
          </ClickAwayListener>
        )}
      </AnimatePresence>
    </Box>
  );
}
