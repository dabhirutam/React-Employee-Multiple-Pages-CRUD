import './App.css';
import AddData from './Components/AddData';
import ViewData from './Components/ViewData';
import EditData from './Components/EditData';
import ViewPerson from './Components/ViewPerson';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewData />} />
          <Route path="/AddData" element={<AddData />} />
          <Route path="/EditData/:id" element={<EditData />} />
          <Route path="/ViewPerson/:id" element={<ViewPerson />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
