
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import BodyMain from './components/BodymainComponent';
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import Catalogue from './pages/CataloguePage';
import Deal from './pages/ActiveDealPage';
import ProductProfilePage from './pages/ProductProfilePage';
import DealSetting from './pages/DealSettingPage';

function App() {
  return (
    <Router className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<BodyMain/>} />
        <Route path="/catalogue" element={<Catalogue/>} />
        <Route path="/ActiveDeal/:dealid" element={<Deal/>} />
        <Route path="/ProductProfile/:productid" element={<ProductProfilePage/>} />
        <Route path="/DealSetting/:dealid" element={<DealSetting/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
