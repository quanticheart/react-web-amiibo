import api from "../Base/api";

const getList = () => api.get("/amiibo");
const getDetails = (id: string) => api.get("/amiibo?tail=" + id);

export default {
    getList,
    getDetails
};