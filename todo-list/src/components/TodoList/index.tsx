import { useQuery } from "@tanstack/react-query";
import { getList, Todo as ITodo } from "../../lib/todoAxios";
import AddTodo from "./Add";
import axios from "axios";

const TodoList = (): JSX.Element => {
  // const getLists = axios.get("/todo");
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["get", "todo"],
    queryFn: getList,
  });

  if (isLoading) return <div>now Loading</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <ul>
        {data?.map((item: ITodo, idx: number) => (
          <li key={idx}>
            {item.title}
            <button
              onClick={async () => {
                try {
                  await axios.delete(
                    `http://localhost:8080/api/todo/${item.id}`
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              삭제 버튼
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
