import { Client } from "../types/Client";
import { SuccessResponse } from "../types/ResponseClient";
import { genericRequest } from "./genericRequest";

export const getClients = async () => {
  return await genericRequest<SuccessResponse<Client[]>>("get", "clients");
};

export const createClient = async (client: Omit<Client, "id">) => {
  return await genericRequest<SuccessResponse<Client>>("post", "clients", {
    ...client,
  });
};

export const getDeliverCalculatedRoute = async () => {
  return await genericRequest<SuccessResponse<Client>>(
    "get",
    "clients/deliver-calculated-routes"
  );
};
