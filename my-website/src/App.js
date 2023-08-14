import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Header/>
        <Home/>
      <Routes>
        
        <Route path='/' element={<Header/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
      </Router> */}
      <Header/>
      <Home/>
     <About/>
     <Services/>
    </div>
  );
}

export default App;
