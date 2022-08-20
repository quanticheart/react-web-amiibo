import React from "react";
import HomeController from "../Ui/Home/HomeController";
import DetailController from "../Ui/Details/DetailsController";
import {Routes, Route} from "react-router-dom";

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeController/>}/>
            <Route path="detail">
                <Route path=":infoID" element={<DetailController/>}/>
                <Route path="add" element={<DetailController/>}/>
            </Route>
        </Routes>
    );
};

export default routes;