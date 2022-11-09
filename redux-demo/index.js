const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERD";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// action create
function orderCake() {
  // actions
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

// state
const initialState = {
  numOfCakes: 10,
};

// reducer
// (previousState, action) => newState;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

// redux store
const store = createStore(reducer);

// get state
console.log("initial state ", store.getState());

// subscribe
const unsubscribe = store.subscribe(() =>
  console.log("updated state ", store.getState())
);

// dispatcher
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

// unsubscribe
unsubscribe();
