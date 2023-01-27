import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import DataForm from "./components/DataForm";
import RequiredAuth from "./components/RequiredAuth";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/mainpage"
          element={
            <>
              <RequiredAuth>
                <MainPage />
              </RequiredAuth>
            </>
          }
        />
        <Route
          path="/dataform/:id"
          element={
            <>
              <RequiredAuth>
                <DataForm />
              </RequiredAuth>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
