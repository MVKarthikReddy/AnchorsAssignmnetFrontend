import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import ResultPage from './components/ResultPage';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'


const LandingPage = () => { 
  return(
    <>
      <Navbar />
      <MainPage />
    </>
  )
}
const RequestPage = () => {
  return(
    <>
      <Navbar />
      <ResultPage />
    </>
  )
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={LandingPage()}/>
            <Route path='/request-call' element={RequestPage()} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
