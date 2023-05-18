
import './App.css';
import React,{useState} from 'react';
import Footer from './componants/Footer';
import Home from './componants/Home';
import About from './componants/About';
import Navbar from './componants/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Error404 from './componants/Error404';
import Blog from './componants/Blog';
import BlogGridSidebar from './componants/BlogGridSidebar';
import Portofolio from './componants/Portofolio';
import Contact from './componants/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactForm from './componants/ContactForm';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = (e) => {
    e.preventDefault()
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} toggleMode={(e)=>toggleMode(e)}/>
      <Routes>
        <Route path='/' element={<Home isDarkMode={isDarkMode}/>}></Route>
        <Route path='/About' element={<About isDarkMode={isDarkMode}/>}></Route>
        <Route path='/Blog' element={<Blog isDarkMode={isDarkMode}/>}></Route>
        <Route path='/BlogGridSidebar' element={<BlogGridSidebar isDarkMode={isDarkMode}/>}></Route>
        <Route path='/Portofolio' element={<Portofolio isDarkMode={isDarkMode}/>}></Route>
        <Route path='/Contact' element={<Contact isDarkMode={isDarkMode}/>}></Route>
        <Route path='/ContactForm' element={<ContactForm isDarkMode={isDarkMode}/>}></Route>
        <Route path='*' element={<Error404 isDarkMode={isDarkMode}/>}></Route>
      </Routes>
      <Footer isDarkMode={isDarkMode}/>
    </BrowserRouter>
  );
}

export default App;
