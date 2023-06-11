import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Info from './Components/Info';
import Pie from './Components/Pie.tsx';
import MainPage from './Components/MainPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/info' element={<Info />} />
        <Route path='/chart' element={<Pie />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
