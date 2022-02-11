import { FunctionComponent } from "react"
import { useSelector } from "react-redux"
import { selectIsLoadingPeople, selectPeople } from "../../store/starWars/selectors"


export const People:FunctionComponent=()=>{
    const people=useSelector(selectPeople)
    const isLoading=useSelector(selectIsLoadingPeople)

    if(isLoading){
        return(<div>Loading...</div>)
    }
return(
    <div>
    Lista

    {people.map((person,index)=><div key={index}>Name: {person.name}, height:{person.height}</div>)}
    </div>
)

}