import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as CgIcons from 'react-icons/cg'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Home',
        path:'/home',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    /* {
        title: 'Leadboard',
        path:'/home/leadboard',
        icon:<BsIcons.BsTable />,
        cName: 'nav-text'
    }, */
    {
        title: 'Social',
        path:'/home/social',
        icon:<FaIcons.FaUserFriends />,
        cName: 'nav-text'
    },
    {
        title: 'Help',
        path:'/home/help',
        icon:<AiIcons.AiFillQuestionCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path:'/home/profile',
        icon:<CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title: 'Docs',
        path:'/home/docs',
        icon:<IoIcons.IoMdDocument />,
        cName: 'nav-text'
    },
]
