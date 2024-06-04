import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("add");
  };
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, ml: 2 }}>
          <IconButton color="inherit">
            <ViewListIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Tìm kiếm..."
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <Button onClick={handleClick} variant="contained" color="primary">
          Tạo bài giảng
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
