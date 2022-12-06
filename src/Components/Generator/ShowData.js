import React from "react";

const ShowData = () => {
    fetch(`${process.env.REACT_APP_SERVER_LINK}/alldata`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });

    return <div></div>;
};

export default ShowData;
