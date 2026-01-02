import { useState } from 'react';
import Header from '../../components/header/Header';
import './Chat.css';
import { getData } from '../../utils/getData';
import getResponse from '../../utils/getResponse';

function Chat() {
	const [query, setQuery] = useState('');
	const [response, setResponse] = useState('');

	async function sendQuery() {
		const data = await getData();
		const res = await getResponse(data, query)
		setResponse(res);
		document.querySelector('.reponse').innerHTML = response;



	}

	return (
		<>


			<div className="page">
				<Sidebar />
				<div className="page-body">
					<Header />
					<input type="text" className="query" value={query} onChange={(e) => {
						setQuery(e.target.value)
					}} />
					<button className="sendQuery" onClick={sendQuery}>Send</button>
					<div className="reponse"></div>

				</div>
			</div>

		</>
	)
}

export default Chat;