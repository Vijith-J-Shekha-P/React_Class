Let’s dive into **each React hook** in detail, including their purpose, syntax, examples, and common use cases. I’ll cover all built-in hooks and provide practical examples to solidify your understanding.

---

## 1. **`useState`**

**Purpose**: Manages state in functional components.  
**Syntax**:

```javascript
const [state, setState] = useState(initialValue);
```

**Example**:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
```

- **Key Points**:
  - `useState` returns an array with the current state value and a function to update it.
  - **Initial State**: Can be a value or a function (e.g., `useState(() => computeInitialState())`).
  - **Functional Updates**: Use a function in `setState` if the new state depends on the previous state:
    ```javascript
    setCount((prevCount) => prevCount + 1);
    ```

---

## 2. **`useEffect`**

**Purpose**: Handles side effects (e.g., API calls, subscriptions, DOM manipulation).  
**Syntax**:

```javascript
useEffect(() => {
  // Side effect
  return () => {
    /* Cleanup */
  };
}, [dependencies]);
```

**Example**:

```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty array = run once on mount

  return <div>Seconds: {seconds}</div>;
}
```

- **Key Points**:
  - **Dependency Array**:
    - **No array**: Runs on every render.
    - **Empty array `[]`**: Runs once after initial render (like `componentDidMount`).
    - **With values `[dep1, dep2]`**: Runs when dependencies change (like `componentDidUpdate`).
  - **Cleanup Function**: Used to cancel subscriptions, timers, or remove event listeners.

---

## 3. **`useContext`**

**Purpose**: Accesses a React context value without nesting a `Context.Consumer`.  
**Syntax**:

```javascript
const value = useContext(MyContext);
```

**Example**:

```jsx
import React, { useContext, createContext } from "react";

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
}
```

- **Key Points**:
  - `useContext` reads the current context value from the nearest matching `Provider`.
  - Context is useful for global data (e.g., themes, user authentication).

---

## 4. **`useReducer`**

**Purpose**: Manages complex state logic (alternative to `useState`).  
**Syntax**:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

**Example**:

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

- **Key Points**:
  - Ideal for state that involves multiple sub-values or complex transitions.
  - Similar to Redux but local to the component.

---

## 5. **`useCallback`**

**Purpose**: Memoizes a function to prevent unnecessary re-renders.  
**Syntax**:

```javascript
const memoizedCallback = useCallback(() => {
  /* ... */
}, [dependencies]);
```

**Example**:

```jsx
import React, { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  // Memoize the function to avoid re-creation on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // No dependencies = same function instance always

  return <Child onIncrement={increment} />;
}

const Child = React.memo(({ onIncrement }) => (
  <button onClick={onIncrement}>Increment</button>
));
```

- **Key Points**:
  - Use with `React.memo` to optimize child components that rely on reference equality.

---

## 6. **`useMemo`**

**Purpose**: Memoizes a computed value to avoid expensive recalculations.  
**Syntax**:

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**Example**:

```jsx
import React, { useMemo, useState } from "react";

function ExpensiveComponent({ list }) {
  const sortedList = useMemo(() => {
    return list.sort((a, b) => a - b); // Memoize sorted list
  }, [list]);

  return <div>{sortedList.join(", ")}</div>;
}
```

- **Key Points**:
  - Use for heavy computations (e.g., sorting, filtering).
  - Only recomputes when dependencies change.

---

## 7. **`useRef`**

**Purpose**: Persists a mutable value across renders or references a DOM element.  
**Syntax**:

```javascript
const ref = useRef(initialValue);
```

**Example**:

```jsx
import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Focus on mount
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

- **Key Points**:
  - **Mutable Value**: Use to track previous state or store values without triggering re-renders:
    ```javascript
    const prevCountRef = useRef();
    useEffect(() => {
      prevCountRef.current = count; // Track previous count
    });
    ```

---

## 8. **`useLayoutEffect`**

**Purpose**: Similar to `useEffect`, but fires synchronously after DOM mutations.  
**Syntax**:

```javascript
useLayoutEffect(() => {
  /* ... */
}, [dependencies]);
```

**Example**:

```jsx
import React, { useLayoutEffect, useRef } from "react";

function MeasureElement() {
  const divRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(divRef.current.offsetWidth); // Measure after DOM update
  }, []);

  return <div ref={divRef}>Width: {width}px</div>;
}
```

- **Key Points**:
  - Use for DOM measurements or mutations that must happen before the browser paints.

---

## 9. **`useImperativeHandle`**

**Purpose**: Customizes the instance value exposed when using `forwardRef`.  
**Syntax**:

```javascript
useImperativeHandle(ref, () => ({
  method: () => {
    /* ... */
  },
}));
```

**Example**:

```jsx
import React, { useRef, useImperativeHandle, forwardRef } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return <input ref={inputRef} />;
});

function App() {
  const inputRef = useRef();
  return <FancyInput ref={inputRef} />;
}
```

---

## 10. **Custom Hooks**

**Purpose**: Reuse stateful logic across components.

**Example**: `useFetch` Hook

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// Usage in a component:
function UserList() {
  const { data, loading } = useFetch("https://api.example.com/users");

  if (loading) return <div>Loading...</div>;
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## **Rules of Hooks**

1. **Only Call Hooks at the Top Level**:
   - Don’t call hooks inside loops, conditions, or nested functions.
2. **Only Call Hooks from React Functions**:
   - Call them in functional components or custom hooks.

---

## **Summary**

- **`useState`**: Manage component state.
- **`useEffect`**: Handle side effects.
- **`useContext`**: Access context values.
- **`useReducer`**: Manage complex state transitions.
- **`useCallback`/`useMemo`**: Optimize performance.
- **`useRef`**: Reference DOM nodes or persist values.
- **Custom Hooks**: Reuse logic across components.

By mastering these hooks, you can build efficient, scalable React applications with clean and maintainable code.
