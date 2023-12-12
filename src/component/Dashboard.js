import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Paper } from "@mui/material";
import Card from "./Card";
import ServerServices from "../services/ServerServices";
import List from "./List";
import Toggle from "./Toggle";
import Reader from "./Reader";
import { Route, Routes } from "react-router-dom";
import Feedback from "./Feedback";
function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await ServerServices.fetchData();
        setData(apiData);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={4}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            borderRadius: 50,
          }}
        >
          <Reader />
          <Toggle />
          <Feedback />
        </Grid>

        <Grid item xs={8}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Routes>
              <Route element={<Card />} path="/card" />
              <Route element={<List />} path="/list" />
              <Route element={<Toggle />} path="/toggle" />
              <Route element={<Reader />} path="/reader" />
              <Route element={<Feedback />} path="/feedback" />
            </Routes>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
