import { Client } from "../types/Client";
import { genericRequest } from "./genericRequest";

export const getClients = async () => {
  return await genericRequest<Client[]>("get", "clients");
};

export const createClient = async (client: Omit<Client, "id">) => {
  return await genericRequest<Client>("post", "clients", {
    ...client,
  });
};

export const getDeliverCalculatedRoute = async () => {
  return await genericRequest<Client[]>(
    "get",
    "clients/deliver-calculated-routes"
  );
};
