import { useEffect, useState } from "react";
import { getDeliverCalculatedRoute } from "../../../service/client.api";
import { Client } from "../../../types/Client";
import Table from "../Table";
import style from "./style.module.css";

const ViewRoutes = () => {
  const [routes, setRoutes] = useState<Client[]>([]);

  useEffect(() => {
    const getRoutes = async () => {
      const allClients = await getDeliverCalculatedRoute();
      if (allClients.error) {
        alert(allClients.error);

        return;
      }
      setRoutes(allClients.data);
    };

    getRoutes();
  }, []);

  return (
    <div>
      <h1 className={style.header}>Ordem de melhor rota</h1>
      <Table clients={routes} />
    </div>
  );
};

export default ViewRoutes;
