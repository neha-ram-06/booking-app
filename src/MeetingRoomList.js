
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Sidebar.js';


import BookedRooms from './BookedRooms.js';
import AvailableRooms from './AvailableRooms.js';





const MeetingRoomList = ({available, booked}) => { //booked  and available are props


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

                                <Card className="card-mr " style={{ width: '100%', height:'35rem' }}>
                                    <Card.Header>
                                        <Nav variant="tabs"   defaultActiveKey={1}/*onSelect={handleSelect}*/ >
                                            <Nav.Item className="available" >
                                                <Nav.Link href='/Available_Rooms' eventkey={1}>Available</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link href="/Booked_Rooms" eventkey={2}>Booked</Nav.Link>
                                            </Nav.Item>

                                    {/* <Nav.Item>
                                                <Nav.Link href="#disabled" disabled>S
                                                Disabled
                                                </Nav.Link>
                                           </Nav.Item>*/}

                                </Nav>
                            </Card.Header>


                            <Card.Body>
                            
                                {(booked && !available) && <BookedRooms/>}
                                {(available && !booked) && <AvailableRooms/>}
                                {(!available && !booked) && 

                                    
                                        <h2>View Available and Booked Meeting Rooms</h2>
                                    
                                    }
                            </Card.Body>
      

                        </Card>

              

                    </div>
                </div>
            </div>

        </div>

    );
}

export default MeetingRoomList;