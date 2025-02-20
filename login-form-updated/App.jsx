import "./App.css";
import Button from "./components/ui/Button/Button";
import InputTag from "./components/ui/InputComponent/InputTag";
function App() {
  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.name.value);
          console.log(e.target.email.value);
          console.log(e.target.password.value);
        }}
      >
        <InputTag
          typeValue="text"
          name="name"
          minValue={3}
          inputLabel="Name"
          placeHolder="Enter your name"
        />
        <InputTag
          typeValue="email"
          name="email"
          inputLabel="Email"
          placeHolder="Enter your email"
        />
        <InputTag
          typeValue="password"
          name="password"
          minValue={8}
          inputLabel="Password"
          placeHolder="Enter your password"
        />
        <div className="button-container">
          <Button type="submit" buttonTitle="Submit" />
          <Button type="reset" buttonTitle="Reset" />
        </div>
      </form>
    </div>
  );
}

export default App;
