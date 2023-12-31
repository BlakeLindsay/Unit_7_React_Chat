import { Button } from 'reactstrap';

function Update({currentRoom, newDescription, newTitle, getRoomList, token, descriptionRef}) {
	async function updateRoom() {
		if (!newDescription && !newTitle) return;
		if (!newDescription) newDescription = currentRoom.description;
		if (!newTitle) newTitle = currentRoom.title;
		try {
			let res = await fetch(`http://127.0.0.1:4000/room/${currentRoom._id}`, {
				headers: new Headers({
					'content-type': 'application/json',
					'Authorization': token
				}),
				method: 'PATCH',
				body: JSON.stringify({
					title: `${newTitle}`,
					description: `${newDescription}`
				})
			});
			let results = await res.json();
			console.log(results);
			descriptionRef.current.value = '';
			await getRoomList();
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<div>
			<Button color="warning" onClick={updateRoom}>Update</Button>
		</div>
	)
};

export default Update;