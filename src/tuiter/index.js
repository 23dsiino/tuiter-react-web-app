import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore/index.js";
import whoReducer from "./reducers/who-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
import HomeComponent from "./home/index.js";
import {Route, Routes} from "react-router";


const store = configureStore({
    reducer: {who: whoReducer,
                tuitsData: tuitsReducer}
    }
);

function Tuiter() {
    return (
    <Provider store={store}>

                <Routes>
                    <Route path={'/tuiter/explore/'} element={<ExploreComponent/>}/>
                    <Route path={''} element={<HomeComponent/>}/>
                    <Route path={'/explore/'} element={<ExploreComponent/>}/>

                    <Route path={'explore'} element={<ExploreComponent/>}/>

                </Routes>

    </Provider>

    );
}

export default Tuiter