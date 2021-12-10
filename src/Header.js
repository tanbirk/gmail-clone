import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"


function Header() {
    return <div className='header'>
            <div  className='header__left'>
                <IconButton>
                <MenuIcon />
                </IconButton>
                <img src="data:image/png;base64,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" alt="" />
            </div>

            <div  className='header__middle'>
                <SearchIcon />
                <input placeholder='Search Mail' type="text" />
                <ArrowDropDownIcon className ="header__inputCaret" />
            </div>

            <div  className='header__right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
    </div>
}

export default Header
