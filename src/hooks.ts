import { useDispatch,useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState,AppDispatch } from "./store";

export const usePostDispatch : ()=> AppDispatch = useDispatch
export const usePostSelector : TypedUseSelectorHook<RootState> = useSelector 