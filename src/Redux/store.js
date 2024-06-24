import {legacy_createStore, applyMiddleware, combineReducers} from "redux"

import {reducer as  AppReducer} from "../Redux/app/reducer";

import {reducer as  AuthReducer} from "../Redux/auth/reducer";

import {thunk} from "redux-thunk"

const rootReducer = combineReducers({AppReducer,AuthReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))