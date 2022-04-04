import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Reviews from './Components/Reviews/Reviews'
import Dashboard from './Components/Dashboard/Dashboard'
import Blogs from './Components/Blogs/Blogs'
import About from './Components/About/About'
import Error from './Components/Error/Error'
function App() {
  return (
    <div className=" bg-[#0a0200] bg-fixed bg-blend-soft-light bg-[url('https://wallpaper.dog/large/10778246.jpg')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
