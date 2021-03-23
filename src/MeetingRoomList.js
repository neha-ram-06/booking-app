
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Sidebar.js';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import BookedRooms from './BookedRooms.js';
import AvailableRooms from './AvailableRooms.js';





const MeetingRoomList = () => { 


    return (

        <div className="MRList">

            <div class="container mrContainer">

                <div class="row" >

                    {/*column 1*/}
                    <div class="col-4">

                        <Sidebar />

                    </div>
                    {/*column 2*/}
                    <div class="col-8">

                            <div className ="div-mr" class="border" style={{ width: '100%', height:'35rem', padding:'5px', borderRadius:'2px' }}>

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