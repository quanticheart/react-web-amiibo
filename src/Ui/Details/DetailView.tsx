import {ButtonMaxSize, MainStack, TitlePage} from './DetailStyle'
import {AmiiboDetails} from "../../Domain/Models/Amiibo";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import Loading from "../Components/Loading";

interface iProps {
    details: AmiiboDetails | null;
    loading: boolean;
    onBackButton: Function;
}

const DetailView = ({details, loading, onBackButton}: iProps) => {
    if (loading) {
        return <Loading/>;
    } else {
        const data = details?.amiibo[0] ?? null
        return (
            <MainStack spacing={2}>
                <CardMedia
                    component="img"
                    sx={{width: 200}}
                    image={data?.image}
                    alt={data?.name}
                />
                <TitlePage
                    gutterBottom
                    variant="h3"
                    color="primary.main"
                >
                    {data?.name ?? "Not Defined"}
                </TitlePage>
                <ButtonMaxSize variant="primary" onClick={() => onBackButton()}>
                    Back
                </ButtonMaxSize>
            </MainStack>
        );
    }
};

export default DetailView;