const WhoToFollowListItem = (who) => {
    return(`
    <li class = 'list-group-item'>
    <div class = 'row'>
        <div class = 'col-2'>
            <img src = '${who.avatarIcon}' class = 'wd-rounded-corners-all-around' width="40px" height = '40px'>
        </div>
        <div class = 'col-6'>
            <span class = "wd-font-bold"> ${who.userName} </span><i class = 'fa fa-check-circle' ></i> </br>
        <span class = 'wd-overlap'>${who.handle}</span>
    </div>
    <div class = 'col-4'>
        <a href="../tuit.html" class="justify-content-center wd-full-width wd-font-12 mt-2 btn btn-primary override">
            Follow</a>
    </div>
</div>
</li>
    `)
}


export default WhoToFollowListItem