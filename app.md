//copy this to App.jsx

# Copy this to App.jsx


```jsx
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState([]);

  const getCollegeList = async () => {
    try {
     const response = await fetch("YOUR_API_URL_HERE"); // Replace with your actual API URL

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCollegeList();
  }, []);

  return (
    <div className="container">
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
