import Hello from "./Hello";
import Bye from "./Bye";
import Button from "./Button"
import Counter from "./Counter"

// function App() {

//   const isLoggedIn = false;

//   if(isLoggedIn) {
//     return< Hello />
//   }else {
//     return <Bye />
//   }
// }

// export default App;


function App(){

const hobbies = ["Reading", "codeing", "Travelling"]



function Message(){
  alert("Hello from Message Box")
}

function ByeMessage(){
  alert("Hello from Message Bye")
}

  return (
    <>
    <Hello name = "yahubaba" age = {24} city = "patna" hobbies ={hobbies} />
    <Button  label="Click Me" handleClick={Message}/>
        <Button  label="just click" handleClick={ByeMessage}/>
    <Bye />
    <Counter />
    </>
  )
}


export default App