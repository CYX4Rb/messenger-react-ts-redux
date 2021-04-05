import { combineReducers, createStore } from "redux"
import { MessagesReducer } from "./Messages";
import { UserReducer } from "./UserReducer";

export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>

const rootReducer = combineReducers({
    users: UserReducer,
    messages: MessagesReducer
})

export const store = createStore(rootReducer) 