import "./App.css";
import { Link, Route, Routes } from "react-router";

function App() {
  const header = (
    <header>
      <Link to="/">Home</Link>
      {` `}
      <Link to="/about">About</Link>
    </header>
  );

  return (
    <Routes>
      <Route
        index
        element={
          <div>
            {header}
            <h1>Home</h1>
          </div>
        }
      />
      <Route
        path="about"
        element={
          <div>
            {header}
            <h1>About</h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
