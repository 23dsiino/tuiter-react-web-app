import React from "react";
import na from "../images/nasa.png"
import sx from '../images/sx.jpeg'
import te from '../images/tesla.jpeg'

const WhoToFollowImage = ({
                              who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
                          }) => {

    if(who.avatarIcon === "na"){
        return (<img className="rounded-circle" height={48} width={48} src={na}/>);
    }
    if(who.avatarIcon === "sx"){
        return (<img className="rounded-circle" height={48} width={48} src={sx}/>);
    }
    if(who.avatarIcon === "te"){
        return (<img className="rounded-circle" height={48} width={48} src={te}/>);
    }

}
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <WhoToFollowImage who={who}/>

                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};

export default WhoToFollowListItem;