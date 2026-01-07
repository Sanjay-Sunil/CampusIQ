import "./login.css";

export default function Login() {
  return (
    <div className="body-login">
    <div className="container">
      <div className="login-card">
        <form>
          <label>UserName :</label>
          <input type="text" placeholder="" />

          <label>Password :</label>
          <input type="password" placeholder="" />

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="social-btn gmail">
            <span className="icon">✉</span>
            Login with Gmail
          </button>

          <button type="button" className="social-btn guest">
            <span className="icon">👤</span>
            <a href="/dashboard">
            Login as Guest
            </a>
          </button>

          <a href="/admin" className="admin-link">
            
            Log in as ADMIN
          </a>
        </form>
      </div>
    </div>
    
    </div>
  );
}
