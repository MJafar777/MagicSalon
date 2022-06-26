import React from "react";

import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Profile() {
   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <div>
         <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                     alt="Remy Sharp"
                     src="/static/images/avatar/2.jpg"
                     style={{ width: "3rem", height: "3rem" }}
                  />
               </IconButton>
            </Tooltip>
            <Menu
               sx={{ mt: "40px" }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
               }}
               keepMounted
               transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
            >
               {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                     <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
               ))}
            </Menu>
         </Box>
      </div>
   );
}
