// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//pages & components
import Form from "./components/form/Form";
import List from "./components/list/List";
function App() {
  return (
    <div className='App'>
      {/* <Weather /> */}
      <Form />
      <List />
    </div>
  );
}

export default App;
