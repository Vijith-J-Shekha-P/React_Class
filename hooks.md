**Hooks in React.js: A Detailed Explanation with Examples**

Hooks are functions introduced in React 16.8 that let you "hook into" React state and lifecycle features from functional components. They solve problems like reusing stateful logic, simplifying complex components, and avoiding class-based components' boilerplate.

---

### **1. Basic Hooks**

#### **a. `useState`**

Manages state in functional components.

**Syntax:**

```javascript
const [state, setState] = useState(initialState);
```

**Example: Counter Component**

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- `count` holds the current state value.
- `setCount` updates the state and triggers a re-render.

---

#### **b. `useEffect`**

Handles side effects (e.g., API calls, subscriptions, DOM manipulation).

**Syntax:**

```javascript
useEffect(() => {
  // Side effect logic
  return () => {
    /* Cleanup logic */
  };
}, [dependencies]);
```

**Example: Fetch Data on Mount**

```jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty array = run once on mount

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

- **No dependencies**: Runs once after initial render.
- **With dependencies**: Runs when dependencies change.
- **Cleanup**: Return a function to clean up (e.g., remove event listeners).

---

#### **c. `useContext`**

Accesses context values without a `Context.Consumer`.

**Example: Theme Context**

```jsx
import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return <button className={theme}>Themed Button</button>;
}
```

---

### **2. Additional Hooks**

#### **a. `useReducer`**

Manages complex state logic (alternative to `useState`).

**Example: Counter with Reducer**

```jsx
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

---

#### **b. `useCallback` & `useMemo`**

Optimize performance by memoizing functions or values.

**Example: Memoized Callback**

```jsx
import React, { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  // Memoize the function to prevent re-creation on every render
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <Child onClick={handleClick} />;
}

const Child = React.memo(({ onClick }) => (
  <button onClick={onClick}>Increment</button>
));
```

**Example: Memoized Value**

```jsx
const expensiveCalculation = (num) => {
  /* ... */
};

function Component() {
  const [number, setNumber] = useState(0);
  const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

  return <div>{calculatedValue}</div>;
}
```

---

#### **c. `useRef`**

Access DOM elements or persist mutable values between renders.

**Example: Focus Input on Mount**

```jsx
import React, { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

---

### **3. Custom Hooks**

Reusable stateful logic across components.

**Example: `useWindowWidth` Hook**

```jsx
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// Usage
function Component() {
  const width = useWindowWidth();
  return <div>Window width: {width}px</div>;
}
```

---

### **4. Rules of Hooks**

1. **Only call Hooks at the top level** (not inside loops/conditions).
2. **Only call Hooks from React functions** (components or custom Hooks).

---

### **Summary**

- **Hooks simplify React code** by eliminating class boilerplate.
- **Reusable logic** via custom Hooks reduces duplication.
- **Performance optimizations** with `useMemo`, `useCallback`, and `React.memo`.

**Best Practices:**

- Use `useEffect` dependencies carefully to avoid infinite loops.
- Prefer smaller, focused custom Hooks.
- Test Hooks using libraries like `@testing-library/react-hooks`.
