// Code Keypad Component Here

function Keypad (){
    function hadleChange(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={hadleChange}/>
        </div>
    )
}

export default Keypad;