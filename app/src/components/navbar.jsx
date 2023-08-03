import { AppBar, Toolbar, Typography, MenuItem, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <AppBar
      sx={{ color: "#007BFF", backgroundColor: "#007BFF" }}
      position="static"
    >
      <Toolbar>
        <Typography
          component={NavLink}
          to="/"
          sx={{ textDecoration: "none", color: "grey.50" }}
        >
          Event Management System
        </Typography>
        <Stack spacing={2} sx={{ marginLeft: "auto" }} direction="row">
          <MenuItem component={NavLink} to="/">
            Home
          </MenuItem>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
