
function Hello() {
   
    const getName = (yourname) =>{
        return yourname ;
    };

    function handleClick(){
        alert("Button was clicked!");
    }


    const handleInput = (event) => {
        console.clear()
        console.log (" Value : ", event.target.value)
    }

        const name = "CHOCO"
        const name1 = "BABA"

    const handleMouseOver = () => console.log("Mouse is Over the Text!")    
    const handleDoubleClick = () => console.log("Text double clicked!")    


  return ( 
    <>
    <h1>Hello {getName(name)}</h1>
    <h2> {getName(name1)}</h2>
    <p onMouseOver={handleMouseOver} onDoubleClick = { handleDoubleClick}> Hello i from yahubaba.com</p>
    <button onClick={handleClick}>Click Me</button> 
    <button onClick={() => alert(" Hello from inline function!")}>Say Hello</button> 
   <br />
   <input type="text" onChange={handleInput} placeholder = "Type Something" />
    </>
  );
}

export default Hello;