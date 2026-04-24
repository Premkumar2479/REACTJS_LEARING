function Bye(){

    const users =[ 
        {firstName: "John", lastName:"Doe" , age:24},
        {firstName: "Jane", lastName:"Smith" , age:22}
    ];

    function fullName(user){
        return user.firstName + " " + user.lastName;
    }

    return (
        <div>
            <h2>Person Details</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {fullName(user)} is {user.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bye;