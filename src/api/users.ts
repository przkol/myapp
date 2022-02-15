import { ListResponse } from "../interfaces/ListResponse"
import { SingleResponse } from "../interfaces/SingleResponse"
import { NewUser, User } from "../interfaces/User"
import Axios from "../utils/axios"


export const getUsersRequest=():Promise<ListResponse<User>>=>
Axios.get('users')


export const postUserRequest=(newUser:NewUser)=>
Axios.post('users',newUser)



export const getUserRequest=(id:string):Promise<SingleResponse<User>>=>
Axios.get(`users/${id}`)

export const deleteUserRequest=(id:string):Promise<unknown>=>
Axios.delete(`users/${id}`)




