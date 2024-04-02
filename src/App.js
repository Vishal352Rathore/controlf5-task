import './App.css';
import HeaderBanner from './components/HeaderBanner';
import BannerSecond from './components/BannerSecond';
import YourGoal from './components/YourGoal';
import FinancialPlanning from './components/FinancialPlanning';
import RealResults from './components/RealResults';
import ConnectWithUs from './components/ConnectWithUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <HeaderBanner/>
    <BannerSecond/>
    <YourGoal/>
    <FinancialPlanning/>
    <RealResults/>
    <ConnectWithUs/>
    <Footer/>
    </div>
  );
}

export default App;
