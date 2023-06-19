import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Info from './pages/Info';
import MainPage from './pages/MainPage';
import ChartPage from './pages/ChartPage';
import Admin from './pages/Admin';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/info' element={<Info />} />
        <Route path='/chart' element={<ChartPage />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
