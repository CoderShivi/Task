import React from "react";
import { Paper } from "@mui/material";
function Reader() {
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
            flexDirection: "row",
            alignItems: "center",
        }}
      >
        {" "}
        <img
          src="circularpic.png"
          style={{
            width: 50,
            height: 50,
            alignSelf: "center",
            marginLeft: 20,
          }}
        />
        <div style={{ margin: 20 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "poppins",
              fontWeight: "bold",
              fontSize: 22
            }}
          >
            Hi Reader,{" "}
          </div>
          <div style={{ fontSize: 18 }}>Here's Your News</div>
        </div>
      </Paper>
    </div>
  );
}

export default Reader;
