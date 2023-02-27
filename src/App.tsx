import axios from "axios";
import "./App.css";
import LoadingLayout from "./components/LoadingLayout";
import useAxios from "./config/interceptor";

function App() {
  const requests = useAxios();

  const onclickHandler = () => {
    console.log(requests);
    axios.get("products");
    axios.get("products/1");
    axios.get("products/2");
  };
  return (
    <>
      {requests > 0 && <LoadingLayout />}
      <div className="app">
        <button onClick={onclickHandler}>fetch</button>
      </div>
    </>
  );
}

export default App;
