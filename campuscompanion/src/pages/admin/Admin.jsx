import { useState } from 'react';
import Header from '../../components/Header';
import './Admin.css';
import Query from './Query';
import Toggle from './Toggle';
import Faq from './Faq';
import Doc from './Doc';
import structureData from '../../utils/structureData';
import saveStructuredData from '../../utils/saveStructuredData';
function Admin() {
  const [docMode, setDocMode] = useState(false);
  const [dataStatus, setDataStatus] = useState('data is structured by Gemini');
  const [topClass, setTopClass] = useState('faq');
  const [content, setContent] = useState('');
  function pageInteractions(bool){
    const inputBox = document.querySelector('.faq-content-text-area');
    const selectorBox  = document.querySelector('.faq-content-select');
    const submitButton = document.querySelector('.faq-submit-button');
    if(inputBox) inputBox.disabled = bool;
    if(selectorBox) selectorBox.disabled = bool;
    if(submitButton) submitButton.disabled = bool;


  }

  async function submitData() {
    pageInteractions(true);
    setDataStatus('Sending data to Gemini for structuring...');
    console.log("Submitting data: ", topClass, content);

    const data = await structureData(content);
    setDataStatus('Data structured successfully! Now saving it to firebase DB');
    console.log(data);
    
    saveStructuredData(data);
    setDataStatus('Data saved successfully!');
    pageInteractions(false);
    setContent('');
    

  }




  return (
    <>
      <title>Admin Panel</title>
      <div className="body">

        <Header heading="Admin Panel" />

        <Query />

        <Toggle docMode={docMode} setDocMode={setDocMode} />

        <div className="save-content-area">
          <div className="save-content-box">

            {docMode ? <Doc /> : <Faq topClass={topClass} setTopClass={setTopClass} content={content} setContent={setContent} submitData={submitData} dataStatus={dataStatus} />}
          </div>
        </div>

      </div>
    </>
  )
}

export default Admin;