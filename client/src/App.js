import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Detail from "./pages/detail/Detail";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
