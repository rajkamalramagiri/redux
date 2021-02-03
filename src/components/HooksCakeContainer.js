import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hooks{numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}> buy cake </button>
    </>
  );
}

export default HooksCakeContainer;
