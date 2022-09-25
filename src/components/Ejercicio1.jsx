import { useState } from "react";

// Ejercicio 1

// const Ejercicio1 = () => {
//     return (
//         <div>
//             <h1>Hello World!</h1>
//         </div>
//     );
// };

// export default Ejercicio1;

// Ejercicio 2

// const Ejercicio1 = (props) => {
//     return (
//         <div>
//             <h1>Hello {props.valor} </h1>
//         </div>
//     );
// };

// export default Ejercicio1;

// Ejercicio 3

const Ejercicio1 = (props) => {

let [cambioTexto, setCambioTexto] = useState("(From changed state)");

// const cambiar = () => {
//     setCambioTexto(props.valor + "(from changed state");
// }

    return (
        <div>
            <h1>Hello {props.valor} </h1>
            <h2>{cambioTexto}</h2>
            <button onClick={()=> setCambioTexto(`Hello my friend (From changed state)`)}>click me</button>
        </div>
    );
};

export default Ejercicio1;