import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SignIn from './SignIn'; 

import Navbar from './Navbar'; //importing the Navbar that we have exported in Navbar.js
import MeetingRoomList from './MeetingRoomList';
import UserDetails from './UserDetails.js';

import Sidebar from './Sidebar.js';

function App() {
  return (
    <Router>
      <div className="App">
      
        <div className="content">
        

            <Switch>
              
                <Route exact path="/">
                    <SignIn/>
                  </Route>

                  <Route exact path='/UserDetails'>
                    <Navbar/>
                    <UserDetails/>
                  </Route>

                  <Route exact path='/MeetingRoomList'>
                    <Navbar/>
                    <MeetingRoomList/>
                  </Route>

 
              
            </Switch>
 

        </div>
      </div>
    </Router>
  );
}

export default App;
