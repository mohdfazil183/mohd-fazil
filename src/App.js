import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import { Switch,Route, BrowserRouter } from 'react-router-dom';
import CV from './component/CV';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <a id="myBtn" href="#top">Top</a>
        <Switch >
          <Route path="/cv">
            <CV />
          </Route>
          <Route path="/" extact >
            <Header />
            <Main />
          </Route>
        </Switch>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
