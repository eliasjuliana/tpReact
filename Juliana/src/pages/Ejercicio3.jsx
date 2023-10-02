import { useState } from "react";

const Ejercicio3 = (props) => {

    const {propsMessage} = props;

    const [message, setMessage] = useState(propsMessage);

    const handleMessageChange = () =>{
        setMessage (message + '(from changed state)')
    }

    return (
        <div>
            <h1>Hello {message}!</h1>
            <button onClick={handleMessageChange}>Click here</button>
        </div>
    )
}

export default Ejercicio3

















// import { useState } from "react";


// const Ejercicio3 = () => {

//     // const {message: propsMessage} = props;
//     // const message = 'from changed state'

//     const [message, setMessage] = useState(false);

//     const handleMessageChange = () =>{
//         setMessage ()
//         console.log('state / changedstate');
//     }

//     return (
//         <div>
//             <h1>Hello {message}!</h1>
//             <button onClick={handleMessageChange}>Click here</button>
//         </div>
//     )
// }

// export default Ejercicio3

