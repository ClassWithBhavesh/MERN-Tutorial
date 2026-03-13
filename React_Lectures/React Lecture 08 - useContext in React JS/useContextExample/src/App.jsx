import "./App.css";
import ChildD from "./components/ChildA";
import UserContextProvider from "./context/UserContext"


function App() {


  return (
    <>
      <div id="center">
        <UserContextProvider>
          <ChildD />
        </UserContextProvider>
      </div>
    </>
  );
}

export default App;
