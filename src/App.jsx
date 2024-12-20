import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import ProfilePage from "./components/ProfilePage";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
        {/*<MyFooter />*/}
      </BrowserRouter>
    </>
  );
}

export default App;
