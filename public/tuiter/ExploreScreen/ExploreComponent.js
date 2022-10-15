import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
            <div class="input-group override pb-2 wd-float-left-most">
                <span class="input-group-text orr"><i class = 'fa fa-search'></i></span>
                <input type="text" class="form-control override" placeholder="Search Tuitter">
            </div >
            <div class = "align-items-center wd-float-right-small">
            <i class="align-items-center fa fa-cog text-primary fa-2x"></i>
            </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-block d-sm-none d-md-block" href="entertainment.html">Entertainment</a>

                </li>
           </ul>
           <div class ='card'>
                <img src="../images/sship.jpeg" class="card-img" alt="hey">

                <div class="card-img-overlay text-white d-flex align-items-end">
                    <h2 class="card-title">SpaceX's Starship</h2>
                </div>

            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
