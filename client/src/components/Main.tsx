import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersApi } from "../redux/reducer/todo.reducer";
import { User } from "./utils/user";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

function Main() {
  const store = useSelector((state: any) => state.todoSlice.entities);
  console.log(store);
  
  const dispath = useDispatch();
  console.log(store);
  useEffect(() => {
  }, [store]);

  return (
    <div>
      {store?store.map((item: User, i: number) => (
        <div key={i}>
          <input type="checkbox" checked={item.status} />
          <span>{item.todo}</span>
          <span>
            <Button>
              <CreateIcon />
            </Button>
            <Button>
              <DeleteIcon />
            </Button>
          </span>
        </div>
      )):""}
    </div>
  );
}

export default Main;
