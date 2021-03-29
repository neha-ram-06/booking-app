import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserPic from './blue-background.jpg';
import SidebarAdmin from './SidebarAdmin.js';

const AdminPage = () => {
    return ( 
        <div className="UserDetails-class">
            <div className="container-fluid">
                <div className="row no-gutters">
                    {/*column 1*/}
                    <div className="col-2">
                        <SidebarAdmin/>
                    </div>
                    <div className="col-9">
                        <Card className="card-ud" style={{ width: '100%', height: '35rem' }}>
                            <Card.Img variant="top" src={UserPic} className="user-pic" />
                            <Card.Body>
                                <Card.Title>Admin's Name</Card.Title>
                                <Card.Text>
                                    Level:
                            </Card.Text>
                                <Card.Text>
                                    Admin ID:
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                {/*<small className="text-muted">Last updated 3 mins ago</small>*/}
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AdminPage;