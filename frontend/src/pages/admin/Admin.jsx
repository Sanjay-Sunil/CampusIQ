import Header from '../../components/Header';
import './Admin.css';
import Query from './Query';
function Admin() {
  return (
    <>
    <title>Admin Panel</title>
      <div className="body">
        <Header heading="Admin Panel"/>
        <Query/>
      </div>
    </>
  )
}

export default Admin;