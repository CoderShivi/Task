import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Paper } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { useNavigate } from "react-router-dom";
export default function Toggle() {
  const navigate = useNavigate();
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Paper
      style={{
        display: "flex",
        backgroundColor: "white",
        width: "80%",
        height: "auto",
        margin: 20,
        marginLeft: 60,
        borderRadius: 15,
        padding: 10,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>
        View Toggle
      </div>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <ArticleOutlinedIcon style={{fontSize:50}} onClick={()=>navigate("/card")} />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatListBulletedIcon style={{fontSize:50}} onClick={()=>navigate("/list")} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
}
