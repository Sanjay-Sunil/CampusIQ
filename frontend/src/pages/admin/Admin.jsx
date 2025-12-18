import { useState } from 'react';
import Header from '../../components/Header';
import './Admin.css';
import Query from './Query';
import Toggle from './Toggle';
import Faq from './Faq';
import Doc from './Doc';
function Admin() {
  const [docMode, setDocMode] = useState(false);
  return (
    <>
      <title>Admin Panel</title>
      <div className="body">

        <Header heading="Admin Panel" />

        <Query />

        <Toggle docMode={docMode} setDocMode={setDocMode} />

        <div className="save-content-area">
          <div className="save-content-box">
            {docMode ? <Doc /> : <Faq />}
          </div>
        </div>

      </div>
    </>
  )
}

export default Admin;