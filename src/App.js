import React from "react";
import './style.css'
import PageMain from "./pages/Main/components/PageMain";
import {Routes, Route} from 'react-router-dom'
import ToDoList from "./pages/ToDo List/components/ToDoList";

function App() {
  return (
    <div className="_container">
      <Routes>
        <Route path="/" element={<PageMain/>}/>
        <Route path="/todo" element={<ToDoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
