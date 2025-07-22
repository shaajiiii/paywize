import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MENU_ROUTES } from "../../constants/routes";

export function Menu({ toggleMenu }: any) {
  return (
    <Box role="presentation">
      <List>
        {MENU_ROUTES.map(({ label, path, icon: IconComponent }) => (
          <ListItem key={label} disablePadding onClick={toggleMenu}>
            <ListItemButton component={Link} to={path}>
              <ListItemIcon>
                <IconComponent />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
    </Box>
  );
}
