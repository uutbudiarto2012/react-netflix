import { KeyboardArrowRight } from '@material-ui/icons'
import { useRef, useState } from 'react'
import './register.scss'
export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () =>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = () =>{
        setPassword(passwordRef.current.value)
    }


    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <div className="logo">UB-FLIX</div>
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more</h1>
                <h2>What anywhere. Cancel Anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder="Your email address" ref={emailRef} />
                            <button className="registerButton" onClick={handleStart}>
                                Get Started
                                <KeyboardArrowRight className="ic_register" />
                            </button>
                        </div>

                    ) : (
                        <form className="input">
                            <input type="password" placeholder="Password" ref={passwordRef} />
                            <button className="registerButton" onClick={handleFinish}>
                                Start Now
                            </button>
                        </form>
                    )
                }
            </div>
        </div>
    )
}
