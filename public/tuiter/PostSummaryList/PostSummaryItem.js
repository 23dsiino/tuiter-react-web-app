const PostSummaryItem = (item) => {
    return(`
<li class="list-group-item wd-pad-right-25">
    <div class="row">
        <div class="col-10">
            
            <span class = 'wd-tuit-details-text'>${item.topic}</span>
            <br/>
            <span class="wd-font-bold">${item.userName}
                <i class = 'fa fa-check-circle' ></i>
            </span>
            <span class="wd-tuit-details-text">${item.time}</span></br>
            <span>
                ${item.title}
            </span></br>
        </div>
        <div class="col-2">
            <img class = 'd-none d-sm-block d-md-none wd-rounded-corners-all-around-less' src="${item.image}" width="50px" height="50px">
            <img class = 'd-xs-block d-sm-none d-md-block  wd-rounded-corners-all-around-less' src="${item.image}" width="65px" height="65px">
        </div>
    </div>
 </li>
`)
}

export default PostSummaryItem