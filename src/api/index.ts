import axios, { AxiosError } from "axios";

export type APIResult<T> = {
    error?: undefined;
    result: T;
} | {
    error: string;
    result?: undefined;
};

/**
 * 
 * @returns JWT token of user, or error message if error exists. 
 */
export const signin = async (email: string, password: string): Promise<APIResult<string>> => {
    const body = {
        studentId: email,
        password: password,
    };
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/auth/signin`,
            body
        );
        const token = response.data.access_token as string;
        return { result: token };
    } catch (e) {
        const error = e as AxiosError;
        return { error: (error.response?.data as any).message }
    }
}

/**
 * 
 * @returns JWT token of user, or error message if error exists. 
 */
export const signup = async (email: string, password: string): Promise<APIResult<string>> => {
    const body = {
        studentId: email,
        password: password,
    };
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/auth/signup`,
            body
        );
        const token = response.data.access_token as string;
        return { result: token };
    } catch (e) {
        const error = e as AxiosError;
        return { error: (error.response?.data as any).message }
    }
}

/**
 * 
 * @returns boolean indicating whether the user has edited the profile, or error message 
 * if error exists. 
 */
export const userEditedProfile = async (token: string): Promise<APIResult<boolean>> => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/profilestatus`,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        );
        return { result: response.data };
    } catch (e) {
        const error = e as AxiosError;
        return { error: (error.response?.data as any).message }
    }
}