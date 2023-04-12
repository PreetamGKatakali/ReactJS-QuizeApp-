import React from "react";

function Adminpage(){
    return(
        <div>
            <h2 className="heading-title">Hello Admin</h2>
            <from>
                <label className="title-heading">
                    Enter email :
                    <input type="text" name="email" className="name-feild"></input><br></br>
                </label>
                <label className="title-heading">
                    Password :
                    <input type="password" name="password" className="name-feild"></input>
                </label>
                <input type="submit" value="adminsubmit" className="submit-btn"></input>
            </from>
        </div>
    )
}
export default Adminpage