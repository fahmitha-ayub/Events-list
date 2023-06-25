import { useState } from "react";
import Button from "./button";
const TaskStyle = {
    fontWeight: 'bolder',
    textAlign: 'center',
    display: 'flex',
    backgroundColor: '#302b63',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
};
export default function Event() {
    const[payload,setValue]=useState({});
     function onchangeHandler(e) {
        const{name,value}=e.target
        
        const newpayload={
            ...payload,
            [name]:value,
        }
        setValue(newpayload)
        console.log(payload)
    }
    const onSubmitfn=()=>{
        if(Object.keys(payload).length > 0){
        const data=JSON.parse(localStorage.getItem("eventdetails"))||[]
        const newpayload=[...data,payload]
        console.log(newpayload)
        localStorage.setItem("eventdetails",JSON.stringify(newpayload))
        setValue({})
        }
        else{
            alert("please fill the form")
        }
    }
    return (
        <div>
            <div className="form">
                    <h2>Enter the Event Details</h2>
                    <div className="contents">
                        <label>Event-Name:</label>
                        <input type="text" placeholder="Event name" name="eventname" value={payload.eventname}onChange={onchangeHandler} />
                    </div>
                    <div className="contents">
                        <label>Organization:</label>
                        <input type="text" placeholder="Organization" name="organization" value={payload.organization}onChange={onchangeHandler} />
                    </div>
                    <div className="contents">
                        <label>Type of Event:</label>
                        <input type="text" placeholder="Type of Event" name="type" value={payload.type}onChange={onchangeHandler}/>
                    </div>
                    <div className="contents">
                        <label>Date:</label>
                        <input  id='data' type="date" name="type" value={payload.date}onChange={onchangeHandler}/>
                    </div>
                    <div className="contents">
                        <label>Number of participants:</label>
                        <input type="text" placeholder="no of participants" name="number" value={payload.number}onChange={onchangeHandler}/>
                    </div>
                    <div className="contents">
                        <label>Resource persons:</label>
                        <input type="text" placeholder="Name of Resource Persons" name="guests" value={payload.guests}onChange={onchangeHandler}/>
                        <label>alumni:</label>
                        <input id="data" type="checkbox" name="alumni" />
                    </div>
                    <Button onClick={onSubmitfn} style={TaskStyle}>Submit</Button>
                
            </div>
        </div>
    )
}