import axios from "axios";
import { getDetails } from "../../constants/apiData";

export const getDetailsShows = async (id) => {
    const { data, status } = await axios.get(getDetails(id));
    return {status,data};
}

export default getDetailsShows;