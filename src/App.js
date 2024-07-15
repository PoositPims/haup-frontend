import "./App.css";
import Homepage from "./pages/Homepage";
import classes from "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import EachCar from "./pages/EachCar";
import AvailableCar from "./pages/AvailableCar";
import NotAvailableCar from "./pages/NotAvailableCar";
// import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={classes.height}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/each-car" element={<EachCar />} />
          <Route path="/available-car" element={<AvailableCar />} />
          <Route path="/not-available" element={<NotAvailableCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
