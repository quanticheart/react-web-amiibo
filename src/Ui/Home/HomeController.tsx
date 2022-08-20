import React from 'react'
import HomeView from './HomeView';
import HomeModel from './HomeModel';
import {useEffect} from 'react';

const HomeController = () => {

    let homeModel: HomeModel = new HomeModel();
    const list = homeModel.getList()

    // const [count, setCount] = useState<number>(0);

    useEffect(() => {
        list.request()
    });

    return <HomeView data={list.data} loading={list.loading}/>
}


export default HomeController;