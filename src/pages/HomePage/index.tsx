import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../state/hooks";

function HomePage() {
  const onclickHandler = () => {
    axios.get("products");
    axios.get("products/1");
    axios.get("products/2");
  };

  const onSwitchHandler = () => {};

  const count = useAppSelector((store) => store.count);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <div className="home-page">
        <h1>HomePage</h1>
        <button onClick={onclickHandler}>fetch</button>
        <button onClick={onSwitchHandler}>enable login</button>
        <Link to={"/login"}>Login</Link>
      </div>
    </>
  );
}

export default HomePage;
