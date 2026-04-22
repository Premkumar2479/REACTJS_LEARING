//import  styles from "./Bye.module.css";

//create objects in the jsx

function Bye(){

    const users =[ 
        {firstName: "John", lastName:"Doe" , age:24},
        {firstName: "John", lastName:"Doe" , age:24}
    ]

    function fullName(user){
        return     user.firstName + " " + user.lastName;

    }


    return (
        <div>
            <h2>Person Details</h2>
            <ul>
            {users.map((user, index) => (
                <li>{fullName(user)} is {user.age} years old</li>
            ))}
            </ul>
        </div>
    );
}

export default Bye;



