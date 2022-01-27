import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Login/Register/Register';
import SharedNavigation from './components/Pages/SharedNavigation/SharedNavigation';
function App() {
  return (
    <div className="">
     
     <BrowserRouter>
     <SharedNavigation></SharedNavigation>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="login" element={<Login></Login>}></Route>
       <Route path="register" element={<Register></Register>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
