import React from "react";
import Button from "@mui/material/Button";
import AlarmIcon from '@mui/icons-material/Alarm';
import  IconButton  from "@mui/material/IconButton";


export default function Navbar() {
  return (
    <div>
      <Button variant="contained" color="success">
        nav bar
      </Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
    </div>
  );
}
