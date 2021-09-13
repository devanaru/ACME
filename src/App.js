import {Route} from "react-router-dom";
import Navigation from "./Components/Navigation";
import "./App.css";
import Home from "./Components/parts/Home";
import About from "./Components/parts/About";
import Updates from "./Components/parts/Updates";
import Spaces from "./Components/parts/Spaces";
function App() {
  return (
    <div >
       <Navigation />
         <Route path='/' exact>
            <Home /> 
         </Route>
         <Route path='/About' >
            <About /> 
         </Route>
         <Route path='/Updates' >
            <Updates /> 
         </Route>
         <Route path='/Spaces' >
            <Spaces /> 
         </Route>
    </div>
  );
}

export default App;
