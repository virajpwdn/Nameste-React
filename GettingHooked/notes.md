There are two types of exports
1. Default
2. Named


In react there are Hooks => Hooks are just normal javascript utily functions. Utility function means that it has some superpowers thorugh which it handles states. The superpower is it keeps the ui in sync with data layer.


There are two important types of hooks
1. useState => It used to create state variable, state variable means it maintains state of function, local state variable score is in that component
2. useEffect


Whenever a state is changed in react it rerenders the component



UI in sync with data layer. If in a component there is local variable i.e useState variable, as soon as this local variable is changed react immediately updates the body of this variable. Bascically data updates UI layer updates becuase on change react rerenders the component.

What is rerendering? The logic to update UI is rerendering.



Why is React Fast?
React is fast because it can update DOM faster, Beacuse it has virtual dom. What is virtualDOM? VirtualDOM is basically the copy of actual DOM. What is actual DOM? Actual DOM is nothuing but the HTML structure.

What difference does virtual dom make?
So behind the scene it uses Reconcilation algorithm which was introduced in react 16 but now it is now as React fiber. It is the algotithm which keeps UI and data in sync. Basically whenever we change something on UI reconcilation happends and it rerenders the components. Redenering means it changes the body of immediately after the change.

Now all of this happens because of Diff alorithm. Diff Algorithm basically looks for change in local state and when it there is some change is local state it quickly compare with actual dom and changes it on rerender.


Local state is a Hook in react which is called useState(). Hooks in react is a simple utity function of javascript which has some superpowers and this superpowers is it keeps UI sync with data.

const [list, setList] = useState() in the useState list value is passed as arguments and a actual dom is created and now if we you see there is another element that is setList. Set list is the trigger which changes the actual dom via diff Algorithm

At the end virtual dom is nothing but a simple object of javascript;

This are all valid ways to write use state
 // const [resturantBigData, setResturantBigData] = useState(restaurantList)
  const arr = useState(restaurantList);
  // const [resturantBigData, setResturantBigData] = arr;
  const resturantBigData = arr[0];
  const setResturantBigData = arr[1];





  # 📘 React Basics: Beginner-Friendly Notes

## 🛠️ Exports in JavaScript
React uses two main types of exports:

1. **Default Export**
   ```js
   export default Component;
   ```
   - Used when you want to export a single value from a file.
   - Can be imported with any name:
     ```js
     import MyComponent from './Component';
     ```

2. **Named Export**
   ```js
   export const MyComponent = () => {};
   ```
   - Used to export multiple values from a file.
   - Must be imported using curly braces:
     ```js
     import { MyComponent } from './Component';
     ```

---

## ⚛️ What are Hooks in React?
Hooks are just JavaScript **utility functions** that give React components special powers like handling state and side effects.

### ✅ Why "superpowers"?
Hooks allow React to keep the **UI in sync** with the **data layer**.

### 🔑 Two Essential Hooks

1. **useState()**
   - Creates a **state variable** in a functional component.
   - Stores local state and triggers re-render on update.
   - Example:
     ```js
     const [score, setScore] = useState(0);
     ```

2. **useEffect()**
   - Handles **side effects** like API calls, event listeners, etc.
   - Runs after render by default.
   - Example:
     ```js
     useEffect(() => {
       console.log('Component mounted or updated');
     }, []);
     ```

---

## 🔄 What is Re-rendering?
Re-rendering is when React **updates the UI** by running the component function again.

- Happens when a **state variable (useState)** or **prop** changes.
- React re-runs the component and updates the UI using **virtual DOM** comparison.

### 🧠 Example:
```js
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Increment</button>
```
- Clicking the button triggers `setCount`, which updates the state.
- React re-renders the component to reflect the new value of `count`.

---

## ⚡ Why is React Fast?

### ✅ Virtual DOM
React uses a **Virtual DOM**, which is a lightweight copy of the actual DOM.

- **Actual DOM**: The real HTML in the browser.
- **Virtual DOM**: A JavaScript object version of the DOM.

### 🧠 Why use Virtual DOM?
- Updating the real DOM is slow.
- Virtual DOM allows React to calculate the **minimum number of changes** needed.
- React then updates only the changed parts of the real DOM.

---

## ⚙️ How React Updates the UI Efficiently

### 🔍 Diffing Algorithm
- Compares the old and new virtual DOM.
- Finds out what has changed.

### 🔁 Reconciliation (React Fiber)
- Introduced in React 16.
- A new rendering engine that makes updates **faster** and **smoother**.
- Handles re-rendering by breaking the work into **small units** and updating efficiently.

### 🧠 Summary of the Process
1. `useState` triggers state change.
2. React creates a new virtual DOM.
3. Diff algorithm finds the difference.
4. Fiber reconciles and updates only what's changed in the actual DOM.

---

## 💡 useState Variations
All of the below are valid ways to use `useState`:

```js
// Standard way
const [restaurantData, setRestaurantData] = useState(restaurantList);

// Using array destructuring later
const arr = useState(restaurantList);
const restaurantData = arr[0];
const setRestaurantData = arr[1];
```

Both are correct. The first method is cleaner and more commonly used.

---

## 🧠 Final Thoughts
- React is fast due to Virtual DOM and the Fiber reconciliation engine.
- `useState` and `useEffect` are core to handling state and side effects.
- Updating the UI = Re-rendering the component.
- Virtual DOM is just a JavaScript object used to make DOM updates more efficient.

You're now one step closer to mastering React fundamentals 🚀

