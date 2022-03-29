import {Link} from 'react-router-dom'
import "./index.css"

const Header = () =>(
  
  <><div className='main-heading'>
  <div className='container1'>
    <div></div>
    <div><ul className="nav-items-list">
      <li  className="link-item">
        <Link  className="route-link" to="/">
          Form
        </Link>
      </li>
      <li className="link-item disabled">
        <Link className="route-link" to="/Choose">
          Choose
        </Link>
      </li>
      <li className="link-item disabled">
        <Link className="route-link" to="/Confirm">
          Confirm
        </Link>
      </li>
    </ul></div><div className='profile-setting'><h1 className="heading">U</h1></div>
    </div>
  </div></>
    
)

export default Header