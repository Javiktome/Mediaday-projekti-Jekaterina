import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EventPage from './pages/EventPage';
import PromoVideo from './pages/PromoVideo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/MainPage/HomePage';
import Header from './components/MainPage/Header';
import Footer from './components/MainPage/Footer';
import Calender from './components/calender/Calender';
import Speakersdet from './components/MainPage/Speakersdet';
import Stream from './components/MainPage/Stream';
function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>

          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={HomePage} />
          <Route path="/promovideo">
            <PromoVideo />
          </Route>
          <Route path="/event/:id" children={<EventPage />} />
          <Route exact path='/calender' component={Calender} />
          <Route path="/speaker">{Speakersdet}</Route>
          <Route path="/stream">{Stream}</Route>

        </Switch>


      </div>
    </Router>


  );
}

export default App;
