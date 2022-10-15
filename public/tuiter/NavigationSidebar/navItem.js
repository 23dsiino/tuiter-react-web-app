const NavItem = (item) => {
    return(`
        <a class="list-group-item" href="/">
           <span class = "d-none d-xl-block"> <i class="${item.img}"></i> ${item.text}</span>
           <span class = "d-xl-none"> <i class="${item.img}"></i></span>
     </a>`

    );
}
export default NavItem;