import React from 'react'
import { Link } from 'react-router-dom'
import i1 from "../assets/img/home.png"
import Footer from './footer'
import { useNavigate } from 'react-router-dom'

function Layout(props) {
  const data = JSON.parse(localStorage.getItem('project_data'))
  const navigate = useNavigate();
  function logout() {
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className='app container'>
      <div className='pg0 container'>
            <header> Institure Technical Council</header>
                <div className='text'>
                <h1>Welcome to the Certicate Portal</h1>
                <p>{data.name}, Download Your Certificates Here</p>
            </div>
            <div className='buttons'>
            <Link to='/1' className='button'>Home</Link>
            <div onClick={logout} className='button'>LogOut</div>
            </div>
            <div className='img-div'>
                <img src={i1} alt="Home image" srcSet="" className='dumb_img'/>
            </div>
        </div>         
        <div className='pg'>
            {props.children}
        </div>
      <Footer/>
    </div>
  )
}
export default Layout