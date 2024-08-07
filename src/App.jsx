import { BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
