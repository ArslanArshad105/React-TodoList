import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import InputTodos from "./InputTodos";
import DisplayTodos from "./DisplayTodos";
import EditTodoTask from "./EditTodoTask";
import Footer from "./Footer";
import { v4 as uuidv4 } from "uuid";

const TodosList = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("Todos")
      ? JSON.parse(localStorage.getItem("Todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const setTodosValue = (val) => {
    setTodos(val);
  };

  const AddTodo = (taskn) => {
    setTodos([
      ...todos,
      { id: uuidv4(), taskname: taskn, isCompleted: false, isEditing: false },
    ]);
  };

  const editable = (id) => {
    const ind = todos.findIndex((todo) => {
      return todo.id === id;
    });

    let temp = [...todos];
    temp[ind].isEditing = !temp[ind].isEditing;
    setTodos([...temp]);
  };

  const editTask = (taskname, id) => {
    const ind = todos.findIndex((todo) => {
      return todo.id === id;
    });
    let temp = [...todos];
    temp[ind].taskname = taskname;
    temp[ind].isEditing = !temp[ind].isEditing;
    setTodos([...temp]);
  };

  const completeTask = (id) => {
    const ind = todos.findIndex((todo) => {
      return todo.id === id;
    });
    let temp = [...todos];
    temp[ind].isCompleted = !temp[ind].isCompleted;
    setTodos([...temp]);
  };

  return (
    <>
      <Container className="Todo-Main-Container">
        <Container className="Todo-Center-Container">
          <InputTodos AddTodo={AddTodo} />
          {todos.map((todo, index) =>
            todo.isEditing ? (
              <EditTodoTask editTask={editTask} key={index} task={todo} />
            ) : (
              <DisplayTodos
                key={index}
                task={todo}
                todos={todos}
                setTodosValue={setTodosValue}
                EditTask={editable}
                completeTask={completeTask}
              />
            )
          )}
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default TodosList;
