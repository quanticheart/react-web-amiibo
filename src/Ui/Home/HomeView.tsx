import './Home.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import {Amiibo, AmiiboList} from "../../Domain/Models/Amiibo";
import {Box, CircularProgress} from "@mui/material";
import {Title, Main, CustomLink} from "./HomeStyle";
import Loading from "../Components/Loading";

interface IProps {
    data: AmiiboList | null;
    loading: boolean;
}

const HomeView = ({data, loading}: IProps) => {
    if (loading) {
        return <Loading/>;
    } else {
        let list = data?.amiibo?.slice(0, 5)
        let cards = list?.map((data) => {
            return <Card sx={{display: 'flex'}} key={data.tail}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography component="div" variant="h5">
                            {data.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {data.gameSeries}
                        </Typography>
                    </CardContent>
                    <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                        <CustomLink to={`detail/${data.tail}`}>Details</CustomLink>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{width: 100}}
                    image={data.image}
                    alt={data.name}
                />
            </Card>
        })

        return (
            <Container maxWidth="xl">
                <Stack direction={{xs: 'column', sm: 'row'}}
                       spacing={{xs: 1, sm: 2, md: 4}}>
                    {cards}
                </Stack>
            </Container>
        );
    }
}

export default HomeView;