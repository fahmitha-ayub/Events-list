import { useState } from "react";
import React from "react";
import Button from "./button";

export default function Form({ setCur }) {
    const [payload, setValue] = useState({})
    const loginHandler = (e) => {
        const { mail, value } = e.target
        const newpayload = {
            ...payload,
            [mail]: value,
        }
        setValue(newpayload)
        console.log(payload)
    }

        const onSubmit = () => {
            setCur('event')
            if (Object.keys(payload).length > 0) {
                const data = JSON.parse(localStorage.getItem("user")) || []
                const newpayload = [...data, payload]
                localStorage.setItem("user", JSON.stringify(newpayload))
                setValue({})
            }
            else{
                alert("please enter the email")
            }
        }
        return (
            <div >
                <div className="form1">
                    <h2>Login</h2>
                    <label>Enter your Email</label>
                    <input type="email" placeholder="email" name="mail" onChange={loginHandler} />
                    <Button onClick={onSubmit}>LogIn</Button>
                </div>
            </div>
                ); 
} 