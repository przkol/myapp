import { createReducer } from "@reduxjs/toolkit";
import { Person } from "../../interfaces/Person"
import { getPeople } from "./actions";


interface InitState{
    people:Person[]
    isLoading:boolean
}

const initState:InitState={
    people:[],
    isLoading:false
}

export const starWars=createReducer(initState,builder=>
    builder
    .addCase(getPeople.pending,state=>{
    state.isLoading=true
    })
    .addCase(getPeople.fulfilled,(state,{payload})=>{
        state.people=payload.data.results
        state.isLoading=false
    })
    // .addCase(getPeople.rejected)

)