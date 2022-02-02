import React from 'react';
import styled, { css } from 'styled-components';
// import { MdDone, MdDelete } from 'react-icons/md';
// import { MdDone } from 'react-icons/md';
import { ReactComponent as Bin } from "../assets/bin-icon.svg";
import { ReactComponent as Check } from "../assets/check-icon.svg";
import { useTodoDispatch } from '../TodoContext';

const CheckCircle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 3px solid #eae9e4;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7%;
  cursor: pointer;
  ${props => props.done && css`
    border: 3px solid #5b5b5b;
    color: #3087ef;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 1.15rem;
  font-weight: 200;
  color: #eae9e4;
  margin-left: 0%;
  line-height: 2;
  margin-right: 2%;
  border-bottom: 2px solid #eae9e4;
  ${props => props.done && css`
    color: #5b5b5b;
    font-style: italic;
    text-decoration: line-through;
    border-bottom: 2px solid #5b5b5b;
  `}
`;

const Remove = styled.div`
  dispaly: flex;
  align-items: center;
  justify-content: center;
  font-size: 0px;
  margin-right: 3%;
  box-sizing: border-box;
  position: absolute;
  right: 0%;
  width: 80px;
  cursor: pointer;
  &:hover {
    fill: #ff6b6b;
  }
`;

// padding-top: 12px;
// padding-bottom: 12px;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2vh;
  padding-bottom: 1.5vh;  
`;
// &:hover {
//   ${Remove} {
//     opacity: 1;
//   }
// }

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => 
    dispatch({
      type: 'TOGGLE',
      id 
    });

  const onRemove = () => 
    dispatch({
      type: 'REMOVE',
      id
    });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {/* {done && <MdDone />} */}
        {done && <Check />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove} >
        {/* <MdDelete /> */}
        <Bin />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);