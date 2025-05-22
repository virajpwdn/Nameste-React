useEffect -> Everytime the component is rendered useEffect is called.
- if no dependecny array, useEffect is called on every render.
- if we add dependency array in useEffect, it will now not be called on every render of component rather it will be only called on Initial Render.
- Inside of dependency array if we add some variable then it will be rendered when the variable changes

useState -> useState are local state variables which we created inside functional component

Things that can cause inconsistency for react to render:
- Never to call Hooks Outside of functional components
- Try to call Hooks on top of function so that consistency is maintained
- Never to call hooks inside if() else () staments it is not recommended by react docs and is not a good practice.
- Not to call Hooks like useState and any other inside for loops or functions.

when we use forloop to create statevariables it gives this error 
```
Uncaught Error: Rendered more hooks than during the previous render.

```

Hook is a function at the end of the day but it has some specific purpose.

import { createBrowserRouter, RouterProvider, useRouteError } from "react-router";
This is another way to create Routing in application. Priviously i was using BrowserRouter, Routes, Route for routing but this is also another way of doing stuff

in createBrowserRouter Hook we have to pass in array of object. Which will include path, element, errorElement

following is the example:
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />,
  },
]);

This is just a RouterProvider component in which we have to wrap <App /> component. so that it has access to all the elements


useRouteError-> Is a hook. Its purpose is to give details about error


Lets talk about link tag -> Link is a tag which is provided by react router dom. It has a superpower though which it can should reloading the page

it works same as anchor tag -> but does not refreshes the page.

There is only some syntx change which is as follows:

# There are two types of Routing in web apps
- Client Side Routing
- Server Side Routing -> This use to happen previously when using a tag entire html use to chagne for different pages.


# SPA -> Why is React Single Page Application?
### React is a single page application beacause it does not change entire html for different pages. React just changes the components. It basically replaces the components which clicked on that page. This is done via client side Routing

This 3 question to understand a topic is very important [WHAT . WHY . HOW]