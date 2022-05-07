import { legacy_createStore as createStore,combineReducers } from "redux";
import { emailReducer } from "./Email/reduser"
import { UserIdReducer } from "./UserId/reduser";

const RootReduser=combineReducers({
   email:emailReducer,
   userId:UserIdReducer
  
});

export const store=createStore(
    RootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );
