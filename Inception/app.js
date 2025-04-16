// const heading = React.createElement("h1", {id: "heading"}, "Hello world from, React"); /* The parameters in create elements 1st is which tag, 2nd in brackets we can give attributes and in 3rd we write message This are added as props */
// console.log(heading); /* This gives an JS object where it show props */
const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "This is an heading"), React.createElement("h2", {}, "This is an h2 tag")]));


const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(parent);



// React is a library means if we want to react is samll portion of our website then also we can use it like there on div in which we want to have react we can do it.

// we have created a div named root and in that div if we write something and then later through react we add something in it then the previous content is replaced


// const root2 = ReactDOM.createRoot(document.getElementById(parent));
// root2.render(child);
// const root3 = ReactDOM.createRoot(document.getElementById(child));
// root3.render(h1);