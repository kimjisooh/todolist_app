import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';
import { ReactComponent as Toggle } from "./toggle-icon.svg";
import Sidebar from './components/Sidebar'
import "./App.css";


// background: #eae9e4;
const GlobalStyle = createGlobalStyle`
  body {
    
  }

  .ToggleBtn {
    position: absolute;
    width: 50px;
    right: 2%;
    top: 1.5%;
    cursor: pointer;
  }

  .Sidebar {
    transition: 0.5s all ease-in;
    
    ${props => props.open && Sidebar.css` 
    `}
  }

`;

function App() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
      <Toggle className="ToggleBtn" onClick={onToggle} />
    
      {open && (
        <Sidebar className="Sidebar" open={open} />

      )}
        <TodoHead />
        <TodoList /> 
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
