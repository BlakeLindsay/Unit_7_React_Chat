import AddRoom from "./AddRoom";
import Delete from "./Delete";
import Update from "./Update";
import { useState, useEffect } from 'react';

function Display(props) {
	let [roomList, setRoomList] = useState([]);
	// room targeted for update, delete, and view
	let [currentRoom, setCurrentRoom] = useState({});

	useEffect(() => {initRoomList()},[]);

	return (
		<div>
			<span>
				<div>Available Rooms</div>
				<div>{roomListDiv(roomList, switchCurrentRoom)}</div>
				<AddRoom roomList={roomList} getRoomList={getRoomList} switchCurrentRoom={switchCurrentRoom} token={props.token}/>
			</span>
			<span>
				<span>
					<Delete />
					<div>Description</div>
					<div>{currentRoom.description}</div>
					<Update />
				</span>
				<span>
					<div>{currentRoom.title}</div>
					<div>Message Display</div>
				</span>
			</span>
		</div>
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

			let results = await res.json();
			setRoomList(results.getAllRooms);
			return results.getAllRooms;
			// console.log(results);
			// setRoomList(results.getAllRooms);
			// console.log(roomList);
			// setCurrentRoom(roomList[0]);
		} catch(error) {
			console.log(error);
		}
	}

	// use this to set the current room, not setCurrentRoom()
	function switchCurrentRoom(room) {
		setCurrentRoom(room);
		console.log(currentRoom);
		// setRoomTitle(currentRoom.title);
		// setRoomDescription(currentRoom.description);
	}
};

function roomListDiv(roomList, switchCurrentRoom) {
	return (
		roomList.map((room, index) =>
						<button key={index} onClick={() => switchCurrentRoom(roomList[index])}>
							{room.title}
						</button>
		)
	)
};

export default Display;