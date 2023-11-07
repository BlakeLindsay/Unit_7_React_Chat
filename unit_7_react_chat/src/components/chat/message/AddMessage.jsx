import { Button, Input } from 'reactstrap';

function AddMessage({getMessageList, token, currentRoom, newMessage, setNewMessage}) {

	async function addMessage() {
		if(!newMessage) return;
		try {
			console.log(currentRoom);
			let res = await fetch(`http://127.0.0.1:4000/message/${currentRoom._id}`, {
				headers: new Headers({
					'content-type': 'application/json',
					'Authorization': token
				}),
				method: 'POST',
				body: JSON.stringify({
					text: newMessage
				})
			});
			let results = await res.json();
			await getMessageList();
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<div>
			<Input type='text' placeholder='message text' onChange={(e) => setNewMessage(e.target.value)} />
			<Button onClick={addMessage}>Add Message</Button>
		</div>
	)
}

export default AddMessage;