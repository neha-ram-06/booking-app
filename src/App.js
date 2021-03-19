import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SignIn from './SignIn'; 

import Navbar from './Navbar'; //importing the Navbar that we have exported in Navbar.js
import MeetingRoomList from './MeetingRoomList';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <div className="content">
            <Switch>
              <Route exact path="/">
                <SignIn/>
              </Route>

              <Route exact path='/MeetingRoomList'>
                <MeetingRoomList/>
              </Route>
              
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
