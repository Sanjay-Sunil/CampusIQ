import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import './Chat.css';
import { getData } from '../../utils/getData';
import getResponse from '../../utils/getResponse';
import Sidebar from '../../components/sidebar/Sidebar';

function Chat() {
	const [chatHistory, setChatHistory] = useState([]);

	const [query, setQuery] = useState('');
	const [response, setResponse] = useState('');
	
	async function sendQuery() {
		const data = await getData();
		const res = await getResponse(data, query)
		setResponse(res);
		document.querySelector('.reponse').innerHTML = response;



	}
	useEffect(() => {
		
	}, []);
	return (
		<>


			<div className="page">
				<Sidebar />
				<div className="page-body">
					<Header />
					<div className="chat">
						<div className="chat-history-container">
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at reiciendis cupiditate, laborum officia iure, fuga magnam et perspiciatis corporis aut atque consequuntur maxime optio quidem deleniti numquam consectetur aliquid facilis culpa alias doloribus. Voluptatem nihil sit incidunt laborum velit dolorem unde, labore ab delectus et quaerat corporis maiores quasi accusantium alias facere veniam! Neque natus inventore soluta tempore, nemo expedita similique repellendus voluptatibus optio dolore mollitia corporis exercitationem praesentium quaerat at error aperiam consequatur quam porro repudiandae voluptas itaque adipisci eveniet alias. Vel suscipit id quisquam consequatur ea! Dolore eos vero provident unde. Ex soluta voluptatem minus dicta quam!
								</div>
								<div className="chat-item-footer-bar">
									{/* To be implemented later */}
								</div>
							</div>
						</div>
						<div className="chat-input-section">
							<div className="chat-input-suggestion-bar">
								{/* To be tailored according to user chat history */}
								{
									query ? null : 	<>
									<div className="unselectable suggestion-item">Lorem</div> 
								<div className="unselectable suggestion-item">ipsum dolor</div> 
								<div className="unselectable suggestion-item">adipisicing</div> 
								<div className="unselectable suggestion-item">aut officiis quisquam</div> 
								<div className="unselectable suggestion-item">Lorem</div>
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
										<svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#a1a1aa"><path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z"/></svg>
										</div>
										<button className={query ? "sendQuery chat-input-send-query-button chat-input-send-query-button-active" : "sendQuery chat-input-send-query-button"} onClick={sendQuery}>
										<svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#a1a1aa"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
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