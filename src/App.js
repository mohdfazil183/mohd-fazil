import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import { Switch,Route, BrowserRouter } from 'react-router-dom';
import CV from './component/CV';
import Project from './component/Project'
import Contact from './component/Contact'



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
             
    {/* <!-- Start: Projects Horizontal --> */}
   <Project />
    {/* <!-- End: Projects Horizontal -->
    <!-- Start: Contact Form Clean --> */}
    <Contact />
    {/* <!-- End: Contact Form Clean -->
    <!-- Start: Footer Basic --> */}
          </Route>
        </Switch>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
