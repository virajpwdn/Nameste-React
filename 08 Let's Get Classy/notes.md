# React Class Based Components
- Class Based Components are older way of writing React code.

In React Class Based Component is a class which extends React.Component class which is provided by react and it has a method which is called render() which returns some JSX.

Functional Component in React is a normal javascript function which return some JSX.

In class Based Component to use the useState Hook, since we are inside of class so we have to create instance variable i.e. this.state -> This variable is provided by react and to update useState in class component react provides this.setState. Also the important thing to note down over here is we have to pass an object. Like in functional component we used create different state varibales like this, const [email, setEmail] = useState(); const [password, setPassword] = useState(); This is how we use to create set variables but in class based component we create one object and in that object we add multiple keys which acts as a variable. For example 

this.state = {
    email: "",
    password: "";
}

when updating we use,
this.setState = {
    this.state.email: this.state.email + 1
}


so In class based component there is, constructor, render, componentDidMount this are called sequentially.

- Component did mount is used to call API
- React first Renders the component -> Then make an API call -> This is also known as config driven UI

ComponentDidMount and useEffect are both same.