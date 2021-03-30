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


function MyVerticallyCenteredModal(props) {

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
                        Booking
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mx-auto modal-container">
                        <Form>
                            <FormGroup>
                                <Input type="text" name="RoomName" id="RoomName" placeholder="Room value" />
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
                                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
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


const AvailableRooms = () => {

    const [modalShow, setModalShow] = useState(false);

    const [tableValues, settableValues] = useState([
        { roomId: 1, roomName: 'Buffalo', floorLevel: '6', date: '23/10/2021', time: '1100-1200' },
        { roomId: 2, roomName: 'Buffalo', floorLevel: '6', date: '23/10/2021', time: '1100-1200' },
        { roomId: 3, roomName: 'Buffalo', floorLevel: '6', date: '23/10/2021', time: '1100-1200' }
    ]);
    return (

        <div className="AvailableRooms">
            <Card className="card-available ">
                <Card.Body>
                    <Card.Text>
                        <div className="table-responsive">
                            <Table responsive="sm" hover>
                                <thead>
                                    <tr>
                                        <th>Room Name</th>
                                        <th>Floor Level</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableValues.map((tValues) => (
                                        <tr onClick={() => setModalShow(true)} key={tValues.roomId}>
                                            <td>{tValues.roomName}</td>
                                            <td>{tValues.floorLevel}</td>
                                            <td>{tValues.date}</td>
                                            <td>{tValues.time}</td>
                                        </tr>

                                    ))}
                                </tbody>
                            </Table>
                        </div>

                    </Card.Text>

                </Card.Body>
            </Card>



            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


        </div>


    );
}

export default AvailableRooms;