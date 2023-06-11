import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Info from './Components/Info';
import MainPage from './Components/MainPage';
import ChartPage from './Components/ChartPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/info' element={<Info />} />
        <Route path='/chart' element={<ChartPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
