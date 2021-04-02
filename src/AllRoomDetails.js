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
                                <Input type="text" name="roomName" id="roomName" placeholder="Room name" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="SelectFloorLevel" id="SelectFloorLevel">
                                    <option value="" disabled selected hidden>Floor Level</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
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
                    Delete Room
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Are you sure you want to delete this room and all their booking?
                    This will also remove all booking done that belong to this room's
                    identities in the this application.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <div className="modal-container">
                    <Form>
                        <FormGroup style={{ paddingBottom: '0px', marginBottom: '0px', marginRight: '5px', float: 'left' }}>
                            <Input type="button" id="CancelBtnAdmin" value="CANCEL" onClick={props.onHide} />
                        </FormGroup>
                        <FormGroup style={{ paddingBottom: '0px', marginBottom: '0px', float: 'left' }}>
                            <Input type="button" value="SUBMIT" />
                        </FormGroup>
                    </Form>
                </div>
            </Modal.Footer>
        </Modal>

    );
}

const AllRoomDetails = () => {

    const [RoomDetails, setRoomDetails] = useState(false);

    const [RoomtableValues, setRoomtableValues] = useState([
        { RoomId: 1, RoomName: 'xxx', floorLevel: '6' },
        { RoomId: 2, RoomName: 'xxx', floorLevel: '10' },
        { RoomId: 3, RoomName: 'xxx', floorLevel: '2' }
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
            case "update room":
                return (
                    setUpdateModal(true)
                );
                break;
            case "delete room":
                return (
                    setDeleteModal(true)
                );
                break;
        }
    }

    return (

        <div className="UserDetails-class">

            <div className="container-fluid mrContainer">

                <div className="row" >

                    {/*column 1*/}
                    <div className="col-2" >

                        <SidebarAdmin />

                    </div>
                    {/*column 2*/}
                    <div className="col-9" style={{padding:"10px"}}>
                        <div className="table-responsive" style={{ paddingTop:'19px', height:'100%'}}>

                            <div class="add-btn" style={{width: "100%", height:"42px", backgroundColor:'#DBDBDB'}}>
                                <span style={{ float: "right"}}>
                                    <Nav.Item>
                                        <button className="adminIconBtn" onClick={() => setAddModal(true)} ><i class="fa fa-plus-circle"></i></button>
                                    </Nav.Item>
                                </span>
                            </div>

                            <Table responsive="sm" style={{width: '100%', margin: 'auto' }}>
                                <thead>
                                    <tr>
                                        <th style={{ height: '10px' }}>Room Id</th>
                                        <th style={{ width: '200px', height: '10px' }}>Room Name</th>
                                        <th style={{ height: '10px' }}>Floor Level</th>
                                        <th style={{ height: '10px' }} h>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {RoomtableValues.map((RoomtValues) => (
                                        <tr key={RoomtValues.RoomId}>
                                            <td style={{ height: '10px' }} >{RoomtValues.RoomId}</td>
                                            <td style={{ width: '200px', height: '10px' }}>{RoomtValues.RoomName}</td>
                                            <td style={{ height: '10px' }} >{RoomtValues.floorLevel}</td>
                                            <td className="SelectUserOption" >
                                                {/*<Input type="select" name="SelectUserOption" id="SelectUserOption" style={{ width: '18px', height: '22px', margin: 'auto' }}>
                                                                <option value="" disabled selected hidden></option>
                                                                <option value="Update User">Update User</option>
                                                                <option value="Delete User">Delete User</option>
                                                            </Input>*/}
                                                <DropdownButton id="dropdown-secondary-button" variant="secondary btn-sm"
                                                    onSelect={handleSelect}>
                                                    <Dropdown.Item eventKey="Update Room">Update Room</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Delete Room">Delete Room</Dropdown.Item>
                                                </DropdownButton>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        <MyVerticallyCenteredModal
                            show={AddModal}
                            onHide={() => setAddModal(false)}
                            message={"Add Room"}
                        />

                        <MyVerticallyCenteredModal
                            show={UpdateModal}
                            onHide={() => setUpdateModal(false)}
                            message={"Update Room"}
                        />

                        <DeleteVerticalModal
                            show={DeleteModal}
                            onHide={() => setDeleteModal(false)}
                            message={"Delete Room"}
                        />

                    </div>
                </div>
            </div>

        </div>

    );
}

export default AllRoomDetails;