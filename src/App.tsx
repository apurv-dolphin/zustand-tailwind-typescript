import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import { useTodoStore } from "./store/todo.store";
import Actions from "./Actions";

function App() {
  const { todos } = useTodoStore((state) => state);

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen">
      <div className="container m-auto px-5 pt-5">
        <h1 className="text-center text-3xl">TODO App</h1>
        <AddTodoForm></AddTodoForm>
        <div className="mt-5">
          <Actions></Actions>
        </div>
        <ul className="mt-5">
          {todos.length < 1
            ? "No Todos"
            : todos.map((todo: any) => (
                <TodoItem key={todo.id} todo={todo}></TodoItem>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
