import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages & components
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import Detail from "./pages/detail/Detail";
import Navbar from "./components/Navbar";
function App() {
  const { user } = useAuthContext();
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={user ? <Home /> : <Navigate to='/login' />}
            />
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate to='/' />}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to='/' />}
            />
            <Route
              path='/create'
              element={user ? <Create /> : <Navigate to='/login' />}
            />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
