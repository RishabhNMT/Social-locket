import React, { useState } from 'react'
import '../ComingSoon/Coming.css'
import logo from '../ComingSoon/Comindimage/logo.png'
import { RestService } from '../Services/RestService';

const ComingSoon = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(false);

    const setval = (e) => {
        setEmail(e.target.value)
    }
    const subscribe_click = async (e) => {
        e.preventDefault()
        console.log("email", email)
        let body = { "email": email }
        let res = await RestService.comingsoon(body);
        console.log("data", res)
        if (res.status === 200) {
            setEmail("");
            setMessage(true)
        }
        else {
        }
        console.log("message", message)
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
                        <img src={logo} alt="logo" width="126" height="126" />
                        <h2>Thank You</h2>
                        <p>We're coming soon! We're working on our brand new website and will be launching soon. Do not miss it,
                            subscribe below to keep updated.</p>

                    </div> :
                        <div id="coming_msg">
                            <img src={logo} alt="logo" width="126" height="126" />
                            <h2>Coming Soon</h2>
                            <p>We're coming soon! We're working on our brand new website and will be launching soon. Do not miss it,
                                subscribe below to keep updated.</p>
                            <div className="subscribe">
                                <input type="email" id="email" name="email" value={email} onChange={setval} placeholder="Enter your email" />
                                <button type="button" id="subcribe" onClick={subscribe_click}>Subscribe</button>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </>

    )
}

export default ComingSoon;