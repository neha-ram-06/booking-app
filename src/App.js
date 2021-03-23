import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SignIn from './SignIn'; 

import Navbar from './Navbar'; //importing the Navbar that we have exported in Navbar.js
import MeetingRoomList from './MeetingRoomList';
import UserDetails from './UserDetails.js';

import Sidebar from './Sidebar.js';

import BookedRooms from './BookedRooms.js';

function App() {
  return (
    <Router>
      <div className="App">
      
        <div className="content">
        

            <Switch>

                <Route exact path="/">
                  {/*<Navbar/>*/}
                    <SignIn/>
                  </Route>

                  <Route exact path='/UserDetails'>
                    <Navbar isActive/>
                    <UserDetails/>
                  </Route>

                  <Route exact path='/MeetingRoomList'>
                    <Navbar isActive/>
                    <MeetingRoomList/>
                  </Route>

                   {/*<Route exact path='/Booked_Rooms'>
                   <Navbar isActive/>
                    <MeetingRoomList booked/>
                    
                  </Route>*/}
              

               {/* <Route exact path='/Available_Rooms'>
                   <Navbar isActive/>
                    <MeetingRoomList/>
                    
                  </Route> */}

            </Switch>
 

        </div>
      </div>
    </Router>
  );
}

export default App;
