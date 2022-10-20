import React from "react";
import {FaHome, FaTwitter} from "react-icons/fa"
import {FaHashtag} from "react-icons/fa"
import {FaBell} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
import {FaBookmark} from "react-icons/fa"
import {FaList} from "react-icons/fa"
import {FaUser} from "react-icons/fa"
import {FaCircle} from "react-icons/fa"



const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item"><FaTwitter/></a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <FaHome/> Home
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <FaHashtag/> Explore
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <FaBell/> Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
               <FaEnvelope/> Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <FaBookmark/> Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <FaList/> Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <FaUser/> Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
               <FaCircle/> More
            </a>
        </div>
    );
};
export default NavigationSidebar;