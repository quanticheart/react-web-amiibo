import baseApi from "../../Data/Apis/Base/baseApi";
import amiiboApi from "../../Data/Apis/Amiibo/AmiiboApi";

export default class HomeModel {

    getList() {
        return baseApi(amiiboApi.getList)
    }

    getDetails() {
        return baseApi(amiiboApi.getDetails)
    }
}