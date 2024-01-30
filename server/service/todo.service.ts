import  mysql  from 'mysql2/promise';
import pool from '../utils/mysql.utils';
export const getAllTodo=async()=>{
    const todo=mysql.createPool(pool)
    const [result]:any=await todo.execute("SELECT * FROM todolists");
    console.log(result);
    return result
}
export const addTodo=async(users:any)=>{
    const todo=mysql.createPool(pool)
    const [result]:any=await todo.execute("INSERT INTO todolists(todo) values (?)",[users.todo]);
    return result
        
}