import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Material-UI
        </Typography>
        <div>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Toolbar>
    </AppBar>
  );
}
