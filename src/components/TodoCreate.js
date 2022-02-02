import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// import { MdAdd } from 'react-icons/md';
import { ReactComponent as Add } from "../assets/add-icon.svg";   
import { useTodoNextId ,useTodoDispatch } from '../TodoContext';

const CircleButton = styled.button`
  background: #595959;
  &:hover {
    background: #595959;
  }
  &:active {
    background: #595959;
  }

  z-index: 5;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 87%;
  bottom: 70px;
  transform: translate(-50%, 50%) rotate(85deg);

  font-size: 60px;
  color: #fff;
  border-radius: 50%;
  border: none;
  outline: none;

  transition: 0.125s all ease-in;

  ${props => props.open && css`
    background: #909090;
    &:hover {
      background: #909090;
    }
    &:active {
      background: #909090;
    }
    transform: translate(-50%, 50%) rotate(0deg);
  `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`; 

// border-bottom-left-radius: 16px;
// border-bottom-right-radius: 16px;
// border-top: 3px solid #3d3c3e;
// background: #f8f9fa;
const InsertForm = styled.form`
    background-color: #4c4c4c;
    padding: 32px;
    padding-top: 5px;
    padding-bottom: 130px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

// border: 3px solid #f8f9fa;
const Input = styled.input`
    padding: 12px;
    position: absolute;
    left: 7%;
    bottom: 50%;
    transform: translate(0%,50%);
    border-radius: 30px;
    border: 1.5px solid #eaeaea;
    width: 70%;
    height: 40%;
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
    {open && (
      <InsertFormPositioner>
        <InsertForm onSubmit={onSubmit}>
          <Input 
            placeholder='할 일을 입력해주세요.' 
            autoFocus 
            onChange={onChange}
            value={value}  
          />
        </InsertForm>
      </InsertFormPositioner>
    )}
    <CircleButton onClick={onToggle} open={open}>
      {/* <MdAdd /> */}
      <Add />
    </CircleButton>
    </>
  ); 
}

export default React.memo(TodoCreate);