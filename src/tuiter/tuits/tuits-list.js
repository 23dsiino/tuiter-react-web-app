import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitItem from "./tuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(post =>

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