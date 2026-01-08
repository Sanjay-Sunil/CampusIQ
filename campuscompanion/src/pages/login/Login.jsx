import "./login.css";

export default function Login() {
  return (
    <div className="body-login">
    <div className="container">
      <div className="login-card">
        <form>
          <label>UserName :</label>
          <div className="input-container">
          <input type="text" placeholder="" />
          </div>
          <label>Password :</label> 
          <div className="input-container">
          <input type="password" placeholder="" />
          </div>
          <button type="submit" className="login-btn">
            Login
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
            
            Log in as admin
          </a>
        </form>
      </div>
    </div>
    
    </div>
  );
}
