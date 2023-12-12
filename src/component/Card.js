import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Paper } from "@mui/material";
import ServerServices from "../services/ServerServices";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
function Card() {
  const [data, setData] = useState([]);

  var task = useSelector((state) => state.task);
  var tasklist = Object.values(task);
  var tasklength = parseInt(tasklist.length / 6);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await ServerServices.fetchData();
        setData(apiData);
        console.log("data", apiData);
        dispatch({
          type: "ADD_TASK",
          payload: [apiData],
        });
      } catch (error) {}
    };
    fetchData();
  }, []);

  const pagination = () => {
    var p = new Array(tasklength);
    p.fill(0);
    console.log("pppppppp", p);
    return p.map((item, index) => {
      return (
        <div style={{ width: "20%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                padding: 5,
                background: "#bbb",
                borderRadius: 50,
                width: 25,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {index + 1}
            </div>
          </div>
        </div>
      );
    });
  };
  var dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch({ type: "DEL_TASK", payload: [id] });
    setRefresh(!refresh);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", }}>
          {tasklist.map((item) => (
            <Paper
              style={{
                display: "flex",
                padding: 10,
                margin: 10,
                width: "27%",
                height: "auto",
                margin: 20,
                borderRadius: 20,
                flexDirection: "column",
              }}
            >
              <div
                onClick={() => handleDelete(item.id)}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <CloseIcon style={{ color: "red", marginLeft: "auto" }} />
              </div>
              <div style={{ height: 100 }}>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginBottom: 5,
                    maxHeight: "4rem",
                    overflow: "hidden",
                    display: "-webkit-box",
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    msTextOverflow: "ellipsis",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    marginBottom: 5,
                    maxHeight: "4rem",
                    overflow: "hidden",
                    display: "-webkit-box",
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    msTextOverflow: "ellipsis",
                  }}
                >
                  {item.body}
                </div>
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#bdc3c7",
                  marginBottom: 5,
                }}
              >
                {new Date()
                  .toString()
                  .substring(0, new Date().toString().indexOf("+"))}
              </div>
              <div>
                <img
                  src="pic.avif"
                  style={{ width: "100%", height: 120, borderRadius: 10 }}
                />
              </div>
            </Paper>
          ))}
        </div>
      </div>
      <div style={{ width: "20%" }}>
        <Slider {...settings}>{pagination()}</Slider>
      </div>
    </>
  );
}

export default Card;
