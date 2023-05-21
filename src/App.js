import Home from "./Components/view/Home";
import {NavLink,  Route, Routes } from "react-router-dom";
import About from "./Components/view/About";
import Business from "./Components/view/Business";
import Services from "./Components/view/Services";

import {TfiMenuAlt} from "react-icons/tfi";


const App = () => {
  return(
     <div>

       <div className="bg-slate-300 h-auto py-3">
            <div className="flex items-center justify-between mx-10 md:mx-6">
                <div>
                    <h1 className="text-blue-900 text-xl font-bold">ATOM</h1>
                </div>
                <div className="">
                    <ul className="flex items-center space-x-5">
                        <li><NavLink to="/" className={({isActive}) => isActive ? "text-green-600 font-bold" : null }>Home</NavLink></li>
                        <li><NavLink to="/services" className={({isActive}) => isActive ? "text-green-600 font-bold" : null } >Services</NavLink></li>                 
                        <li><NavLink to="/business" className={({isActive}) => isActive ? "text-green-600 font-bold" : null } >Business</NavLink></li>
                        <li><NavLink to="/about" className={({isActive}) => isActive ? "text-green-600 font-bold" : null } >About</NavLink></li>
                    </ul>
                </div>
                <div className="md:hidden ">
                    <TfiMenuAlt/>
                </div>
            </div>
       </div>

        
    


      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="business" element={<Business/>}/>
          <Route path="about" element={<About/>}/>
          
      </Routes>
     </div>
    )
}

export default App;