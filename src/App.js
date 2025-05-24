import { Route, Routes, useLocation } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Item from "./pages/Item";
import NavBar2 from "./components/NavBar2";
import ScrollToTop from "./components/ScrollToTop";
import Likes from "./pages/Likes";
import Inbox from "./pages/Inbox";
import Chat from "./pages/Chat";
import Post from "./pages/Post"

function App() {
  const location = useLocation();
  const showMainNavbar = ["/item/id", "/checkout", "/likes", "/inbox", "/post"].includes(
    location.pathname
  );

  return (
    <>
      <ScrollToTop />
      {showMainNavbar && <NavBar2 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/id" element={<Item />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/inbox/1" element={<Chat />} />
        <Route path="/post" element={<Post/>} />
      </Routes>
    </>
  );
}

export default App;
