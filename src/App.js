import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SignIn from './SignIn'; 

import Navbar from './Navbar'; //importing the Navbar that we have exported in Navbar.js
import MeetingRoomList from './MeetingRoomList';
import UserDetails from './UserDetails.js';
import Sidebar from './Sidebar.js';
import AdminPage from './AdminPage.js';
import AllUserDetails from './AllUserDetails';

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
                  <Route exact path='/AdminPage'>
                    <Navbar/>
                    <AdminPage/>
                  </Route>
                  <Route exact path='/AllUserDetails'>
                    <Navbar/>
                    <AllUserDetails/>
                  </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
