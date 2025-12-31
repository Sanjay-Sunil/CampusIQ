import './Header.css'
function Header({heading}){
  return (
    <>

      <div className="header">
        <div className="logo unselectable">
          
          <img src="/logo-bgremove.png" alt="" srcset="" />

        </div>
        <div className="heading unselectable">{heading}</div>
        <div className="profile">
          <div className="profile-image">

          </div>
        </div>
      </div>
    </>
  )
}
export default Header