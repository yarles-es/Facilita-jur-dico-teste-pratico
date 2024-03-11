import axios from "axios";
import api from "./api";

export const genericRequest = async <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  body?: unknown
): Promise<T> => {
  try {
    const response = await api({
      method,
      url,
      data: body ? body : undefined,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    throw new Error("Erro na requisição");
  }
};
