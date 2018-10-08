import { applyMiddleware, combineReducers, createStore } from "redux";

// Initial State
export const initialPageState = {
  title: "Hello World!",
  clickCounter: 0,
  colorCounter: {
    red: 0,
    blue: 0,
    green: 0
  }
};

// actions.js
export const changePageTitle = title => ({
  type: "CHANGE_PAGE_TITLE",
  title
});
export const incrementPageCounter = () => ({
  type: "INCREMENT_PAGE_COUNTER"
});
export const incrementColorCounter = color => ({
  type: "INCREMENT_COLOR_COUNTER",
  color
});

// reducers.js
export const pageContent = (state = initialPageState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE_TITLE":
      return Object.assign({}, state, {
        title: action.title
      });
    case "INCREMENT_PAGE_COUNTER":
      return Object.assign({}, state, {
        clickCounter: state.clickCounter + 1
      });
    case "INCREMENT_COLOR_COUNTER":
      var colorCounter = Object.assign({}, state.colorCounter);
      colorCounter[action.color] += 1;
      return Object.assign({}, state, {
        colorCounter: colorCounter
      });
    default:
      return state;
  }
};

export const reducers = combineReducers({
  pageContent
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
