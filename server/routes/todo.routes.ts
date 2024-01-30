import  express  from 'express';
import { addTodoController, getTodoController } from '../controller/todo.controller';
const userRouter=express.Router();
userRouter.get("/api/v1/todo",getTodoController);
userRouter.post("/api/v1/todo",addTodoController);

export default userRouter
