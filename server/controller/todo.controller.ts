import { Request, Response } from "express";
import { addTodo, getAllTodo } from "../service/todo.service"

export const getTodoController=async(req:Request,res:Response)=>{    
    const result =await getAllTodo();
    res.status(200).json({
        mesage:"Lấy data thành công",
        result
    })
}
export const addTodoController=async(req:Request,res:Response)=>{ 
    console.log("đấ");
       
    const result =await addTodo(req.body);
    res.status(201).json({
        mesage:"Thêm thành công",
    })
}