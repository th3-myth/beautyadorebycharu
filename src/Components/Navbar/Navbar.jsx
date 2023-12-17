import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='nav'>
      <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p></p>
      </Link>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("face")}}><Link to='/face' style={{ textDecoration: 'none', color: 'white' }}>Face</Link>{menu==="face"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("hair")}}><Link to='/hair' style={{ textDecoration: 'none', color: 'white' }}>Hair</Link>{menu==="hair"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("makeovers")}}><Link to='/makeovers' style={{ textDecoration: 'none', color: 'white' }}>Makeovers</Link>{menu==="makeovers"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
