import "./App.css";
import Input from "./components/ui/Input/Input";

function App() {
  return (
    <div className="container">
      <Input type="text" placeholder={"Enter Name"} name={"Enter Name"} />
      <Input type="email" placeholder={"Enter Email"} name="Enter Email" />
      <Input type="range" name="Set the Range" />
      <Input type="radio" name="Gender" inputLabel={"Male"} />
    </div>
  );
}

export default App;
