import './Dashboard.css'
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
function Dashboard() {
  return (
    <>

      <div className="page">
        <Sidebar />
        <div className="page-body">
          <Header />
        </div>
      </div>

    </>
  )
}
export default Dashboard;