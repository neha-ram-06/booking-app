import Card from 'react-bootstrap/Card';

import meet_room_pic from './booking_room.jpg';

const Sidebar = () => {
    return (
        <div className="Sidebar-class"> {/*main div*/}

            <div class="container mrContainer" style={{paddingTop:'15px'}}>

                <Card className="card-1" style={{ width: '100%', height: '35rem', border:'0px'}}>

                    <Card style={{ width: '9.5rem', height: '8rem', textAlign: 'center', fontSize: '0.8em', padding:'auto',margin:'auto', marginBottom:'6px' }}>
                        <Card.Body>
                            <i class="fas fa-user-cog fa-2x" style={{ color: '#767676' }}></i>
                            <p></p>
                            <Card.Link href="/UserDetails"><Card.Title>View Profile</Card.Title></Card.Link>
                        </Card.Body>
                    </Card>

                     <Card style={{ width: '9.5rem', height: '8.5rem', textAlign: 'center', fontSize: '0.8em', padding:'auto',margin:'auto', marginTop:'6px',marginBottom:'6px' }}>
                        <Card.Body>
                            <i class="fas fa-user-circle fa-3x" style={{ color: '#767676' }}></i>
                            <p></p>
                            <Card.Link href="/MeetingRoomList"><Card.Title>Meeting room</Card.Title></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '9.5rem', height: '8rem', textAlign: 'center', fontSize: '0.8em', padding:'auto',margin:'auto', marginTop:'6px' }}>
                       <Card.Body>
                            <i class="fas fa-key fa-2x" style={{ color: '#767676' }}></i>
                            <p></p>
                            <Card.Link href="/viewbooking"><Card.Title>View Booking</Card.Title></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card.Img variant="top" src={meet_room_pic} style={{ height: 'auto' }} />
                </Card>



            </div>



        </div>
    
    );
}

export default Sidebar;