import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BOTTOM_LINKS, MENU_ROUTES } from "../../constants/routes";
import FitbitIcon from "@mui/icons-material/Fitbit";
import { Typography } from "@mui/material";

export function Menu({ toggleMenu }: any) {
  return (
    <Box
      role="presentation"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          height: 120,
          mb: 1.5,
          px: 2,
          pt: 2,
        }}
      >
        <FitbitIcon sx={{ fontSize: 40 }} />
        <h1 className="ml-6 text-lg font-semibold text-gray-800">Logip</h1>
      </Box>

      {/* Menu Items */}
      <Box sx={{ flexGrow: 1 }}>
        <List>
          {MENU_ROUTES.map(({ label, path, icon: IconComponent }) => (
            <ListItem key={label} disablePadding onClick={toggleMenu}>
              <ListItemButton component={Link} to={path}>
                <ListItemIcon sx={{ minWidth: 32, mx:1 }}>
                  <IconComponent />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                      {label}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Links */}
      <Box>
        <div className="p-6">
          <UpgradeProCard />
        </div>
        <List>
          {BOTTOM_LINKS.map(({ label, icon: IconComponent }) => (
            <ListItem key={label} disablePadding onClick={toggleMenu}>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: 32, mx: 1 }}>
                  <IconComponent />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                      {label}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default function UpgradeProCard() {
  return (
    <div
      className="rounded-2xl p-5 pt-8 w-full text-center"
      style={{
        background: "linear-gradient(to bottom, #f6f3f4, white)",
      }}
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Upgrade to Pro
      </h2>

      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        Get 1 month free
        <br />
        and unlock
      </p>

      <button className="bg-[#b9d9f5] hover:bg-blue-500 font-medium py-3 rounded-full transition-colors duration-200 w-full">
        Upgrade
      </button>
    </div>
  );
}
