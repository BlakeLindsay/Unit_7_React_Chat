import AddMessage from "./AddMessage";
import Delete from "./Delete";
import Update from "./Update";
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Input } from "reactstrap";

function Display({token, userID, currentRoom}) {
	let [messageList, setMessageList] = useState([]);
	let [newMessage, setNewMessage] = useState([]);

	console.log(currentRoom);

	useEffect(() => {initMessageList()}, [,currentRoom])

	return (
		<Container>
			<Row>
				<Col>
					{MessageListDiv(messageList, getMessageList, token, userID)}
				</Col>
			</Row>
			<Row>
				<Col>
					<AddMessage getMessageList={getMessageList} token={token} currentRoom={currentRoom} />
				</Col>
			</Row>
		</Container>
	)

	async function initMessageList() {
		try{
			let res = await getMessageList();
			console.log(res);

		} catch(error) {
			console.log(error);
		}
	}

	async function getMessageList() {
		try{
			console.log(currentRoom);
			let res = await fetch(`http://127.0.0.1:4000/message/${currentRoom._id}`, {
				headers: new Headers({
					'content-type': 'application/json',
					'Authorization': token
				}), 
				method: 'GET'
			});

			if (res.status === 404) {
				console.log("message list 404");
				setMessageList([]);
				return [];
			}

			let results = await res.json();
			setMessageList(results.messages);
			return results.messages;
		} catch(error) {
			console.log(error);
			return [];
		}
	}
}

function MessageListDiv(messageList, getMessageList, token, userID) {
	if (!messageList) {
		return (
			null
		)
	}
	return (
		messageList.map((message, index) =>
				<Container key={index} style={{border: '2px solid grey'}}>
					<Row>
						<Col>
							{message.text}
						</Col>
						{
							message.owner == userID
							?
							<>
							<Col>
							<Update message={message} getMessageList={getMessageList} token={token}/>
							</Col>
							<Col>
							<Delete getMessageList={getMessageList} message={message} token={token}/>
							</Col>
						</>
						:
						null
						}
						
					</Row>
				</Container>
		)
	)
};

export default Display;