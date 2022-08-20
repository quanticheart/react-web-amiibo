import api from "../Base/api";

const getList = () => api.get("/amiibo");
const getDetails = (id: string) => api.get("/amiibo?tail=" + id);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getList,
    getDetails
};