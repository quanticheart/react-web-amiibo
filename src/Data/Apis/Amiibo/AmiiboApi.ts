import api from "../Base/api";

const getList = () => {
    return api.get("/amiibo");
}
const getDetails = (id: string) => {
    return api.get("/amiibo?tail=" + id);
}

export default {
    getList,
    getDetails
};