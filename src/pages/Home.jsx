import React, { useState } from "react";
import Navbar from "../components/Nav";
import Event from "../components/list";
import Form from "../components/Form";
export default function Home() {
    const [curstate,setCur]=useState('login')

    return (
        <div className="App">
            <div className="nav">
                <Navbar />
            </div>
            <div>{curstate==='login'?
                <Form setCur={setCur}/>:curstate==='event'?<Event/>:<></>
                }
            </div>
        </div>

    )
}