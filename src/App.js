import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleBlogs from "./components/Pages/Blogs/SingleBlogs";
import Footer from "./components/Pages/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Login/Register/Register";
import PostBlog from "./components/Pages/postBlog/PostBlog";
import SharedNavigation from "./components/Pages/SharedNavigation/SharedNavigation";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Hooks/AuthProvider";

function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
        <SharedNavigation></SharedNavigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route
            path="bookingDetails/:id"
            element={
              <PrivateRoute>
                <SingleBlogs />
              </PrivateRoute>
            }
          ></Route>

          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route
            path="blog"
            element={
              <PrivateRoute>
                <PostBlog />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
