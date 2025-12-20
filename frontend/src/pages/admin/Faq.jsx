
import './Faq.css'
function Faq({topClass, setTopClass, content, setContent , submitData , dataStatus}) {
  function handleClassChange(e){
    setTopClass(e.target.value.toString());
    // console.log(e.target.value.toString());
  }
  function handleContentChange(e){
    setContent(e.target.value);
    // console.log(e.target.value);
  }
  return (

    <>
      <div className="faq-heading">
        Upload data here!
      </div>
      <div className="faq-content">
        <div className="faq-content-select-box">

          <select name="top-level-class" id="" className='faq-content-select' value={topClass} onChange={(event) => handleClassChange(event)}>
            <option value="faq" faq-content-select-option>faq</option>
            <option value="course" faq-content-select-option>course</option>
            <option value="faculty" faq-content-select-option>faculty</option>
            <option value="department" faq-content-select-option>department</option>
            <option value="event" faq-content-select-option>event</option>
            <option value="services" faq-content-select-option>services</option>
            <option value="clubs" faq-content-select-option>clubs</option>
          </select>
        </div>
        <div className="faq-content-text-box">
          <textarea name="" id="" className='faq-content-text-area' value={content}
          onChange={(e) => handleContentChange(e)} placeholder="Type or Paste all the data here. Don't worry about the formatting, leave it to gemini!">
          </textarea>
        </div>
      </div>

      <div className="faq-submit">
        <p className='faq-submit-text'>{dataStatus}</p>
        <div className="faq-submit-button-box">
          <button className="faq-submit-button" onClick={submitData} disabled={content ? false : true}>Save Data</button>
        </div>

      </div>
    </>
  )
}
export default Faq;