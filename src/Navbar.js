import './Navbar.css'
import logo from './logo.png'
import userIcon from './user-icon.png'
const Navbar = () => {

  return (
    <>
      <header className="header">
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
          <i class="fa-brands fa-searchengin"></i>
        </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
      </header>
    </>
  );
};

export default Navbar;;
