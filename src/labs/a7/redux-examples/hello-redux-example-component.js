import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    const hello = useSelector(data => data.hello);
    return(

        <h3>{hello.message}</h3>
    );
};

export default HelloReduxExampleComponent;