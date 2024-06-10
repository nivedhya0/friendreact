import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddFriend from './components/AddFriend';
import ViewAllFriend from './components/ViewAllFriend';

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<AddFriend/>}/>
  <Route path="/view" element={<ViewAllFriend/>}/>
  </Routes>
    
  
  </BrowserRouter>
  
  );
}

export default App;
