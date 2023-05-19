import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Navbar from './Components/Navbar1/Navbar1';
import Footer from './Components/Footer2/Footer2';
import Layout from './Components/Layout1/Layout';


function App() {
  return (
    <div className="">
        <BrowserRouter >
      <Navbar />
     <Routes>

       <Route >
        <Route path="/" element={<Layout />} />
       </Route>

       <Route path="/signup" element={<Layout />} />
       <Route path="/joined_as_pro" element={<Layout />} />

     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
