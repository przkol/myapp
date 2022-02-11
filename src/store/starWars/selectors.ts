import { RootState } from "../reducers";

export const selectPeople=(state:RootState)=>state.starWars.people
export const selectIsLoadingPeople=(state:RootState)=>state.starWars.isLoading