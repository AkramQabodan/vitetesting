import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { sliceActions } from "../../state/state";

function HomePage() {
  const dispatch = useAppDispatch();

  const onclickHandler = () => {
    axios.get("products");
    axios.get("products/1");
    axios.get("products/2");
  };

  const onSwitchHandler = () => {
    dispatch(sliceActions.enableLogin());
  };

  const count = useAppSelector((store) => store.count);
  const enabled = useAppSelector((store) => store.enableLogin);

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
      <br />
      <span>{enabled ? "loginEnabled" : "loginDisabled"}</span>
    </>
  );
}

export default HomePage;
