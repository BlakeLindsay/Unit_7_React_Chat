import { useState, useEffect } from 'react';
import { Button, Input } from 'reactstrap';

function AddMessage({getMessageList, token, currentRoom}) {
	let [messageText, setMessageText] = useState('');

	async function addMessage() {
		if(!messageText) return;
		try {
			console.log(currentRoom);
			let res = await fetch(`http://127.0.0.1:4000/message/${currentRoom._id}`, {
				headers: new Headers({
					'content-type': 'application/json',
					'Authorization': token
				}),
				method: 'POST',
				body: JSON.stringify({
					text: messageText
				})
			});
			let results = await res.json();
			console.log(results);
			await getMessageList();
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<div>
			<Input type='text' placeholder='message text' onChange={(e) => setMessageText(e.target.value)} />
			<Button onClick={addMessage}>Add Message</Button>
		</div>
	)
}

export default AddMessage;