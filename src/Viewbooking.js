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

const ViewBooking = () => {

    const [BookingDetails, seBookingDetails] = useState(false);

    const [BookingtableValues, setBookingtableValues] = useState([
        { RoomId: 1, RoomName: 'xxx', floorLevel: '6', status: 'Booked', date: '30/05/20', timeStamp: '1300-1500' },
        { RoomId: 2, RoomName: 'xxx', floorLevel: '10', status: 'Pending', date: '31/05/20', timeStamp: '1600-1700' },
        { RoomId: 3, RoomName: 'xxx', floorLevel: '2', status: 'Available', date: '09/05/20', timeStamp: '1400-1500' },
        { RoomId: 4, RoomName: 'xxx', floorLevel: '2', status: 'Available', date: '09/05/20', timeStamp: '1400-1500' }
    ]);

    return (

        <div className="UserDetails-class" >
            <div className="container-fluid">
                <div className="row no-gutters">
                    {/*column 1*/}
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-10" style={{ padding: '25px' }}>
                        <div className="table-responsive">
                            <Table responsive="sm" style={{ width: '100%', margin: 'auto' }}>
                                <thead>
                                    <tr>
                                        <th style={{ height: '10px' }}>Room Id</th>
                                        <th style={{ width: '200px', height: '10px' }}>Room Name</th>
                                        <th style={{ height: '10px' }}>Floor Level</th>
                                        <th style={{ height: '10px' }} h>Date</th>
                                        <th style={{ height: '10px' }} h>Time</th>
                                        <th style={{ height: '10px' }} h>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {BookingtableValues.map((BookingtValues) => (
                                        <tr key={BookingtValues.RoomId}>
                                            <td style={{ height: '10px' }} >{BookingtValues.RoomId}</td>
                                            <td style={{ width: '200px', height: '10px' }}>{BookingtValues.RoomName}</td>
                                            <td style={{ height: '10px' }} >{BookingtValues.floorLevel}</td>
                                            <td style={{ height: '10px' }} >{BookingtValues.date}</td>
                                            <td style={{ height: '10px' }} >{BookingtValues.timeStamp}</td>
                                            <td style={{ height: '10px' }} >{BookingtValues.status}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>



                    </div>
                </div>
            </div>
        </div >

    );
}

export default ViewBooking;