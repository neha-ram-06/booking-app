
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Sidebar.js';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import BookedRooms from './BookedRooms.js';
import AvailableRooms from './AvailableRooms.js';

import background from './grey_background.jpg';



const MeetingRoomList = () => {


    return (

        <div className="UserDetails-class">
            <div className="container-fluid">
                <div className="row no-gutters">
                    {/*column 1*/}
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-9">

                        <div className="div-mr" class="border" style={{ width: '100%', height: '35rem', padding: '5px', borderRadius: '2px', marginTop: '6px' }}>

                            <Tabs defaultActiveKey="available_rooms" transition={false} id="rooms_tabs" className="tab-mr " >

                                <Tab eventKey="available_rooms" title="Available" href="/Available_Rooms">
                                    <AvailableRooms />
                                </Tab>

                                <Tab eventKey="booked_rooms" title="Booked">
                                    <BookedRooms />
                                </Tab>

                            </Tabs>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default MeetingRoomList;