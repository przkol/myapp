import { ListResponse } from "../interfaces/ListResponse"
import { Person } from "../interfaces/Person"
import fetch from "../utils/fetch"


export const getPeopleRequest=():Promise<ListResponse<Person>>=>{
return fetch.get('https://swapi.dev/api/people')
}