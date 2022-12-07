import React from 'react'
import axios from 'axios'

// Make a text input field, and store the value in the state, then display it once the user presses enter
function Home() {
  const [text, setText] = React.useState('')
  const [display, setDisplay] = React.useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setDisplay(text)
    localStorage.setItem('user', text)

    // query the database to see if the user exists
    // if the user exists, redirect the page to orders
    // if the user does not exist, redirect the page to signup
    axios.get(`http://localhost:3001/emailexists/`+localStorage.getItem('user'))
      .then(res => {
        const exists = res.data;
        if (exists) {
          window.location.href = '/orders'
        } else {
          axios.get(`http://localhost:3001/staffemailexists/`+localStorage.getItem('user'))
          .then(res => {
            const exists = res.data;
            if (exists) {
              if(window.location.href !=='/staffonly'){
              window.location.href = '/staffonly'
              }
            } else {
              window.location.href = '/signup'
            }
          })
          
        }
      })
  }

  const handleLogout = () => {
    setText("");
    setDisplay("");
    localStorage.clear();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} placeholder="Email Address"/>
        <button type="submit">Submit</button>
      </form>
      <p >{display}</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}
export default Home