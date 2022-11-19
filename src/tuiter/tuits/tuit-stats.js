import React from "react";
import {FaRegComment} from "react-icons/fa"
import {FaRetweet} from "react-icons/fa";

import {useDispatch} from 'react-redux'
import {FaShare} from "react-icons/fa";
import {updateTuitThunk} from "../../services/tuits-thunks";


const TuitStats = ({post}) =>{
    console.log(post)
    const dispatch = useDispatch();
    return (
        <div className={'row mt-2 small'}>
            <div className={'col-2'}/>
            <div className={'col-2'}>
                <FaRegComment className={'wd-stroke-transparent'}/>
                <span className={'ps-1'}>{post.replies}</span>
            </div>
            <div className={'col-2'}>
                <FaRetweet/>
                <span className={'ps-1'}>{post.retuits}</span>
            </div>
            <div className={'col-2'}>



                {!post.liked && <i onClick={() =>

                        dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes + 1,
                            liked: !post.liked
                    }))} className="bi bi-heart me-2 "></i>}
                {post.liked && <i onClick={() =>

                    dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes - 1,
                        liked: !post.liked
                    }))} className="bi bi-heart-fill text-danger me-2"></i>}
                {post.likes}


            </div>
            <div className={'col-2'}>
                <FaShare/>
            </div>
        </div>
    );
};



export default TuitStats


