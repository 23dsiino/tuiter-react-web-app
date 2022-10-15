import NavChoices from "./navChoices.js";


const NavigationSidebar = () => {
       return (`
       <div class="list-group">
       ${NavChoices()}
      
     <div class="d-grid mt-2">
     <a href="tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>

          </div>`);
}

$('#nav-sidebar').append(
    `${NavigationSidebar()}`);

export default NavigationSidebar;