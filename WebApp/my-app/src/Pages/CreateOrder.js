import axios from 'axios';
import React from 'react';

function CreateOrder(){
    const [medName, setMedName] = React.useState("");
    const [quantity, setQuantity] = React.useState("");

    const [display, setDisplay] = React.useState('')

    const handleMedName = (event) => {
        setMedName(event.target.value);
    };

    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the page from refreshing

        axios.get(`http://localhost:3001/selectpickuppharmacy/`+localStorage.getItem('user'))
            .then(res1 => {
                const success1 = res1.data;
                if (success1) {
                    axios.get(`http://localhost:3001/selectstaffemail/`+res1.data)
                        .then(res2 => {
                            const success2 = res2.data;
                                if (success2) {
                                    axios.get(`http://localhost:3001/createordersubmit/`+medName+`/`+quantity+`/`+localStorage.getItem('user')+`/`+res2.data+`/`+res1.data)
                                        .then(res3 => {
                                            const success3 = res3.data;
                                            if (success3) {
                                                window.location.href = '/orders'
                                            } else {
                                                setDisplay("Order creation failed! :(")
                                            }
                                         })
                                } else {
                                    setDisplay("Select Staff failed! :(")
                                }
                        })
                } else {
                    setDisplay("Select Pickup failed! :(")
                }
            })

        //More GETS pass res
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={medName} onChange={handleMedName} placeholder="Medication Name" />
                <input type="text" value={quantity} onChange={handleQuantity} placeholder="Quantity" />
                <button type="submit">Submit</button>
            </form>
            <p >{display}</p>
        </div>
    );
}

export default CreateOrder