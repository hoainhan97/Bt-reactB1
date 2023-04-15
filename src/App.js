import logo from './logo.svg';
import './App.css';
import Header from './BaiTapThucHanhLayOut/Header';
import Banner from './BaiTapThucHanhLayOut/Banner';
import CardItem from './BaiTapThucHanhLayOut/CardItem';
import Footer from './BaiTapThucHanhLayOut/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <CardItem/>
      <Footer/>
    </div>
  );
}

export default App;
