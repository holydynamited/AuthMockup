
import {Routes,Route} from 'react-router'
import './App.css'
import {LoginSignup} from './components/LoginSignup/LoginSignup'
import { LogIn } from './components/LoginSignup/LogIn';
import { BaxkgroundMedia } from './components/LoginSignup/BackgroundMedia';

function App() {

  
  

  return (
    <>
    <BaxkgroundMedia/>
     <Routes>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/' element={<LoginSignup/>}/>
     </Routes>
    </>
  )
}

export default App
