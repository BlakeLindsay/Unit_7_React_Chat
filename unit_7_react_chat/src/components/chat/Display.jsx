import AddRoom from "./AddRoom";
import Delete from "./Delete";
import Update from "./Update";
import { useState, useEffect, useRef } from 'react';
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";

function Display(props) {
	let [roomList, setRoomList] = useState([]);
	// room targeted for update, delete, and view
	let [currentRoom, setCurrentRoom] = useState({});
	let [newDescription, setNewDescription] = useState('');
	let [newTitle, setNewTitle] = useState('');
	let descriptionRef = useRef(null);

	useEffect(() => {initRoomList()},[]);

	return (
		<Container>
			{/* <span>
				<div>Available Rooms</div>
				<div>{roomListDiv(roomList, switchCurrentRoom)}</div>
				<AddRoom roomList={roomList} getRoomList={getRoomList} switchCurrentRoom={switchCurrentRoom} token={props.token}/>
			</span> */}
			<Row xs="6">
				<Col xs="5">
				<h2>Available Rooms</h2>
					{roomListDiv(roomList, switchCurrentRoom)}
					<AddRoom roomList={roomList} getRoomList={getRoomList} switchCurrentRoom={switchCurrentRoom} token={props.token}/>
				</Col>
				<Col>
					<Row>
						<Col>
							{
								props.userID === currentRoom.ownerId
								?
								<div>
									<Delete roomList={roomList} getRoomList={getRoomList} currentRoom={currentRoom} switchCurrentRoom={switchCurrentRoom} token={props.token}/>
									<div>Description</div>
									<input ref={descriptionRef} type="text" placeholder={`${currentRoom.description}`} onChange={(e) => setNewDescription(e.target.value)} />
									<Update currentRoom={currentRoom} newDescription={newDescription} newTitle={newTitle} getRoomList={getRoomList} token={props.token} descriptionRef={descriptionRef} />
								</div>
								:
								<div>
									<div>Description</div>
									<div>{currentRoom.description}</div>
								</div>
							}
						</Col>
						<Col>
							{
								props.userID === currentRoom.ownerId
								?
								<input type="text" placeholder={`${currentRoom.title}`} onChange={(e) => setNewTitle(e.target.value)} />
								:
								<div>{currentRoom.title}</div>
							}
							<div>Message Display</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)

	// run on page load
	async function initRoomList() {
		try {
			let res = await getRoomList();
			console.log(res);
			console.log(res[0]);
			switchCurrentRoom(res[0]);

			// let results = await res.json();
			// setRoomList(results.getAllRooms);
			// console.log(roomList);
			// console.log(roomList[0]);
			// switchCurrentRoom(roomList[0]);
		} catch(error) {
			console.log(error);
		}
	}

	// fetches and populates room list
	async function getRoomList() {
		try {
			let res = await fetch('http://127.0.0.1:4000/room/list', {
				headers: new Headers({
					'content-type': 'application/json'
				}),
				method: 'GET'
			});

			if (res.status === 404) {
				setRoomList([]);
				return [];
			}

			let results = await res.json();
			setRoomList(results.getAllRooms);
			return results.getAllRooms;
			// console.log(results);
			// setRoomList(results.getAllRooms);
			// console.log(roomList);
			// setCurrentRoom(roomList[0]);
		} catch(error) {
			console.log(error);
			return [];
		}
	}

	// use this to set the current room, not setCurrentRoom()
	function switchCurrentRoom(room) {
		if (!room) {
			return;
		}
		setCurrentRoom(room);
		console.log(currentRoom);
		// setRoomTitle(currentRoom.title);
		// setRoomDescription(currentRoom.description);
	}
};

function roomListDiv(roomList, switchCurrentRoom) {
	if (!roomList) {
		return (
			null
		)
	}
	return (
		roomList.map((room, index) =>
				<Button key={index} onClick={() => switchCurrentRoom(roomList[index])} className="d-block">
					{room.title}
				</Button>
		)
	)
};

export default Display;