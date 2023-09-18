import React, { useState } from "react";
import { useTodoStore } from "./store/todo.store";

function AddTodoForm() {
  const [value, setValue] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const { addTodo, todos } = useTodoStore((state) => state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Access the value of the input field using a ref or state
    if (value === "") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    } else {
      addTodo({
        id: todos.length + 1,
        title: value,
        completed: false,
      });

      setValue(""); // Clear the input field after submission
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3 justify-center mt-5">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="rounded-md text-black text-xl pl-2"
          />
          <button className="bg-indigo-500 p-2 rounded-md" type="submit">
            Add Todo
          </button>
        </div>
      </form>
      {show && (
        <div className="fixed top-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-md">
          Please fill the field.
        </div>
      )}
    </>
  );
}

export default AddTodoForm;
