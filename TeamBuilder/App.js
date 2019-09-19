import React, {useState} from "react"
import ReactDOM from "react-dom"
import Form from

function App () {
    const [team, setTeam] = useState([
        {
        name: "Sheri",
        email: "Abc@email.com",
        role: "backend engineer"
        }
    ])

    return (
        <div className="App">
            <h1>Team Members</h1>
            <Form addNewMember = {addNewMember} />
        </div>
    )
}

ReactDOM.render(<App />)