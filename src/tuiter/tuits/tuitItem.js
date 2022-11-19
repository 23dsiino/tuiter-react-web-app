import React from "react";
import {BsPatchCheckFill} from "react-icons/bs";
import hp from '../images/hp.png'
import sx from '../images/sx.jpeg'
import ss from '../images/ssnape.jpeg'
import hg from '../images/hg.jpeg'
import bc from '../images/bc.png'
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitImage = ({post}) => {
    if( post.image === 'hp'){
        return (<img width={50}height={50}
                    className="float-end rounded-circle"
                    src={hp}/>);

    }
    if (post.image === 'sx'){
        return (<img width={50}height={50}
                     className="float-end rounded-circle"
                     src={sx}/>);
    }
    if(post.image === 'ss'){
        return (<img width={50} height={50}
                     className="float-end rounded-circle"
                     src={ss}/>);
    }
    if(post.image === 'hg'){
        return (<img width={50}height={50}
                     className="float-end rounded-circle"
                     src={hg}/>);
    }
    if(post.image === 'bc'){
        return (<img width={50}height={50}
                     className="float-end rounded-circle"
                     src={bc}/>);
    }
}
const TuitItem = ({post}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(

            <div className="row">
                <div className="col-auto">
                    <TuitImage post={post}/>
                </div>
                <div className="col-9 col-sm-8">
                    <span className={'wd-bold'}> {post.userName} </span>
                    <span>      </span>
                    <span className={'text-primary'}>
                        <BsPatchCheckFill/>
                    </span>
                    <span>      </span>
                    {post.handle} • {post.time}
                    <div>{post.tuit}</div>
                </div>
                <div className={'col-1'}>
                    <i className={'bi bi-x-lg float-end'}
                       onClick={() => deleteTuitHandler(post._id)}></i>
                </div>

            </div>

    );
};

export default TuitItem;