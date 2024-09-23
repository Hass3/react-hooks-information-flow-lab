import React from "react";


function Header({onDarkModeClick, isOn}){

    function handleClick(){
        onDarkModeClick()
    }

    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={handleClick}>{!isOn ? "Light Mode" : "Dark Mode"}</button>

        </header>
    )
}

export default Header