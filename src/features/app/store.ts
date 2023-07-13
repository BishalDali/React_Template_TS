import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./apiSlice";
import { authSlice, handleInitialState } from "../auth/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

handleInitialState()
  .then((authUser) => {
    if (authUser) {
      store.dispatch(authSlice.actions.setAuth({
            isAuthenticated: true,
            user: authUser?.data.user,
        }));
      
    } else {
      store.dispatch(authSlice.actions.setLogout());
    }
  })
  .catch((error) => {
    console.log(error);
  });



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
