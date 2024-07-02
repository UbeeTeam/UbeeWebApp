import { useGlobalStore } from "@/stores/Global";
import { HttpMethods } from "@/types/enums/httpMethods";
import axios from "axios";

const globalStore = useGlobalStore();

export async function axiosRequest(method: HttpMethods, url: string, data = {}, headers = {}, needOverlay = true) {
    try {
        if (needOverlay) {
            globalStore.toggleLoading();
        }

        const response = await axios({
            method: method,
            url: url,
            data: data,
            headers: headers
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || error.message);
        } else {
            throw new Error('An unexpected error occurred');
        }
    } finally {
        if (needOverlay) {
            globalStore.toggleLoading();
        }
    }
}