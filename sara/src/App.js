import './App.css';
import { Route,Routes } from 'react-router-dom';
import Desktop1 from './Components/Desktop1';
import Desktop2 from './Components/Desktop2';
import Desktop3 from './Components/Desktop3';
import Desktop4 from './Components/Desktop4';
import Desktop5 from './Components/Desktop5';
import Desktop6 from './Components/Desktop6';
import Desktop7 from './Components/Desktop7';
import Desktop8 from './Components/Desktop8';
import Desktop9 from './Components/Desktop9';
import Desktop10 from './Components/Desktop10';
import Desktop11 from './Components/Desktop11';


function App() {
  return (
<>
<Routes>
  <Route exact path='/' element={<Desktop1/>}/>
  <Route path='/signup' element={<Desktop2/>}/>
  <Route path='/home' element={<Desktop3/>}/>
  <Route path='/books' element={<Desktop4/>}/>
  <Route path='/contact' element={<Desktop5/>}/>
  <Route path='/6' element={<Desktop6/>}/>
  <Route path='/7' element={<Desktop7/>}/>
  <Route path='/8' element={<Desktop8/>}/>
  <Route path='/9' element={<Desktop9/>}/>
  <Route path='/10' element={<Desktop10/>}/>
  <Route path='/11' element={<Desktop11/>}/>

</Routes>
</>
  );
}

export default App;
