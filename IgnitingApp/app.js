import React from "react";
import ReactDOM from "react-dom/client"

// ReactElement
// 
const heading = React.createElement("h1", {id:"heading"}, "Nameste React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);



const jsxHeading = <h1 id="heading">Nameste React Using JSX 🚀</h1>
console.log(jsxHeading);



const Heading1 = ()=>(
    <h1 className="Heading">Hello world, this is react functionl component</h1>
)

root.render(<Heading1 />);