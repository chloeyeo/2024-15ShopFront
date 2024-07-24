// import { createSlice } from "@reduxjs/toolkit";

// const initState = {
//   num: 0,
// };

// const counterStore = createSlice({
//   name: "counter",
//   initialState: initState,
//   reducers: {
//     up: (state, actions) => {
//       // state will be 0, actions will be 100
//       state.num += actions.payload; // we set state to 100
//       console.log("update");
//     },
//     // up: () => {
//     //   console.log("update");
//     // },
//     down: (state, actions) => {
//       state.num -= actions.payload;
//       console.log("down");
//     },
//   },
// });

// export default counterStore;

// other components will call counterStore by dispatch
// useDispatch actions = up
// export const { up, down } = counterStore.actions;

// originally will have to call counterStore.actions.up(100)
// this 100 parameter goes into the up function as 'actions' parameter
// but we're exporting up so we can just call up()

// from other components:
// to CHANGE the store values, use 'useDispatch()'
// to GET/SEE/SUBSCRIBE to store values, use 'useSelector()'
