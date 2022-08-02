
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mobile_recharge from './components/Mobile_recharge';
import Dth_recharge from './components/Dth_recharge';
import './App.css'; 

function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path="/Mobile_Recharge" Exact element={<Mobile_recharge/>}/>
        <Route exact path="/Dth_Recharge" element={<Dth_recharge/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}
export default App;
