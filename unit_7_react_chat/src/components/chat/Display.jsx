import AddRoom from "./AddRoom";
import Delete from "./Delete";
import Update from "./Update";

function Display(props) {
	return (
		<div>
			<span>
				<div>Available Rooms</div>
				<div></div>
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

	async function getRoomList(){
		try {
			let res = await fetch('http://127.0.0.1:4000/room/list', {
				headers: new Headers({
					'content-type': 'application/json'
				}),
				method: 'GET',
				body: JSON.stringify({
					
				})
			});
			let results = await res.json();
			console.log(results);
		} catch(error) {
			console.log(error);
		}
	}
};

export default Display;