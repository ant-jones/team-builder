import React from "react";

import teamMembersStub from "./fakerData";


const fakeData = teamMembersStub(2);

const Form = props => {
    const [member, setMember] = useState(fakeData);
    const handleChanges = e => {
        console.log(member)
        setMember()
    }


    return(
        <input
        name = "title"
        email = "text"
        role = "text"
        onChange = {handleChanges}
        />
    );
}
export default Form;