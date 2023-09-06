import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path='/Singup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
