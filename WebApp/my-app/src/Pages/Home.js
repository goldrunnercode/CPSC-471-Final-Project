import React from 'react'

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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{display}</p>
    </div>
  )
}
export default Home