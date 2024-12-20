import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Missions from "./pages/Missions";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Main from "./pages/Main";
import LaunchesList from "./components/ApiFetch";
import MissionDetails from "./pages/MissionDetails";



function App() {
  return (
    <div>

      <Header />
      

     
      

      <Routes>
           <Route path="/" element={<Main />} />
           <Route  path="/missions" element={<><LaunchesList /><Missions /></>} />
           <Route path="/missions/:id" element={<MissionDetails />} />
            <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
        </Routes>


    </div>
  );
}

export default App;
