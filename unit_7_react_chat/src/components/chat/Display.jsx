import AddRoom from "./AddRoom";
import Delete from "./Delete";
import Update from "./Update";
import { useState, useEffect } from 'react';

function Display(props) {
	let [roomList, setRoomList] = useState([]);
	useEffect(() => {getRoomList()},[]);

	return (
		<div>
			<span>
				<div>Available Rooms</div>
				<div>{roomListDiv(roomList)}</div>
				<AddRoom />
			</span>
			<span>
				<span>
					<Delete />
					<div>Description</div>
					<div>text</div>
					<Update />
				</span>
				<span>
					<div>Room Title</div>
					<div>Message Display</div>
				</span>
			</span>
		</div>
	)

	// fetches and populates room list
	async function getRoomList(){
		try {
			let res = await fetch('http://127.0.0.1:4000/room/list', {
				headers: new Headers({
					'content-type': 'application/json'
				}),
				method: 'GET'
			});
			let results = await res.json();
			console.log(results);
			setRoomList(results.getAllRooms);
		} catch(error) {
			console.log(error);
		}
	}
};

function roomListDiv(roomList) {
	return (
		roomList.map((room, index) =>
						<div key={index}>
							{room.title}
						</div>
		)
	)
};

export default Display;