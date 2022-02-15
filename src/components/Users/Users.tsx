import { FunctionComponent,useEffect } from "react"
import { useSelector } from "react-redux"
import { selectIsLoadingUsers, selectIsRejectedUsers, selectUsers } from "../../store/starWars/selectors"
import { useDispatch } from 'react-redux';
import { deleteUser,  getUsers,postUser,resetUsers } from '../../store/starWars/actions';
import { NewUser } from "../../interfaces/User";
import styles from './Users.module.scss'

export const Users:FunctionComponent=()=>{
    const users=useSelector(selectUsers)
    const isLoading=useSelector(selectIsLoadingUsers)
    const isRejected=useSelector(selectIsRejectedUsers)
    const dispatch=useDispatch()

    const handleResetUsers=()=>{
        dispatch(resetUsers())
    }

    const onAddUser=()=>{
        const newUser:NewUser={
            name:'Krych',
            email:'xdd@abc.com',
            gender:'male',
            status:'active'
        }
        dispatch(postUser(newUser))
    }
    const onDeleteUser=(id:string)=>{
        dispatch(deleteUser(id))
    }

    useEffect(()=>{
        dispatch(getUsers())
      },[dispatch])   

    if(isLoading){
        return(<div>Loading...</div>)
    }
    if(isRejected){
        return(<div>Rejected...</div>)
    }
return(
    <div className={styles.root}>
    Lista
    <button onClick={handleResetUsers}>Reset</button>
    <button onClick={onAddUser}>Add user</button>
    <button onClick={onAddUser}>Add user</button>
    {users.map((user,index)=>
    <div key={index}>Name: {user.name}, gender: {user.gender} <button onClick={()=>onDeleteUser(user.id)}>DELETE</button></div>)}
    </div>
)

}