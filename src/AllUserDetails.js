import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import meet_room_pic from './booking_room.jpg';
import Sidebar from './Sidebar.js';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import {
    Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import SidebarAdmin from './SidebarAdmin';
import { DropdownButton, MenuItem, Dropdown } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {

    const message = props.message;
    console.log("Message: " + message);

    return (
        <div className="mx-auto modal-50w">
            <Modal
                {...props}
                size="lg"
                dialogClassName="modal-50w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="headingTitle">
                        {message}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mx-auto modal-container">
                        <Form>
                            <FormGroup>
                                <Input type="text" name="userName" id="userName" placeholder="User name" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="userSurname" id="userSurname" placeholder="User surname" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="SelectFloorLevel" id="SelectFloorLevel">
                                    <option value="" disabled selected hidden>Floor Level</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="SelectRole" id="SelectRole">
                                    <option value="" disabled selected hidden>Role</option>
                                    <option>Admin</option>
                                    <option>Regular</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Input type="button" value="SUBMIT" />
                            </FormGroup>
                        </Form>
                    
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    );
}

function DeleteVerticalModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            dialogClassName="modal-50w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="headingTitle">
                    Delete User
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Are you sure you want to delete this user and all their access?
                    The user will no longer have access to application. This will also remove
                    all booking done that belong to this user's identities in the this application.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <div className="modal-container">
                    <Form>
                        <FormGroup style={{ paddingBottom: '0px', marginBottom: '0px', marginRight: '5px', float:'left'}}>
                            <Input type="button" id="CancelBtnAdmin" value="CANCEL" onClick={props.onHide}/>
                        </FormGroup>
                        <FormGroup style={{ paddingBottom: '0px', marginBottom: '0px', float:'left' }}>
                            <Input type="button" value="SUBMIT" />
                        </FormGroup>
                    </Form>
                </div>
            </Modal.Footer>
        </Modal>

    );
}

const AllUserDetails = () => {

    const [userDetails, setuserDetails] = useState(false);

    const [UsertableValues, setUsertableValues] = useState([
        { userId: 1, userName: 'xxx', userSurname: 'yy', floorLevel: '6', role:'Admin' },
        { userId: 2, userName: 'xxx', userSurname: 'yy', floorLevel: '10', role:'Regular' },
        { userId: 3, userName: 'xxx', userSurname: 'yy', floorLevel: '2', role:'Admin' }
    ]);

    const [AddModal, setAddModal] = useState(false);

    const [UpdateModal, setUpdateModal] = useState(false);

    const [DeleteModal, setDeleteModal] = useState(false);


    const [value, setValue] = useState('');
    const handleSelect = (e) => {
        console.log(e);
        setValue(e)
        var OptionSelected = e.trim();
        switch (OptionSelected.toLowerCase()) {
            case "update user":
                return (
                    setUpdateModal(true)
                );
                break;
            case "delete user":
                return (
                    setDeleteModal(true)
                );
                break;
        }
    }

    return (

        <div className="UserDetails-class">

            <div class="container-fluid mrContainer">

                <div class="row" >

                    {/*column 1*/}
                    <div class="col-2">

                        <SidebarAdmin/>

                    </div>
                    {/*column 2*/}
                    <div class="col-9 containerAdmin" style={{padding:"10px"}}>

                        {/* <Card border="light"  class="card-mr" style={{ width: '100%', height: '35rem' }}> */}
                            {/*<Card.Header>
                                <Nav className="wrap" variant="tabs" defaultActiveKey="#show_viewUser">
                                    <div >
                                        <Nav.Item>
                                            <Nav.Link href="#show_viewUser">View User</Nav.Link>
                                        </Nav.Item>
                                    </div>
                                    <div>
                                        <span style={{ float: "right", marginRight: "10px" }}>
                                            <Nav.Item>
                                                <button className="adminIconBtn" onClick={() => setAddModal(true)} ><i class="fa fa-plus-circle"></i></button>
                                            </Nav.Item>
                                        </span>
                                        {/*<span style={{ float: "left" }}>
                                            <Nav.Item>
                                                <button className="adminIconBtn" onClick={() => setUpdateModal(true)} ><i class="fas fa-edit"></i></button>
                                            </Nav.Item>
                                        </span>
                                        <span style={{ float: "right" }}>
                                            <Nav.Item>
                                                <button className="adminIconBtn"> <i class="fas fa-trash-alt"></i></button>
                                            </Nav.Item>
                                        </span>
                                    </div>

                                </Nav>
                            </Card.Header>*/}
                            {/* <Card.Body>
                                <Card.Text> */}
                                    <div className="table-responsive" style={{ paddingTop:'19px', height:'100%'}}>

                                        <div class="add-btn" style={{width: "100%", height:"42px", backgroundColor:'#DBDBDB'}}>
                                            <span style={{ float: "right"}}>
                                                <Nav.Item>
                                                    <button className="adminIconBtn" onClick={() => setAddModal(true)} ><i class="fa fa-plus-circle"></i></button>
                                                </Nav.Item>
                                            </span>
                                        </div>

                                        <Table responsive="sm"style={{ backgroundColor: '#FFFFFF', width: '100%', margin: 'auto', borderRadius:'5px' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ height: '10px' }}>User Id</th>
                                                    <th style={{ width: '200px', height: '10px' }}>Name</th>
                                                    <th style={{ width: '200px' }}>Surname</th>
                                                    <th style={{ height: '10px' }}>Floor Level</th>
                                                    <th style={{ height: '10px' }}>Role</th>
                                                    <th style={{ height: '10px' }} h>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {UsertableValues.map((usertValues) => (
                                                    <tr key={usertValues.userId}>
                                                        <td style={{ height: '10px' }} >{usertValues.userId}</td>
                                                        <td style={{ width: '200px', height: '10px' }}>{usertValues.userName}</td>
                                                        <td style={{ width: '200px', height: '10px' }}>{usertValues.userSurname}</td>
                                                        <td style={{ height: '10px' }} >{usertValues.floorLevel}</td>
                                                         <td style={{ height: '10px' }} >{usertValues.role}</td>
                                                        <td className="SelectUserOption" >
                                                            {/*<Input type="select" name="SelectUserOption" id="SelectUserOption" style={{ width: '18px', height: '22px', margin: 'auto' }}>
                                                                <option value="" disabled selected hidden></option>
                                                                <option value="Update User">Update User</option>
                                                                <option value="Delete User">Delete User</option>
                                                            </Input>*/}
                                                            <DropdownButton id="dropdown-secondary-button" variant="secondary btn-sm"
                                                                onSelect={handleSelect}>
                                                                <Dropdown.Item eventKey="Update User">Update User</Dropdown.Item>
                                                                <Dropdown.Item eventKey="Delete User">Delete User</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                {/* </Card.Text>

                            </Card.Body>
                        </Card> */}

                        <MyVerticallyCenteredModal
                            show={AddModal}
                            onHide={() => setAddModal(false)}
                            message={"Add User"}
                        />

                        <MyVerticallyCenteredModal
                            show={UpdateModal}
                            onHide={() => setUpdateModal(false)}
                            message={"Update User"}
                        />

                        <DeleteVerticalModal
                            show={DeleteModal}
                            onHide={() => setDeleteModal(false)}
                            message={"Delete User"}
                        />

                    </div>
                </div>
            </div>

        </div>

    );
}

export default AllUserDetails;