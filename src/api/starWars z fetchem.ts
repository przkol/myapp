import { ListResponse } from "../interfaces/ListResponse"
import { User } from "../interfaces/User"
import Axios from "../utils/axios"


export const getUsersRequest=():Promise<ListResponse<User>>=>{
return Axios.get('https://swapi.dev/api/people')
    .then(response=>response)
    .catch(error=>error)
}

export const getUsersRequest2=()=>fetch('https://swapi.dev/api/people')
    .then(response=>{
    return response.json();})
    .then(response=>response)
    .catch(error=>error)