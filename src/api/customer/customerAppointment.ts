import { axiosRequest } from "../axiosRequest";
import { API_URL_CUSTOMER } from "@/constants/api";
import { HttpMethods } from "@/types/enums/httpMethods";
import type { CodeVerifier, CreateAppontment, CreateAppontmentHeaders } from "@/types/api/Customer.ts";

export const callAuthenticator = (phoneNumber: string): Promise<any> => {
    return axiosRequest(HttpMethods.GET, `${API_URL_CUSTOMER}/CallAuthenticator/${phoneNumber}`);
}

export const codeVerifier = (data: CodeVerifier): Promise<any> => {
    return axiosRequest(HttpMethods.POST, `${API_URL_CUSTOMER}/CodeVerifier`, data);
}

export const createAppointment = (data: CreateAppontment, headers: CreateAppontmentHeaders): Promise<any> => {
    return axiosRequest(HttpMethods.POST, `${API_URL_CUSTOMER}/CreateAppointmentAsync`, data, headers);
}

export const smsAuthenticator = (phoneNumber: string): Promise<any> => {
    return axiosRequest(HttpMethods.GET, `${API_URL_CUSTOMER}/SMSAuthenticator/${phoneNumber}`)
}