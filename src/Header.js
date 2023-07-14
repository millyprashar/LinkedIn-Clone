import React, { Component } from 'react'
import "./Header.css";
import HeaderOption from './HeaderOption';
import { Search } from '@mui/icons-material'
import { Home } from '@mui/icons-material';
import { SupervisorAccount } from '@mui/icons-material';
import { BusinessCenter } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__left">
            <img src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            <div className="header__search">
                <Search />
                <input type="text" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={ Home } title='Home'/>
            <HeaderOption Icon={SupervisorAccount } title='My Network' />
            <HeaderOption Icon={BusinessCenter } title='Jobs' />
            <HeaderOption Icon={Chat} title='Messaging' />
            <HeaderOption Icon={Notifications} title='Notifications' />
            <HeaderOption avatar="" title='Me' />


        </div>
      </div>
    )
  }
}
