import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUserRequest, getUserRequest, getUsersRequest, postUserRequest } from "../../api/users";
import { NewUser } from "../../interfaces/User";

export const getUsers=createAsyncThunk('/users/getUsers',()=>
getUsersRequest())

export const postUser=createAsyncThunk('',(newUser:NewUser)=>
postUserRequest(newUser))

export const resetUsers=createAction('users/resetUsers')

export const getUserDetails=createAsyncThunk('',(id:string)=>
    getUserRequest(id)
)

export const deleteUser=createAsyncThunk('',(id:string)=>
    deleteUserRequest(id)
)