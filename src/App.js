import './App.css';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom'
import Password from './Pages/Password';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Password/>}/>
        {/* <Route path='/home' element={<Home/>}/> */}

      </Routes>

    </div>
  );
}

export default App;
