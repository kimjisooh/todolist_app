import React from 'react';
import "../Sidebar.css";
import {SidebarData} from './SidebarData';
import { ReactComponent as Me } from '../assets/me-icon.svg';
import { ReactComponent as WhiteMode } from '../assets/whitemode-icon.svg';
import { ReactComponent as Calendar } from "../assets/calendar-icon.svg";
import { ReactComponent as Goal } from "../assets/goal-icon.svg";
import { ReactComponent as Setting } from "../assets/setting-icon.svg";
import { ReactComponent as Imoji } from "../assets/imoji-icon.svg";
import { ReactComponent as Keep } from "../assets/keep-icon.svg";
import styled from 'styled-components';

function Sidebar() {
  return (
  <div className='Sidebar'>
    <div className='profile'>
      <Me className="me-icon" />
      <p className='user-name'>jisooh</p>
      <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
          return (
            <li 
              key={key} 
              className='row'
              id={window.location.patothname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link
              }}
            > 
              
              <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div>
            </li>
          );
        })}
        <div className='sunmode-background'>
          <WhiteMode className="sunmode" />
        </div>
        <div className='setting-background'>
          <Setting className="setting" />
        </div>
        <div className='imoji-background'>
          <Imoji className="imoji" />
        </div>
      </ul>
    </div>
    
    <ui className="menu">
      <li className='menu-item'><Calendar className="calendar"/>달력</li>
      <li className='menu-item'><Goal className="goal"/>목표</li>
      <li className='menu-item'><Keep className="keep"/>보관함</li>
    </ui>
  </div>
  );
}

export default Sidebar