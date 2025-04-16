# React Basics: Learning Notes

These are the foundational notes taken while learning **React** from scratch. This guide covers how React works under the hood, rendering with React DOM, replacing existing DOM content, using React via CDN, and more.

---

## ✨ What is React?

- **React** is a **JavaScript library** for building user interfaces.
- It is maintained by **Meta (Facebook)**.
- Can be used to build **Single Page Applications (SPA)** or even just a **small portion** of your website.
- React uses a **virtual DOM** to update the UI efficiently.

---

## 📄 Using React via CDN

Instead of using a bundler like Webpack or Vite, React can be used directly in the browser via CDN links.

### Example HTML Template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React CDN Example</title>
    <script src="app.js" defer></script> <!-- Our custom JS code -->
</head>
<body>
    <div id="main">
        <h1>Hey world</h1> <!-- This will be replaced by React -->
    </div>

    <!-- React CDN Links -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>
</html>
```

> ⚠️ **Note:** Add `defer` to `app.js` to prevent blocking HTML rendering.

---

## 📊 React.createElement Syntax

React doesn’t use traditional HTML inside JS. Instead, it creates elements like this:

```javascript
React.createElement(type, props, children);
```

- **type**: The HTML tag or React component
- **props**: Attributes like `id`, `className`, etc.
- **children**: The inner content or nested elements

### Example: Simple Heading

```javascript
const heading = React.createElement("h1", {id: "heading"}, "Hello world from React");
console.log(heading); // Outputs a React element (JS object)
```

### Example: Nested Elements

```javascript
const parent = React.createElement(
    "div", {id: "parent"},
    React.createElement(
        "div", {id: "child"},
        [
            React.createElement("h1", {}, "This is a heading"),
            React.createElement("h2", {}, "This is an h2 tag")
        ]
    )
);
```

---

## 🚀 Rendering to the DOM with ReactDOM

Use `ReactDOM.createRoot` to connect React to an HTML element:

```javascript
const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(parent);
```

> 🔄 This replaces existing content inside `#main`.

---

## ⚡ One Root Rule

React 18 introduces `createRoot`, and you should only use **one root per application**:

```javascript
// NOT RECOMMENDED: Multiple roots inside one another
const root2 = ReactDOM.createRoot(document.getElementById(parent));
root2.render(child);
const root3 = ReactDOM.createRoot(document.getElementById(child));
root3.render(h1);
```

This will **fail** because you can’t call `getElementById` on elements not yet mounted and shouldn’t create nested roots.

---

## 🔹 DOM Manipulation: Vanilla JS vs React

### Vanilla JavaScript:

```javascript
const el = document.createElement("h1");
el.textContent = "Hello from JS";
document.querySelector("#main").appendChild(el);
```

### React DOM:

```javascript
const el = React.createElement("h1", {}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(el);
```

---

## 🌎 What is a CDN?

A **Content Delivery Network (CDN)** is a globally distributed network of servers that host and deliver content like JavaScript libraries.

- Speeds up loading by using nearby servers.
- Reduces the need to manually install libraries.
- Example: `https://unpkg.com/react` is a CDN URL.

---

## 🔎 What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a security feature implemented by browsers to control which domains can access resources on a server.

- **`corsOrigin`** (in backend settings) defines which frontends are allowed to send requests.
- Used in APIs to prevent unauthorized access.

---

## ❓ Why use `script` inside `<body>` or with `defer`?

If a script is placed inside `<head>` **without `defer`**, it blocks HTML parsing and slows down page load.

### Correct Ways:

1. Use `<script src="app.js" defer></script>` inside `<head>`
2. Or place `<script src="app.js"></script>` at the **end of `<body>`**

> ⚠️ Avoid blocking scripts unless absolutely necessary.

---

## 🔄 What Happens When Scripts Run?

1. **HTML is parsed line-by-line**.
2. When a script is encountered:
   - If no `defer`, it blocks parsing.
   - If `defer`, it runs after HTML is parsed.
3. **React code renders virtual DOM**, which replaces actual DOM in the specified container.

If you don't see your original HTML content, it might have been **overwritten** by React!

---

## 👍 Final Thoughts

- React is **just JavaScript** under the hood.
- You can start without build tools using **CDN**.
- `React.createElement` helps understand what happens behind JSX.
- `ReactDOM.createRoot(...).render(...)` is the key function to render elements.
- Always remember the **one root rule**.

---

Happy Coding ✨

