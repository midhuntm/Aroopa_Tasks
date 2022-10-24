import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Tasks } from './Components/Tasks';
import { Task1 } from './Components/Task1';
import {Task3} from './Components/Task3';
import { Task6 } from './Components/Task6';
import { Task2 } from './Components/Task2';
import { Task4 } from './Components/Task4';
import { Task5 } from './Components/Task5';


function App() {
  return (
    <div>
          <BrowserRouter>
              <Routes>
                    <Route path='/' element={<Tasks/>}/>
                    <Route path='/Task1' element={<Task1/>}/>
                    <Route path='/Task2' element={<Task2/>}/>
                    <Route path='/Task3' element={<Task3/>}/>
                    <Route path='/Task4' element={<Task4/>}/>
                    <Route path='/Task5' element={<Task5/>}/>
                    <Route path='/Task6' element={<Task6/>}/>
                    
              </Routes>
          </BrowserRouter>
          
          
    </div>
  );
}

export default App;
