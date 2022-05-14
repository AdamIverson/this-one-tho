import React from "react";
import { useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();

  const get = () => {
    dispatch({ type: "GET_ALL" });
  }

  return (
    <div>
      <h1>SUCCESS</h1>
      <button onClick={get}>GET</button>
    </div>
  );
}

export default Nav;
