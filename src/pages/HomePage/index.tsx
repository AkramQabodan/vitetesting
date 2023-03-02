import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { sliceActions } from "../../state/state";

function HomePage() {
  const dispatch = useAppDispatch();

  const onclickHandler = () => {
    axios.get("products/2");
  };

  const onSwitchHandler = () => {
    dispatch(sliceActions.enableLogin());
  };

  const enabled = useAppSelector((store) => store.enableLogin);
  return (
    <>
      <div className="home-page">
        <h1>HomePage</h1>
        <button onClick={onclickHandler}>fetch</button>
        <button onClick={onSwitchHandler}>enable login</button>
      </div>
      <br />
      <span>{enabled ? "loginEnabled" : "loginDisabled"}</span>
    </>
  );
}

export default HomePage;
