import React from "react";
import "../ToDoList/Todolist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Form, Col, Container } from "react-bootstrap";

const DisplayTodos = ({
  task,
  setTodosValue,
  todos,
  EditTask,
  completeTask,
}) => {
  const deleteTask = (id) => {
    setTodosValue(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container className="Todolist-container">
      <Col>
        <Form>
          <Form.Check
            checked={task.isCompleted}
            onChange={() => {
              completeTask(task.id);
            }}
          />
        </Form>
      </Col>
      <Col>
        <span className={task.isCompleted ? "On-Checked" : ""}>
          {task.taskname}
        </span>
      </Col>

      <Col>
        <FontAwesomeIcon
          className="fa-pen"
          icon={faPenToSquare}
          onClick={() => {
            EditTask(task.id);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      </Col>
    </Container>
  );
};

export default DisplayTodos;
