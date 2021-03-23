import Card from 'react-bootstrap/Card';

import meet_room_pic from './booking_room.jpg';

const SidebarAdmin = () => {
    return ( 
        <div className="Sidebar-class"> {/*main div*/}

            <div class="container mrContainer">

                <Card className="card-1" style={{ width: '100%', height: '35rem' }}>


                    <Card.Body style={{ height: '20%', textAlign: 'center', fontSize: '1.5em' }}>
                        <Card.Link href="/">Manage Admin</Card.Link>

                    </Card.Body>


                    <Card.Body style={{ height: '20%', textAlign: 'center', fontSize: '1.5em' }}>
                        <Card.Link href="/AllUserDetails">Manage User</Card.Link>

                    </Card.Body>

                    <Card.Body style={{ height: '20%', textAlign: 'center', fontSize: '1.5em' }}>
                        <Card.Link href="#">Manage room</Card.Link>

                    </Card.Body>

                    <Card.Img variant="top" src={meet_room_pic} style={{ height: 'auto' }} />
                </Card>



            </div>



        </div>
    );
}
 
export default SidebarAdmin;