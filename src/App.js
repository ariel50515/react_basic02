import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AbList from './pages/ab-list';
import Tmp from './pages/Tmp';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/list" element={ <AbList /> } />
          <Route path="/" element={ <AbList /> } />

          <Route path="/tmp/:sid" element={ <Tmp /> } />
          <Route path="/tmp" element={ <Tmp /> } />
          
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
