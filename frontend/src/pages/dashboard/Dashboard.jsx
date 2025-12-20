import { useState } from 'react';
import Header from '../../components/Header';
import './Dashboard.css';

function Dashboard() {
	const [query, setQuery] = useState('');

	const [response, setResponse] = useState('');

	return (
		<>
			<Header heading="Dashboard" />
			<input type="text" className="query" value={query} onChange={(e) => {
				setQuery(e.target.value)
			}}/>
			<button className="sendQuery" onChange={() => {
				sendQuery();
			}}>Send</button>
			<p className="reponse">{response}</p>
		</>
	)
}

export default Dashboard;