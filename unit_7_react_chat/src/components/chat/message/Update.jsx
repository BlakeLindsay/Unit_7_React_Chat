import { Button, Popover, PopoverHeader, PopoverBody, Input } from "reactstrap";
import { useState, useEffect, useRef } from 'react';

function Update({message, getMessageList, token}) {
	let [newMessage, setNewMessage] = useState('');
	// let textRef = useRef(null);
	let [popoverOpen, setPopoverOpen] = useState(false);
	console.log(message);

	async function updateMessage(messageID) {
		console.log(messageID);
		console.log(newMessage);
		try {
			let res = await fetch(`http://127.0.0.1:4000/message/`, {
				headers: new Headers({
					'content-type': 'application/json',
					'Authorization': token
				}),
				method: 'PATCH',
				body: JSON.stringify({
					id: messageID,
					text: newMessage
				})
			});
			if (res.status === 404) {
				console.log(res);
			}
			let results = await res.json();
			console.log(results);
			await getMessageList();
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<div>
			<Button id="Popover1" type="button">
				Update
			</Button>
			<Popover target="Popover1" isOpen={popoverOpen} toggle={() => {setPopoverOpen(!popoverOpen)}}>
				<PopoverHeader>
					<Button onClick={() => {updateMessage(message._id)}}>Update</Button>
				</PopoverHeader>
				<PopoverBody>
					<Input type="text" placeholder="new message text" onChange={(e) => {setNewMessage(e.target.value)
					}} />
				</PopoverBody>
			</Popover>
		</div>
	)
}

export default Update;