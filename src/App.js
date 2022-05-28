import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Grades from "./pages/grades/Grades";
import New from "./pages/new/New";
import MyCourses from "./pages/my_Courses/MyCourses.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="courses">
              <Route index element={<List />} />
              <Route path=":userId" element={<Grades />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route> */}
            <Route path="grades">
              <Route index element={<Grades />} />
            </Route>

            <Route path="newEnroll">
              <Route index element={<List />} />
            </Route>

            <Route path="profile">
              <Route index element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
            <Route path="myCourses">
              <Route index element={<MyCourses />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
