import { ArrowClockwise } from "react-bootstrap-icons";

function Update({message, getMessageList, token, newMessage}) {

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
		<ArrowClockwise onClick={() => {updateMessage(message._id)}} />
	)
}

export default Update;