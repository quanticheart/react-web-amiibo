import React, {useEffect} from "react";
import {NavigateFunction, useNavigate, useParams} from "react-router-dom";
import DetailView from "./DetailView";
import HomeModel from "../Home/HomeModel";

const DetailsController = () => {
    const {infoID} = useParams();
    let homeModel: HomeModel = new HomeModel();
    const details = homeModel.getDetails()

    let navigate: NavigateFunction = useNavigate();

    const onBackButton = () => {
        navigate(-1);
    };

    useEffect(() => {
        details.request(infoID)
    });

    return <DetailView details={details.data} loading={details.loading} onBackButton={onBackButton}/>;
};

export default DetailsController;