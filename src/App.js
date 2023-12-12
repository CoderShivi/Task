
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Dashboard from './component/Dashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Dashboard/>} path="/*"/>
        </Routes>
        </BrowserRouter>
    </div>
    // <div
    //   style={{
    //     width: "100%",
    //     backgroundColor: "#ecf0f1",
    //     height: "100%",
    //     display: "flex",
    //     justifyContent: "center",
    //     flexDirection: "column",
    //     flexWrap: "wrap",
    //   }}
    // >
    //   <Dashboard />
    //   <Card />
    //   <List />
    //   <Reader />
    //   <Toggle />
    //   <Feedback />
    // </div>
  );
}

export default App;
