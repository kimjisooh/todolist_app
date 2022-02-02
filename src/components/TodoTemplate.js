import React from 'react';
import styled from 'styled-components';


// border: 5px solid #3d3c3e;
// border-radius: 16px;
// box-shadow: 0 0 8px rgba(0, 0, 0 , 0.04);
const TodoTemplateBlock = styled.div`
  width: 100vw;
  height: 100vh;  

  max-width: 450px;

  position: relative;
  background: #3c3c3c;

  margin: 0 auto;
  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;