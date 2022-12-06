import React from "react";

// Make 7 text fields where the user can enter their information, and store the values in the state
function Signup() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [pickup, setPickup] = React.useState("");
    const [pickupM, setPickupM] = React.useState("");
    const [pickupD, setPickupD] = React.useState("");
    const [pickupY, setPickupY] = React.useState("");

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

    const handlePickupM = (event) => {
        setPickupM(event.target.value);
    };

    const handlePickupD = (event) => {
        setPickupD(event.target.value);
    };

    const handlePickupY = (event) => {
        setPickupY(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the page from refreshing
        setDisplay("Thank you for signing up, " + firstName + " " + lastName + "!");
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={firstName} onChange={handleFirstName} placeholder="First Name" />
                <input type="text" value={lastName} onChange={handleLastName} placeholder="Last Name" />
                <input type="text" value={pickup} onChange={handlePickup} placeholder="Pickup Location" />
                <input type="text" value={pickupM} onChange={handlePickupM} placeholder="Pickup Month" />
                <input type="text" value={pickupD} onChange={handlePickupD} placeholder="Pickup Day" />
                <input type="text" value={pickupY} onChange={handlePickupY} placeholder="Pickup Year" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signup;