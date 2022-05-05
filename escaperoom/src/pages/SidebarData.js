import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as CgIcons from 'react-icons/cg'

export const SidebarData = [
    {
        title: 'Home',
        path:'/home',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Social',
        path:'/home/social',
        icon:<FaIcons.FaUserFriends />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path:'/home/profile',
        icon:<CgIcons.CgProfile />,
        cName: 'nav-text'
    },
]