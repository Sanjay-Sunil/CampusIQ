import './Toggle.css';  
function Toggle({docMode , setDocMode}){
  function setToDocMode(){
    setDocMode(true);
  }
  function setToFAQMode(){
    setDocMode(false);
  }
  return (
    <>
    <div className="toggle-section">
      <div className="toggle-box">
        <div className={docMode ? "toggle-item unselectable": "toggle-item unselectable selected-item unselectable "} onClick={() => setToFAQMode()}>faq </div>
        <div className={docMode ? "toggle-item unselectable selected-item unselectable" : "toggle-item unselectable"} onClick={() => setToDocMode()}>document</div>
      </div>
    </div>
    
    </>
  )
}
export default Toggle;