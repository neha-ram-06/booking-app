import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css';

import meet_room_pic from './booking_room.jpg';

const Sidebar = () => {
    return ( 
        <div className="Sidebar-class"> {/*main div*/}

                    <div class="container mrContainer">

                                <Card className="card-1" style={{ width: '100%', height:'35rem' }}>

                                
                                    <Card.Body style={{height:'20%', textAlign:'center', fontSize:'1.5em'}}>
                                        <Card.Link href="/">Sign-In Page</Card.Link>

                                    </Card.Body>


                                    <Card.Body style={{height:'20%', textAlign:'center', fontSize:'1.5em'}}>
                                        <Card.Link href="/MeetingRoomList">Meeting Room List</Card.Link>

                                    </Card.Body>

                                    <Card.Body style={{height:'20%', textAlign:'center', fontSize:'1.5em'}}>
                                        <Card.Link href="#">View Booking</Card.Link>

                                    </Card.Body>

                                    <Card.Img variant="top" src={meet_room_pic} style={{height:'auto'}}/>
                                </Card>


                       
                    </div>
        
 
        
        </div>
     );
}
 
export default Sidebar;