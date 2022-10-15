import items from "./navItems.js"
import NavItem from "./navItem.js"

const NavChoices = () => {
    return (`
    <ul class = "list-group">
        ${
        items.map(item => {
            return (NavItem(item));
        }).join('')
    }
    
    </ul>
   `);
}

export default NavChoices;






