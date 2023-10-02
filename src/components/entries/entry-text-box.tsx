import React from "react"

const EntryTextBox = () => {
  const [enteredText, setEnteredText] = React.useState("")
  console.log(enteredText, "this is the entered text")
  return (
    <div>
      <input
        type="text"
        placeholder="New entry ..."
        value={enteredText}
        onChange={(event) => {
          setEnteredText(event.target.value)
        }}
      ></input>
    </div>
  )
}

export default EntryTextBox
