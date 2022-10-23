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
                <FaHome/> <span className={"d-none d-xl-block"}>Home</span>
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <FaHashtag/> <span className={"d-none d-xl-block"}>Explore</span>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <FaBell/> <span className={"d-none d-xl-block"}>Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <FaEnvelope/> <span className={"d-none d-xl-block"}>Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <FaBookmark/> <span className={"d-none d-xl-block"}>Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <FaList/> <span className={"d-none d-xl-block"}>Lists</span>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <FaUser/> <span className={"d-none d-xl-block"}>Profile</span>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <FaCircle/><span className={"d-none d-xl-block"}> More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;