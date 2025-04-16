# React Basics – Easy Notes & Concepts

This document is a summary of core React and frontend ecosystem concepts written in simple language. Perfect for revision and interviews!

---

## 🔢 Versioning in `package.json`

### ^ (Caret)
- Allows **minor updates and patch updates**, but **not major**.
- Example: `^1.2.3` → can update to anything less than `2.0.0` (like `1.9.9`)

### ~ (Tilde)
- Allows **only patch updates**.
- Example: `~1.2.3` → can update to `1.2.4`, but **not** `1.3.0`

### ➕ Summary:
| Symbol | Allows Update | Example      | Updates To       |
|--------|----------------|--------------|------------------|
| `^`    | minor + patch  | `^1.2.3`     | up to `<2.0.0`   |
| `~`    | patch only     | `~1.2.3`     | up to `<1.3.0`   |


---

## 🛠️ Updates: Major vs Minor vs Patch

- **Major Update** – Breaking changes (v1 → v2)
- **Minor Update** – New features, no breaking changes (v1.2 → v1.3)
- **Patch Update** – Bug fixes only (v1.2.3 → v1.2.4)

---

## 📦 Bundlers

Bundlers take all your files (JS, CSS, images, etc.) and combine them into a single or small number of files for production. This reduces load time and improves performance.

### Common bundlers:
- **Parcel** – zero config bundler
- **Webpack** – highly configurable, industry standard
- **Vite** – fast and modern (uses ESBuild internally)

### Parcel
- Builds the app
- Starts a dev server
- Hot Module Replacement (HMR) – updates UI without reloading the whole page

---

## 📦 npm vs npx

| Tool | Purpose |
|------|---------|
| `npm` | Used to **install** packages (like React, Axios, etc.) |
| `npx` | Used to **run commands** from packages without installing globally |

Example:
```bash
npm install react
npx create-react-app my-app
```

---

## 📁 package.json
- The **configuration file** for your app
- Contains:
  - Project name
  - Scripts (like `start`, `build`)
  - Dependencies

## 📁 package-lock.json
- Auto-generated file that keeps track of the **exact version** of each installed package.
- Ensures **same versions** across all environments

> Never manually edit this file. Just commit it to ensure consistency.

---

## 🚫 What Not to Add to Git

Never add files/folders that can be regenerated.
- Examples:
  - `node_modules/`
  - `dist/` or `build/`
  - `.parcel-cache/`

✅ Use a `.gitignore` file to exclude them.

---

## 🌐 Why Not Use CDN Links in Production?

- CDNs are fine for quick demos, but not recommended for production because:
  - **Slow**: External loading might delay performance
  - **Unreliable**: If the CDN breaks or changes, your app fails
  - **Expensive**: Extra HTTP requests = slower app

Instead, install packages via npm and bundle everything together.

```bash
npm install react react-dom
```

---

## ✅ Why Install React as a Dependency?
- Keeps your project self-contained
- Works offline (CDN needs internet)
- Ensures you can control the version
- Allows bundling with tools like Parcel or Vite

---

## ⚡ Why Is Your App Fast?

It's **not just React** that makes your app fast. Many other tools help:

- **Parcel**: Automatically optimizes and bundles your code
- **Tree Shaking**: Removes unused code
- **Caching**: Speeds up reloading
- **Code Splitting**: Loads only the required code

React + Parcel combo gives you a great dev and production experience.

---