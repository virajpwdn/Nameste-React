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



#Very Important Concept -> React LifeCycle Method
##There are 2 phases In React LifeCycle Method
1. Render Phase
2. Commit Phase

1. Render Phase Starts
- Component is Mounted
- Constructor is Called
- Rendering of Component Happens
2. Commit Phase starts
- React Updates the DOM (DOM Manupalation Happens over here)
- ComponentDidMount Method is called

This process happens in batches, for optimizations, for example there is a parent component and there are multiple child component, okay so now how react will render them is as follows,

1. First Parent component is Mounted 
2. Parent Constructor is called
   
3. child 1 is Mounted
4. child 1 constructor is called
5. child 2 is mounted
6. child 2 constructor is called
7. 
8. child 1 componentDidMount is called
9. child 2 componentDidMount is called

Parent componentDidMount is called


So here react batched the process if you see in first batch all the components are rendered and in second batch all the components are updated.


In render phase reconcialiation takes place where a virtual DOM is created which is simply a javascript object, then in the commit phase this virtual dom is created to real dom and then we see changes on UI.


#Now Very Important, when api call is made in componentDidMount when api return data. Then when we update the data with setState then again rendering happens but this time constructor is not called but we update the values with setState and then there is another method that is componentDidUpdate