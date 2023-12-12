import React from "react";
import { Button, Paper } from "@mui/material";
function Feedback() {
  return (
    <div>
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
        {" "}
        <div style={{ margin: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            Have a Feedback ?
          </div>
          <Button
            fullWidth
            style={{ background: "#1dd1a1", color: "black", fontWeight: 400 }}
          >
            We're Listening!
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Feedback;
