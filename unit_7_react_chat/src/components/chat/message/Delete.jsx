import {Button} from 'reactstrap';
import { Trash } from "react-bootstrap-icons";

function Delete({getMessageList, message, token}) {
	async function deleteMessage() {
		try {
			let res = await fetch(`http://127.0.0.1:4000/message/${message._id}`, {
				headers: new Headers({
					'content-type': 'application/json',
					'Authorization': token
				}),
				method: 'DELETE'
			});
			let results = await res.json();
			console.log(results);
			getMessageList();
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<Trash onClick={deleteMessage} />
	)
}

export default Delete;