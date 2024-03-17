

import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home  from './components/dashboard/Overview'; 
import Services from './components/dashboard/Services';
import Settings from './components/dashboard/Settings';
import Overview from './components/dashboard/Overview';



function App() {
  return( 
  <>
  
 
  <BrowserRouter>
      <Navbar />
     <Routes>
     <Route path="/dashboard/home" element={<Overview />} />  
     <Route path="/dashboard/services" element={<Services  />} />  
     <Route path="/dsahboard/settings" element={<Settings/>} />  
     
       
   </Routes>
    </BrowserRouter>
       

    </>
  )
}

export default App
