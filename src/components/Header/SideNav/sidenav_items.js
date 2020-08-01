import React from 'react';
import {Link} from 'react-router-dom';

import style from './sideNav.module.css';
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faNewspaper, faPlay, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const SideNavItems = () => {

    const items = [
        {
            type:style.option,
            icon:faHome,
            text:'Home',
            link:'/',
        },
        
        {
            type:style.option,
            icon:faNewspaper,
            text:'News',
            link:'/news',
        },

        {
            type:style.option,
            icon:faPlay,
            text:'Videos',
            link:'/videos',
        },

        {
            type:style.option,
            icon:faSignInAlt,
            text:'Sign in',
            link:'/sign-in',
        },

        {
            type:style.option,
            icon:faSignOutAlt,
            text:'Sign out',
            link:'/sign-out',
        },
    ]

    const showItems = () => {
        return items.map((item,i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesomeIcon icon={item.icon}
                        style={{color:'#FFFFFF', paddingRight:10}}/>
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
            {showItems()}
        </div>
     )
}
 
export default SideNavItems;