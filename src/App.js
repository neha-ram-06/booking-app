import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn';

import NavbarStatus from './NavbarStatus'; //importing the Navbar that we have exported in Navbar.js
import MeetingRoomList from './MeetingRoomList';
import UserDetails from './UserDetails.js';
import Sidebar from './Sidebar.js';
import AdminPage from './AdminPage.js';
import AllUserDetails from './AllUserDetails';
import AllRoomDetails from './AllRoomDetails';

import BookedRooms from './BookedRooms.js';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route exact path='/UserDetails'>
              <NavbarStatus/>
              <UserDetails />
            </Route>
            <Route exact path='/MeetingRoomList'>
              <NavbarStatus/>
              <MeetingRoomList />
            </Route>
            <Route exact path='/AdminPage'>
              <NavbarStatus/>
              <AdminPage />
            </Route>
            <Route exact path='/AllUserDetails'>
              <NavbarStatus/>
              <AllUserDetails />
            </Route>
            <Route exact path='/Booked_Rooms'>
              <NavbarStatus/>
              <MeetingRoomList booked />
            </Route>
            <Route exact path='/Available_Rooms'>
              <NavbarStatus/>
              <MeetingRoomList />
            </Route>
            <Route exact path='/AllRoomDetails'>
              <NavbarStatus/>
              <AllRoomDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
