
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Direct from './Components/Direct';
import D1 from './Components/Data/D1';
import D2 from './Components/Data/D2';
import D3 from './Components/Data/D3';
import D4 from './Components/Data/D4';
function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <Routes>
          <Route exact path='/' element={<Direct/>}/>
          <Route  path="/D1" element={<D1/>} />
          <Route  path="/D2" element={<D2/>} />
          <Route  path="/D3" element={<D3/>} />
          <Route  path="/D4" element={<D4/>} />
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
