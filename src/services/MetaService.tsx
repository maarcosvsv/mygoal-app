import AxiosInstance from "./ConfigServer";
import Meta from "../components/classes/Meta";

class MetaService {


    getMetas = async () => {
        try {
            const response = await AxiosInstance.get(`metas/list`);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    postMetas = async (data: Meta) => {
        try {
            const response = await AxiosInstance.post(`metas/createMeta`, data);
            return response;
        } catch (error) {
            throw error;
        }
    };

}
export default new MetaService();
