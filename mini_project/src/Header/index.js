import {Link} from 'react-router-dom'
import "./index.css"

const Header = () =>(
  
  <><div className='main-heading'>
    <div className='profile-setting'><h1 className="heading">U</h1></div>
    </div>
    {/* <hr className='hr' /> */}
  <div className='container1'>
    <ul className="nav-items-list">
      <li  className="link-item">
        <Link  className={`link-item links`} to="/">
          Form
        </Link>
      </li>
      <li className={`link-item disabled`}>
        <Link className="route-link" to="/Choose">
          Choose
        </Link>
      </li>
      <li className="link-item disabled">
        <Link className="route-link" to="/Confirm">
          Confirm
        </Link>
      </li>
    </ul>
  </div></>
    
)

export default Header