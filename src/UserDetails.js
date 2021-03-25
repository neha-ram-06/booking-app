import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserPic from './blue-background.jpg';

import Sidebar from './Sidebar.js';


const UserDetails = () => {
    return (

        <div className="UserDetails-class">


            <div class="container mrContainer shadow-sm p-3 mb-3 bg-white rounded">

                <div class="row" > 

                    {/*column 1*/}
                    <div class="col-4">
                        <Sidebar />
                    </div>
                    <div class="col-8">
                        <Card class="card-ud" style={{ width: '100%', height: '35rem' }}>
                            <Card.Img variant="top" src={UserPic} className="user-pic" />
                            <Card.Body>
                                <Card.Title>User's Name</Card.Title>
                                <Card.Text>
                                    Level:
                            </Card.Text>
                                <Card.Text>
                                    User ID:
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

export default UserDetails;