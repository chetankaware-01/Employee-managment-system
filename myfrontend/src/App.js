import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListComponents';
import { BrowserRouter,Outlet,Route,Routes } from 'react-router-dom';
import Navbar from './components/headerNav';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <>
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ListItems/>}/>
      <Route path='/employees' element={<ListItems/>}/>
      <Route path='/add-employee' element={<AddEmployee/>}/>
      <Route path='/edit-employees/:id' element={<AddEmployee/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
