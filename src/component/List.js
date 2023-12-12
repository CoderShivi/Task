import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ServerServices from "../services/ServerServices";
import { useDispatch, useSelector } from "react-redux";
function List() {
    var task = useSelector((state) => state.task);
    var tasklist = Object.values(task);
    const [refresh, setRefresh] = useState(false);
    const [data,setData]=useState([])
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
    var dispatch = useDispatch();
    const handleDelete = (id) => {
      dispatch({ type: "DEL_TASK", payload: [id] });
      setRefresh(!refresh);
    };
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
      {tasklist.map((item) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Paper
            style={{
              display: "flex",
              backgroundColor: "white",
              width: "100%",
              //   height: 120,
              margin: 20,
              marginLeft: 60,
              borderRadius: 15,
            }}
          >
            <img
              src="circularPic.png"
              style={{
                width: 60,
                height: 60,
                alignSelf: "center",
                marginLeft: 20,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 15,
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  marginBottom: 5,
                  padding: 10,
                  maxHeight: "1rem",
                  overflow: "hidden",
                  display: "-webkit-box",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  msTextOverflow: "ellipsis",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  maxHeight: "1rem",
                  overflow: "hidden",
                  display: "-webkit-box",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  msTextOverflow: "ellipsis",
                  //   fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: 18,
                  padding: 10,
                }}
              >
                {item.body}
              </div>
              <div
                style={{
                  marginTop: 5,
                  padding: 10,
                  fontWeight: "bold",
                  color: "#DDE6ED",
                }}
              >
                {new Date()
                  .toString()
                  .substring(0, new Date().toString().indexOf("+"))}
              </div>
            </div>
          </Paper>
          <div onClick={() => handleDelete(item.id)} ><CloseIcon style={{padding:10,color:'red',background:'#fff',borderRadius:50}}/></div>
        </div>
      ))}
    </div>
  );
}

export default List;
