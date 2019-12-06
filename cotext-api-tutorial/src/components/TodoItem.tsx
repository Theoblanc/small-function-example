import React, { useContext } from "react";
import { ThemeContext } from "../App";

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <li>
      <span style={theme}>{todo.text}</span>
      <span>(X)</span>
    </li>
  );
}

export default TodoItem;
