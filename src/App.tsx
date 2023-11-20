import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import StudentCalendar from "./pages/StudentCalendar/StudentCalendar";
import PostPage from "./pages/PostPage/PostPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ul>
                <Link to="/calendar">
                  <li>Calendar</li>
                </Link>
                <Link to="/post">
                  <li>Post</li>
                </Link>
              </ul>
            }
            path="/"
          />
          <Route element={<StudentCalendar />} path="/calendar" />
          <Route element={<PostPage />} path="/post" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
