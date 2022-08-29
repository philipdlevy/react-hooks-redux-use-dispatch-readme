// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// function Counter() {
//   // read from the Redux store
//   const items = useSelector((state) => state.items);

//   // gives us the dispatch function to send actions to the Redux store
//   const dispatch = useDispatch();

//   function handleOnClick() {
//     // dispatching an action on click
//     dispatch({ type: "count/increment" });
//   }

//   return (
//     <div>
//       <button onClick={handleOnClick}>Click</button>
//       <p>{items.length}</p>
//     </div>
//   );
// }

// export default Counter;

//////////////////////////////////////////////////////////////////////////

// we can make this code better and easier to use. We can make annd export
// an increment count function and use that


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// function incrementCount() {
//   return { type: "count/increment" };
// }

// function Counter() {
//   const items = useSelector((state) => state.items);
//   const dispatch = useDispatch();

//   function handleOnClick() {
//     dispatch(incrementCount());
//   }

//   return (
//     <div>
//       <button onClick={handleOnClick}>Click</button>
//       <p>{items.length}</p>
//     </div>
//   );
// }

// export default Counter;

//////////////////////////////////////////////////////////////////////////

// we can move and export the function from the slicer

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "./counterSlice.js";

function Counter() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(incrementCount());
  }

  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
      <p>{items.length}</p>
    </div>
  );
}

export default Counter;