import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import { ReactComponent as LeftArrow } from "../assets/left-icon.svg";
import { ReactComponent as RightArrow } from "../assets/right-icon.svg";
import moment from 'moment';
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';

// padding-left: 32px;
// padding-right: 32px;
// padding-bottom: 24px; 
const TodoHeadBlock = styled.div`
  padding-top: 75px;
  background-image: url('');
  margin: 0 auto;

  .left-arrow {
    position: absolute;
    top: 14%;
    left: 5%;
    width: 22px;
    cursor: pointer;
  }

  .right-arrow {
    position: absolute;
    top: 14%;
    right: 5%;
    width: 22px;
    cursor: pointer;
  }

  h1 {
    display: flex;
    flex-direction: colunm;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 1.6rem;
    color: #fff;
    letter-spacing: 3px;
  }

  .day {
    display: flex;
    flex-direction: colunm;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    color: #f8f9fa;
    font-size: 1.2rem;
  }

  .background {
    display: flex;
    flex-direction: colunm;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 175px;
    height: 35px;
    background-color: #f8f9fa;
    border-radius: 30px;
  }

  .tasks-left {
    color: #454545;
    font-size: 0.95rem;
    font-weight: bold;
    display: flex;
    flex-direction: colunm;
    justify-content: center;
    align-items: center;
  }

  .tasks-left > .tasks-all {
    color: #6b6b6b;
    font-weight: 500;
  }

  .sunmode {
    position: absolute;
    top: 0%;
    right: 0%;
    width: 50px;
    cursor: pointer;
  }
`;

function TodoHead () {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
  
  const today = new Date();
  const nowTime = moment().format('YYYY.MM.DD');

  // const today = new Date();
  // const dateString = today.toLocaleDateString('ko-kR', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric'
  // });

  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long'
  });

  return (
    <TodoHeadBlock>
      <LeftArrow className="left-arrow" />
      <RightArrow className="right-arrow" />
      {/* <h1>{dateString}</h1> */}
      <h1>{nowTime}</h1>
      {/* <SunMode className="sunmode"/> */}
      <div className='day'>{dayName}</div>
      <div className='background'>
        <div className='tasks-left'>할 일 {undoneTasks.length}개 남음<span className='tasks-all'>&nbsp;/ 총 {todos.length}개</span></div>
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;