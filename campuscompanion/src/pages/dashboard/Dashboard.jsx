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

          <div className="dashboard-container">
            <div className="student-header">
              <h1 className="student-name">John Doe</h1>
              <p className="student-batch">BATCH-2025 · BXX · 000X</p>
            </div>

            <div className="dashboard-cards">
              <div className="dashboard-card current-class-card">
                <div className="card-icon-title">
                  <span className="card-icon">🕐</span>
                  <h3 className="card-title">Current Class</h3>
                </div>
                <h2 className="class-name">Data Structures & Algorithms</h2>
                <p className="class-info">Room 204 · 10:00 – 11:00</p>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <p className="class-status">Class Completed</p>
                <p className="upcoming-class">Upcoming: Operating Systems · 11:15 – 12:15</p>
              </div>

              <div className="dashboard-card assignments-card">
                <div className="card-icon-title">
                  <span className="card-icon">📚</span>
                  <h3 className="card-title">Assignments</h3>
                </div>
                <div className="assignment-item">
                  <span className="assignment-icon">✓</span>
                  <div>
                    <p className="assignment-label">Submitted: <strong>5</strong></p>
                  </div>
                </div>
                <div className="assignment-item">
                  <span className="assignment-icon pending">✕</span>
                  <div>
                    <p className="assignment-label">Pending: <strong>1</strong></p>
                  </div>
                </div>
              </div>

              <div className="dashboard-card performance-card">
                <div className="card-icon-title">
                  <span className="card-icon">📈</span>
                  <h3 className="card-title">Performance</h3>
                </div>
                <div className="performance-stat">
                  <p className="stat-label">CGPA:</p>
                  <p className="stat-value">9.09</p>
                </div>
                <div className="performance-stat">
                  <p className="stat-label">Attendance:</p>
                  <p className="stat-value">96%</p>
                </div>
              </div>
            </div>

            <div className="dashboard-event">
              <div className="event-card">
                <div className="event-header">
                  <span className="event-icon">📅</span>
                  <h3 className="event-title">Upcoming Event - #HappeningToday</h3>
                </div>
                <h2 className="event-name">AI Workshop – Gemini API Integration</h2>
                <p className="event-description">Hands-on MVP demo workshop with real campus use-cases</p>
                <div className="event-details">
                  <div className="event-detail">
                    <span className="detail-icon">🕐</span>
                    <p>24 Sept 2025</p>
                  </div>
                  <div className="event-detail">
                    <span className="detail-icon">📍</span>
                    <p>Main Seminar Hall</p>
                  </div>
                </div>
                <button className="enroll-btn">Enroll</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </>
  )
}
export default Dashboard;