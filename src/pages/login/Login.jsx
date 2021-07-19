import { KeyboardArrowRight } from '@material-ui/icons'
import './login.scss'
export default function Login() {
    
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <div className="logo">UB-FLIX</div>
                    <button className="loginButton">Register</button>
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>New in UB-FLIX? <b>Sign Up</b></span>
                    <small>
                        This page is protected by google reCAPTCHA to ensure you're not a bot.
                        <b> Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}
