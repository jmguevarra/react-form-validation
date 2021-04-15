import './App.css';
import Header from './components/header';
import Home from './components/pages/home';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <div className="Wrapper">
       <Header/>
        <Home/>
     </div>
  );
}

export default App;
