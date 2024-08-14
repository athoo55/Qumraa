
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Photographers from './pages/Photographers';
import PhotographerDetails from './pages/PhotographersDetils';
import Booking from './components/Booking';
import axios from 'axios';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Detils from './pages/Detils';

function App() {
  return (
    <div className="App  w-full h-screen">
          
          <BrowserRouter>
          <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />

         <Route path='/category' element={<Category/>} />
         {/* <Route path="/photographers" element={<Photographers />} /> */}
        <Route path="/" exact component={Photographers} />
      
         <Route path="/photographers" element={<Photographers />} />
         <Route path="/photographer/:id" element={<PhotographerDetails />} />
         <Route path="/book/:id" element={<Booking />} />
         </Routes>
          </BrowserRouter>
    {/* <BrowserRouter>
    <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/Category' element={<Category/>}/>
          <Route path='/Areas' element={<Areas/>}/>
          <Route path='/Photograohers' element={<Photograohers />}/>
          <Route path='/Footer' element={<Footer/>}/>
    </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
