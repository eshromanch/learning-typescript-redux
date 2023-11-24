import "./App.css";
import Counter from "./components/Counter";
import ShowMessage from "./components/ShowMessage";

function App() {
 
  return (
    <>
      <div>learning typescript</div>
      <ShowMessage isStudent={true} name="" id={45} age={22}/>
      <Counter/>
    </>
  );
}

export default App;
