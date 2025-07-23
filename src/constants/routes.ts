import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
export const MENU_ROUTES = [
  { label: "Dashboard", path: "/", icon: HomeOutlinedIcon },
  { label: "Users", path: "/users", icon: PeopleOutlineOutlinedIcon },
  // { label: "Projects", path: "", icon: GridViewOutlinedIcon },
];

export const BOTTOM_LINKS = [
  { label: "Help & information", icon: InfoOutlinedIcon },
  { label: "Log out", icon: DoNotDisturbOnOutlinedIcon },
];
