//create functions and events with java

// function Hello() {
   
//     const getName = (yourname) =>{
//         return yourname ;
//     };

//     function handleClick(){
//         alert("Button was clicked!");
//     }


//     const handleInput = (event) => {
//         console.clear()
//         console.log (" Value : ", event.target.value)
//     }

//         const name = "CHOCO"
//         const name1 = "BABA"

//     const handleMouseOver = () => console.log("Mouse is Over the Text!")    
//     const handleDoubleClick = () => console.log("Text double clicked!")    


//   return ( 
//     <>
//     <h1>Hello {getName(name)}</h1>
//     <h2> {getName(name1)}</h2>
//     <p onMouseOver={handleMouseOver} onDoubleClick = { handleDoubleClick}> Hello i from yahubaba.com</p>
//     <button onClick={handleClick}>Click Me</button> 
//     <button onClick={() => alert(" Hello from inline function!")}>Say Hello</button> 
//    <br />
//    <input type="text" onChange={handleInput} placeholder = "Type Something" />
//     </>
//   );
// }

// export default Hello;



//Array useing functions statements

// function Hello(){

//     const fruits =["apple" , "mango" , "banana","lichi"]

//     return (
//         <div>
//             <h2>Fruits List</h2>
//             <ul>
//                 {fruits.map((fruits,index) =>(
//                     <li>{index} - {fruits}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }


// export default Hello


// function Hello(){

//     const isVisible = true ;

//     const visibility = isVisible ? "visible" : "unvisible";

//     return(
//         <div>
//             <h1 className={visibility} > Conditional rendering</h1>
//             <p>lorem ipsun doller sit this is ver high increase a hight ammount of price in the world </p>
//         </div>
//     )
//     // let message ;

//     // if(isLoggedIn){
//     //     message =<h1>Welcome User!</h1>
//     // }else{
//     //     message = <h2>Please login</h2>
//     // }

//     // return <div>{message}</div>
// }

// export default Hello


function Hello({name = "Guest", age="18", city="unknow",hobbies}){

    return (
        <div>
            <h2>Hello : {name}</h2>
            <h2>Age : {age}</h2>
            <h2>City:  {city}</h2>
        <ul>
      {hobbies.map((hobby,index)=>(
        <li key={index}>{hobby}</li>
      ))}
    </ul>
        </div>
    )

}


export default Hello

