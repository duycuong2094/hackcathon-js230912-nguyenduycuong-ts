import { ChangeEvent, useState } from 'react'
import { User } from './utils/user'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { AddUsersApi } from '../redux/reducer/todo.reducer'


function FormInput() {
const [user,setUser]=useState<User>({
    todo:"",
    status:true
})
const dispatch=useDispatch()
const changeInput=(e:ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,[e.target.name]:e.target.value})
}
const addTodo=()=>{
    console.log(user);
dispatch(AddUsersApi(user))
}

  return (
    <div>
        <input type="text" onChange={changeInput} value={user.todo} name='todo' /> <Button onClick={addTodo}>ADD ITEM</Button>
    </div>
  )
}

export default FormInput