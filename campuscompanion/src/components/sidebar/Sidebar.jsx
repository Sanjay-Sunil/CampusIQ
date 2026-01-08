import { useState } from 'react';
import './Sidebar.css'
import { Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const [dashboardMode, setDashboardMode] = useState(true);

  const [chatMode, setChatMode] = useState(false);
  const [archiveMode, setArchiveMode] = useState(false);
  const [settingsMode, setSettingsMode] = useState(false);

  function changeModeTo(mode) {
    setArchiveMode(false);
    setChatMode(false);
    setDashboardMode(false);
    setSettingsMode(false);

    if (mode === 'dashboard') {
      setDashboardMode(true);
      
      navigate('/dashboard');
    }
    else if (mode === 'chat') {
      setChatMode(true);

      navigate('/chat');
    }
    else if (mode === 'archive') {
      setArchiveMode(true);
      // navigate('/');
    }
    else if (mode === 'settings') {
      setSettingsMode(true);
      // navigate('/settings');
    }

  }
  return (
    <>


      <div className="sidebar">
        <div className="sidebar-icon">
          <div className="temp-icon"></div>
        </div>
        <div className="sidebar-action-buttons">
            <div className={dashboardMode ? "sidebar-action-button-active sidebar-action-button" : "sidebar-action-button"}
              onClick={() => changeModeTo('dashboard')}>
              {
                dashboardMode ?

                  <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#3f3f46"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" /></svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#27272a"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" /></svg>

              }

            </div>
          
          <div className={chatMode ? "sidebar-action-button-active sidebar-action-button" : "sidebar-action-button"}
            onClick={() => changeModeTo('chat')}>


              {
                chatMode ?
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#3f3f46"><path d="M480-840q74.67 0 140.17 28.17 65.5 28.16 114.5 77.16t77.16 114.5Q840-554.67 840-480q0 74.67-28.17 140.17-28.16 65.5-77.16 114.5t-114.5 77.16Q554.67-120 480-120q-46.33 0-91.67-10-45.33-10-82.66-35l49-49q23.66 14 57.83 20.67 34.17 6.66 67.5 6.66 123.33 0 208.33-85 85-85 85-208.33 0-123.33-85-208.33-85-85-208.33-85-123.33 0-208.33 85-85 85-85 208.33 0 34 6.33 64.17 6.33 30.16 19.67 61.16l-50 50q-19.34-33.33-31-78.83Q120-429 120-480q0-74.67 28.17-140.17 28.16-65.5 77.16-114.5t114.5-77.16Q405.33-840 480-840Zm50 519.33v-162L167.33-120 120-167.33 482.67-530h-162v-66.67h276v276H530Z" /></svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#27272a"><path d="M480-840q74.67 0 140.17 28.17 65.5 28.16 114.5 77.16t77.16 114.5Q840-554.67 840-480q0 74.67-28.17 140.17-28.16 65.5-77.16 114.5t-114.5 77.16Q554.67-120 480-120q-46.33 0-91.67-10-45.33-10-82.66-35l49-49q23.66 14 57.83 20.67 34.17 6.66 67.5 6.66 123.33 0 208.33-85 85-85 85-208.33 0-123.33-85-208.33-85-85-208.33-85-123.33 0-208.33 85-85 85-85 208.33 0 34 6.33 64.17 6.33 30.16 19.67 61.16l-50 50q-19.34-33.33-31-78.83Q120-429 120-480q0-74.67 28.17-140.17 28.16-65.5 77.16-114.5t114.5-77.16Q405.33-840 480-840Zm50 519.33v-162L167.33-120 120-167.33 482.67-530h-162v-66.67h276v276H530Z" /></svg>

              }

          </div>

          <div className={archiveMode ? "sidebar-action-button-active sidebar-action-button" : "sidebar-action-button"}
            onClick={() => changeModeTo('archive')}>
            {
              archiveMode ?
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#3f3f46"><path d="M226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880h506.66q27 0 46.84 19.83Q800-840.33 800-813.33v666.66q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm0-66.67h506.66v-666.66h-66.66v270.66l-98-57.33-98 57.33v-270.66h-244v666.66Zm0 0v-666.66 666.66Zm244-396 98-57.33 98 57.33-98-57.33-98 57.33Z" /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#27272a"><path d="M226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880h506.66q27 0 46.84 19.83Q800-840.33 800-813.33v666.66q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm0-66.67h506.66v-666.66h-66.66v270.66l-98-57.33-98 57.33v-270.66h-244v666.66Zm0 0v-666.66 666.66Zm244-396 98-57.33 98 57.33-98-57.33-98 57.33Z" /></svg>

            }

          </div>

          <div className={settingsMode ? "sidebar-action-button-active sidebar-action-button" : "sidebar-action-button"}
            onClick={() => changeModeTo('settings')}>
            {
              settingsMode ?
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#3f3f46"><path d="M698.67-129.33 446-384q-22 8-44.17 12.67-22.16 4.66-45.83 4.66-98.06 0-166.69-68.44-68.64-68.45-68.64-166.22 0-32.67 8.77-63.1Q138.21-694.85 154-722l145.33 145.33L384.67-658l-148-148q26.94-16.11 57.14-25.05Q324-840 356-840q99.44 0 169.06 69.61 69.61 69.61 69.61 169.06 0 23.66-4.67 45.83-4.67 22.17-12.67 44.17l254 252.66q11.34 11.31 11.34 27.32 0 16.02-11.34 27.35l-78.66 74.67Q741.54-118 725.77-118q-15.77 0-27.1-11.33ZM727-195.67l35.67-35.66-267.34-267.34Q512-519.33 520-547.17q8-27.83 8-54.16 0-70-49.83-119.5Q428.33-770.33 362-774l92.67 94q10 10 9.66 23.67-.33 13.66-10.33 23.66l-131.33 126q-10.19 9.34-23.76 9.34-13.58 0-22.91-9.34L186-596q5 70.33 54.28 116.5T356-433.33q25.33 0 52.67-8 27.33-8 48.33-24.34l270 270ZM474.67-485.33Z" /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#27272a"><path d="M698.67-129.33 446-384q-22 8-44.17 12.67-22.16 4.66-45.83 4.66-98.06 0-166.69-68.44-68.64-68.45-68.64-166.22 0-32.67 8.77-63.1Q138.21-694.85 154-722l145.33 145.33L384.67-658l-148-148q26.94-16.11 57.14-25.05Q324-840 356-840q99.44 0 169.06 69.61 69.61 69.61 69.61 169.06 0 23.66-4.67 45.83-4.67 22.17-12.67 44.17l254 252.66q11.34 11.31 11.34 27.32 0 16.02-11.34 27.35l-78.66 74.67Q741.54-118 725.77-118q-15.77 0-27.1-11.33ZM727-195.67l35.67-35.66-267.34-267.34Q512-519.33 520-547.17q8-27.83 8-54.16 0-70-49.83-119.5Q428.33-770.33 362-774l92.67 94q10 10 9.66 23.67-.33 13.66-10.33 23.66l-131.33 126q-10.19 9.34-23.76 9.34-13.58 0-22.91-9.34L186-596q5 70.33 54.28 116.5T356-433.33q25.33 0 52.67-8 27.33-8 48.33-24.34l270 270ZM474.67-485.33Z" /></svg>
            }

          </div>

        </div>
        <div className="sidebar-bottom-logout">
          <div className="sidebar-bottom-profile-icon">

          </div>
          <button className="sidebar-bottom-logout-button ">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4c0519"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
          </button>
        </div>
      </div>

    </>
  )
}

export default Sidebar;