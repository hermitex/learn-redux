import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
  const [value, setValue] = React.useState(1);
  const numbOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecreams - {numbOfIcecreams} </h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <input
        type="number"
        name=""
        id=""
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Icecream
      </button>
    </div>
  );
}

export default IcecreamView;
