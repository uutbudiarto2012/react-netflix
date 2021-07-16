
import { useState } from 'react'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { Logo, ProfilePicture } from '../../assets'
import './navbar.scss'

const Navbar = () => {
    const [isScroled, setIsScroled] = useState(false);

    window.onscroll = ()=>{
        setIsScroled(window.pageYOffset === 0 ? false : true)
        return ()=> (window.onscroll = null);
    }

    return (
        <div className={isScroled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={Logo} alt="" />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src={ProfilePicture} alt="profile" />
                    <div className="profile">
                      <ArrowDropDown className="icon" />
                      <div className="options">
                          <span>Settings</span>
                          <span>Logout</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
