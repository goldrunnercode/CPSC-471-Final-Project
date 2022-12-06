import axios from "axios";
import React from "react";

// Make 7 text fields where the user can enter their information, and store the values in the state
function Signup() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [pickup, setPickup] = React.useState("");

    const [display, setDisplay] = React.useState('')

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };
    
    const handleLastName = (event) => {
        setLastName(event.target.value);
    };

    const handlePickup = (event) => {
        setPickup(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the page from refreshing

        axios.get(`http://localhost:3001/signupsubmit/`+localStorage.getItem('user')+`/`+firstName+`/`+lastName+`/`+pickup)
            .then(res => {
                const success = res.data;
                if (success) {
                    window.location.href = '/orders'
                } else {
                    setDisplay("Signup failed! :(")
                }
            })
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={firstName} onChange={handleFirstName} placeholder="First Name" />
                <input type="text" value={lastName} onChange={handleLastName} placeholder="Last Name" />
                <input type="text" value={pickup} onChange={handlePickup} placeholder="Pickup Location" />
                <button type="submit">Submit</button>
            </form>
            <p >{display}</p>
        </div>
    );
}

export default Signup;