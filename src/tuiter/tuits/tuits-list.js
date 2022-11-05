import React from "react";
import TuitItem from "./tuitItem";
import TuitStats from "./tuit-stats";
import {useSelector} from "react-redux";

const TuitsList = () => {

    const postsArray = useSelector(state => state.tuits);

    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <li className={'list-group-item'}>
                    <TuitItem
                        key={post._id} post={post}/>
                     <TuitStats
                         post={post}/>
                    </li>
                )
            }
        </ul>
    );
};
export default TuitsList;