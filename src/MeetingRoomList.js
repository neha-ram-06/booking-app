import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css';

import meet_room_pic from './booking_room.jpg';

import Sidebar from './Sidebar.js';

//testing commit 
const MeetingRoomList = () => {
    return ( 

        <div className="MRList">

            <div class="container mrContainer">

                        <div class="row" > 

                        {/*column 1*/}
                        <div class="col-4">

                        <Sidebar/>


                        


                        </div>





                            {/*column 2*/}
                            <div class="col-8">

                                <Card class="card-mr" style={{ width: '100%', height:'35rem' }}>
                                    <Card.Header>
                                        <Nav variant="tabs" defaultActiveKey="#show_available_meeting_rooms">
                                            <Nav.Item>
                                                <Nav.Link href="#show_available_meeting_rooms">Available</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="#show_booked_meeting_rooms">Booked</Nav.Link>
                                            </Nav.Item>

                                           {/* <Nav.Item>
                                                <Nav.Link href="#disabled" disabled>
                                                Disabled
                                                </Nav.Link>
                                           </Nav.Item>*/}

                                        </Nav>
                                    </Card.Header>

                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>


                                
                            </div>











                        </div>
                         



  












            </div>




            
        </div>
        
     );
}
 
export default MeetingRoomList;