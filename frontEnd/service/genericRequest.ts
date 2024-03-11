import axios from "axios";
import api from "./api";

type SucessResponse<T> = {
  data: T;
  error?: string;
};

export const genericRequest = async <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  body?: unknown
): Promise<SucessResponse<T>> => {
  try {
    const response = await api({
      method,
      url,
      data: body ? body : undefined,
    });

    if ("error" in response.data) {
      if (response.data.error) {
        return { data: null as unknown as T, error: response.data.error };
      }
    }

    return { data: response.data }; 
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.data && "error" in error.response.data) {
        return {
          data: error.response.data as T,
          error: error.response.data.error,
        };
      }
      return { data: null as unknown as T, error: "Erro na requisição" };
    }
    throw new Error("Erro na requisição");
  }
};
