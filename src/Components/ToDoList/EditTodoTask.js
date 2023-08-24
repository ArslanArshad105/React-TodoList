import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  ButtonGroup,
} from "react-bootstrap";

const EditTodoTask = ({ editTask, task }) => {
  const [inputText, setInputText] = useState(task.taskname);

  const OnInputUpdate = (event) => {
    setInputText(event.target.value);
  };

  const updateTask = (event) => {
    if (inputText !== "") {
      event.preventDefault();
      editTask(inputText, task.id);
    }
  };
  return (
    <Container className="Input-Container">
      <InputGroup>
        <FormControl
          className="InputTodos-FormControl"
          type="text"
          placeholder="Update your Today's Task?"
          maxLength={50}
          value={inputText}
          onChange={OnInputUpdate}
          required
        />

        <ButtonGroup>
          <Button className="todo-btn" onClick={updateTask}>
            Update Task
          </Button>
        </ButtonGroup>
      </InputGroup>
    </Container>
  );
};

export default EditTodoTask;
