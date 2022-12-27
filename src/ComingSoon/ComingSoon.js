import React, { useState } from 'react'
import '../ComingSoon/Coming.css'
import logo from '../ComingSoon/Comindimage/logo.png'
import { RestService } from '../Services/RestService';
import validator from 'validator';

const ComingSoon = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(false);
    const [emailError, setEmailError] = useState("");
    const setval = (e) => {
        setEmail(e.target.value)
    }
    const validateEmail = (e) => {
        setEmail(e.target.value)
        console.log("data", e.target.value)

        var email = e.target.value
        if (validator.isEmail(email) || validator.isEmpty(email)) {
            if (validator.isEmpty(email)) {
                setEmailError('')
            }
            else {
                setEmailError('')
            }

        } else {
            setEmailError('Enter valid Email!')
        }
    }
    const checkEmailValidation = (e) => {
        var validated = false;

        var emailid = email
        if (validator.isEmpty(emailid)) {
            setEmailError('Enter Email')
            validated = false;
        }
        else {
            if (validator.isEmail(emailid)) {
                setEmailError('')
                validated = true;
            }
            else {
                setEmailError('Enter Valid Email')
            }
        }
        return validated;
    }
    const subscribe_click = async (e) => {
        e.preventDefault()
        setEmailError('');
        console.log(email)
        const isEmailValid = checkEmailValidation();
        if (email !== '' && isEmailValid) {
            console.log("email", email)
            let body = { "email": email }
            let res = await RestService.comingsoon(body);
            console.log("data", res)
            if (res.status === 200) {
                setEmail("");
                setMessage(true)
            }
        }
        else {

        }

    }
    return (
        <>
            <div className="slider-bg">
                <div className="slider-one">
                    <div className="slider-one-image">
                    </div>
                </div>
                <div className="slider-two">
                    <div className="slider-two-image">
                    </div>
                </div>
                <div className="slider-three">
                    <div className="slider-three-image">
                    </div>
                </div>
            </div>
            <div className="coming-soon">
                <div className="coming-soon-msg">

                    {message ? <div id="thankyou_msg">
                        <img src={logo} alt="logo" width="200" height="84" />
                        <h2>Thank You</h2>
                        <p>We're coming soon! We're working on our brand new website and will be launching soon. Do not miss it,
                            subscribe below to keep updated.</p>

                    </div> :
                        <div id="coming_msg">
                            <img src={logo} alt="logo" width="200" height="84" />
                            <h2>Coming Soon</h2>
                            <p>We're coming soon! We're working on our brand new website and will be launching soon. Do not miss it,
                                subscribe below to keep updated.</p>
                            <div className="subscribe">
                                <input type="email" id="email" name="email" value={email}
                                    onChange={validateEmail} placeholder="Enter your email" />
                                <button type="button" id="subcribe" onClick={subscribe_click}>Subscribe</button>
                            </div> <span style={{ color: 'white' }}>{emailError}</span>
                        </div>
                    }
                </div>
            </div>

        </>

    )
}

export default ComingSoon;