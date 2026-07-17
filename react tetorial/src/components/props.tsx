// import React from "react";

// // type welcomeProps = {
// //     name: string;
// //     age: Number;
// // }

// type welcomeProp = {
//     name: string;
// }


// export default function Welcome({name} : welcomeProp){
//     return(
//         <div>
//             <h1>Hello {name}</h1>
//         </div>
//     )
// }

// // export  function Welcomes({name, age}: welcomeProps){
// //     return <h1>Hello {name}, Ooo are you {age} years old</h1>
// // }




import React from "react";
type welcomeProps={
    name: String;
    age: Number;
}
export default function Welcomes({name, age}:welcomeProps){
    return(
        <>
            <h1>Hello welcome {name}, I think you are {age} years old</h1>
        </>
    )
}