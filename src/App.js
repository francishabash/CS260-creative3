import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import History from "./pages/History"
import Images from "./pages/Images"
import People from "./pages/People"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="index.html" element={<Home />} />
          <Route path="about.html" element={<About />} />
          <Route path="history.html" element={<History />} />
          <Route path="images.html" element={<Images />} />
          <Route path="people.html" element={<People />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
