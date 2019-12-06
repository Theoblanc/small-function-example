import React from "react";
import TodoListForm from "./components/TodoListForm";
import TodoList from "./components/TodoList";

export const themes = {
  color: "red"
};

export const ThemeContext = React.createContext(themes);

console.log(ThemeContext);

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeContext.Provider value={{ color: "black" }}>
        <TodoListForm />
        <TodoList />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
