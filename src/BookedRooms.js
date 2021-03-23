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





const BookedRooms = () => {

    const [modalShow, setModalShow] = useState(false);

    const [tableValues, settableValues] = useState([
        { roomId: 4, roomName: 'Elephant', floorLevel: '8', date: '23/10/2021', time: '1100-1200' },
        { roomId: 5, roomName: 'Lion', floorLevel: '9', date: '23/10/2021', time: '1100-1200' },
        { roomId: 6, roomName: 'Butterfly', floorLevel: '9', date: '23/10/2021', time: '1100-1200' }
    ]);



    return ( 

        <div className="BookedRooms">
        <Card className="card-booked ">
        <Card.Body>
        <Card.Text>
            <Table striped bordered hover>
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
                        <tr>
                            <td>{tValues.roomName}</td>
                            <td>{tValues.floorLevel}</td>
                            <td>{tValues.date}</td>
                            <td>{tValues.time}</td>
                        </tr>
                        
                    ))}
                </tbody>
            </Table>
        </Card.Text>

    </Card.Body>
</Card>
</div>
     );
}
 
export default BookedRooms;