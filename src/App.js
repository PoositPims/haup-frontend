import "./App.css";
import Homepage from "./pages/Homepage";
import classes from "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import EachCar from "./pages/EachCar";
// import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={classes.height}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
        </Routes>
        <Routes>
          <Route path="/eachCar" element={<EachCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
