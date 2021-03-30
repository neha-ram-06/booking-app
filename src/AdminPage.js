import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserPic from './blue-background.jpg';
import SidebarAdmin from './SidebarAdmin.js';

import {
    Form, FormGroup, Label, Input, FormText
} from 'reactstrap';


const AdminPage = () => {
    return ( 
         <div className="UserDetails-class" >
            <div className="container-fluid">
                <div className="row no-gutters">
                    {/*column 1*/}
                    <div className="col-2">
                        <SidebarAdmin />
                    </div>
                    <div className="col-10" style={{ margin: 'auto',padding: '10px'}}>
                        <div className="UserProfileHeader" >
                            <div class="row" style={{ padding: '15px', margin: '15px'}}>
                                <div class="col-4">
                                    <i class="fas fa-user-circle fa-8x" style={{ color: '#767676' }}></i>
                                </div>
                                <div class="col-6">
                                    <h1>John Doe</h1>
                                    <h3> John.Doe@mu.ey.com</h3>
                                </div>
                            </div>
                        </div>
                        <div className="UserProfileBody" >
                            <div class="row" style={{ padding: '5px', margin: '5px'}}>
                                <span class="col-4">
                                    <h4>Name</h4>
                                </span>
                                <span class="col-6">
                                    <Form>
                                        <FormGroup>
                                            <Input type="text" name="userName" id="userName" />
                                        </FormGroup>
                                    </Form>
                                </span>
                            </div>
                            <div class="row" style={{ padding: '5px', margin: '5px' }}>
                                <span class="col-4">
                                    <h4>Surname</h4>
                                </span>
                                <span class="col-6">
                                    <Form>
                                        <FormGroup>
                                            <Input type="text" name="userSurname" id="userSurname" />
                                        </FormGroup>
                                    </Form>
                                </span>
                            </div>
                            <div class="row" style={{ padding: '5px', margin: '5px' }}>
                                <span class="col-4">
                                    <h4>User id</h4>
                                </span>
                                <span class="col-6">
                                    <Form>
                                        <FormGroup>
                                            <Input type="text" name="userid" id="userid" />
                                        </FormGroup>
                                    </Form>
                                </span>
                            </div>
                            <div class="row" style={{ padding: '5px', margin: '5px' }}>
                                <span class="col-4">
                                    <h4>Floor Level</h4>
                                </span>
                                <span class="col-6">
                                    <Form>
                                        <FormGroup>
                                            <Input type="text" name="UserFloorLevel" id="UserFloorLevel" />
                                        </FormGroup>
                                    </Form>
                                </span>
                            </div>
                             <div class="row" style={{ padding: '5px', margin: '5px' }}>
                                <span class="col-4">
                                    <h4>Role</h4>
                                </span>
                                <span class="col-6">
                                    <Form>
                                        <FormGroup>
                                            <Input type="text" name="UserRole" id="UserRole" />
                                        </FormGroup>
                                    </Form>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    
    );
}
 
export default AdminPage;