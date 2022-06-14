import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className='Cont'>
        <Header/>
      </div>
      <div className='Cont'>
        <Body/>
      </div>
      <div className='Cont'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
