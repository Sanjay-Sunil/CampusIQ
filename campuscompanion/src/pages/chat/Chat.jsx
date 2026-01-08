import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import './Chat.css';
import { getData } from '../../utils/getData';
import getResponse from '../../utils/getResponse';
import Sidebar from '../../components/sidebar/Sidebar';
import { getUserChatHistory, setUserChatHistory } from '../../utils/userChatHistory';

function Chat() {
	const [chatHistory, setChatHistory] = useState([]);
	const [data, setData] = useState(null);

	const [query, setQuery] = useState('');
	const [response, setResponse] = useState('');

	async function sendQuery() {
		const queryText = query;
		setQuery('Loading......');
		document.querySelector('.chat-input-send-query-button').disabled = true;
		const res = await getResponse(data, queryText);
		setResponse(res);
		setUserChatHistory('2025BCD0007', query, res);
		// console.log(chatHistory);
		await fetchChatHistory();
		setQuery('');
		document.querySelector('.chat-input-send-query-button').disabled = false;
		
	}

	async function fetchData() {
		const context = await getData();
		setData(context);
		
	}
	async function fetchChatHistory() {
		getUserChatHistory('2025BCD0007').then((history) => {
			setChatHistory(history);
			// console.log(history);
			
		});
		
	}
	useEffect(() => {
		// run once on mount
		fetchData();
		fetchChatHistory();
		// getUserChatHistory('2025BCD0007').then((history) => {
		// 	setChatHistory(history);
		// });
	}, []);


	return (
		<>


			<div className="page">
				<Sidebar />
				<div className="page-body">
					<Header />
					<div className="chat">
						<div className="chat-history-container">
							{ !chatHistory.length &&
							<div className="chat-item">
								<div className="chat-item-header-bar">
									<div className="chat-item-heading-text">

										Chat with CampusIQ

									</div>
									<div
										className="chat-item-heading-action-buttons">
										{/* To be implemented later */}
									</div>
								</div>
							<div className="chat-item-content">
									{response ? response : "Ask me anything about IIITK, Gemini will Cook it up for you..."}
								</div>
								<div className="chat-item-footer-bar">
									{/* To be implemented later */}
								</div>
							</div>}

							{chatHistory.map((chat) => {
								return (
									<>
																<div className="chat-item">
								<div className="chat-item-header-bar">
									<div className="chat-item-heading-text">

										{chat.query}

									</div>
									<div
										className="chat-item-heading-action-buttons">
										{/* To be implemented later */}
									</div>
								</div>
								
								<div className="chat-item-content"
									dangerouslySetInnerHTML={{ __html: chat.answer || 'Gemini is cooking......'}}>

								</div>

								<div className="chat-item-footer-bar">
									{/* To be implemented later */}
								</div>
							</div>
									
									</>
								)

							})}
						</div>
						<div className="chat-input-section">
							<div className="chat-input-suggestion-bar">
								{/* To be tailored according to user chat history */}
								{
									(query || (chatHistory.length)>0 ) ? null : <>
										<div className="unselectable suggestion-item">classes </div>
										<div className="unselectable suggestion-item">schedule</div>
										<div className="unselectable suggestion-item">pending work</div>
										<div className="unselectable suggestion-item">exams</div>
										<div className="unselectable suggestion-item">FA room</div>

									</>
								}


							</div>
							<div className="chat-input-input-bar">
								<div className="chat-input-input-box">
									<input type="text" className="chat-input-query query" value={query} onChange={(e) => {
										setQuery(e.target.value)
									}} />
									<div className="chat-input-icons">
										<div className="attachment-icon">
											<svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#a1a1aa"><path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z" /></svg>
										</div>
										<button className={query ? "sendQuery chat-input-send-query-button chat-input-send-query-button-active" : "sendQuery chat-input-send-query-button"} onClick={sendQuery}>
											<svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#a1a1aa"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" /></svg>
										</button>

									</div>
								</div>
							</div>
						</div>
					</div>
					{/* 
				
					<div className="reponse">
						
					</div> */}

				</div>
			</div>

		</>
	)
}

export default Chat;