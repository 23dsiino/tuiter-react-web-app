import React from "react";
import {FaRegComment} from "react-icons/fa"
import {FaRetweet} from "react-icons/fa";
import {FaHeart} from 'react-icons/fa'
import {FaRegHeart} from "react-icons/fa";
import {FaShare} from "react-icons/fa";


const TuitStats = ({post}) =>{
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
                {post.liked && <span className={'text-danger'}><FaHeart/>
                </span>}
                {!post.liked && <FaRegHeart/>}
                <span className={'ps-1'}>{post.likes}</span>
            </div>
            <div className={'col-2'}>
                <FaShare/>
            </div>
        </div>
    );
};



export default TuitStats


