import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Primo from './components/1Primo';
import Secondo from './components/2Secondo';
import Terzo from './components/3Terzo';
import Quarto from './components/4Quarto';

import Quinto from './components/5Primo';
import Sesto from './components/6Primo';
import Settimo from './components/7Primo';

import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Routes,
  Outlet,
  useRouteError,
  ScrollRestoration
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <div className="d-flex flex-column row mx-auto my-3" style={{ height: "100%" }}>
          
        <h1>siamo qui</h1>
        <Router>  

          <Routes>  
          <Route path='/' element={<Primo/>}/>
          {/*
          <Route path="/primo" element={ <Primo/> } >
            <Route path="primo1" element={ <Secondo/> } />
            <Route path="primo2" element={ <Quarto/> } />
            <Route path='primo3' element={ <Terzo/> } />
          </Route>
          <Route path="/primo/secondo/:edit/*" element={ <Quarto/> } />
          */}
          </Routes>
        </Router>

      </div>

    </div>
  );
}

export default App;
