import { useEffect, useState } from "react";
import { Client } from "../../../types/Client";
import { getClients } from "../../../service/client.api";
import styles from "./ClientsPage.module.css";
import Navbar from "../../components/NavBar";

const ClientsPage = () => {
  const [clientes, setClientes] = useState<Client[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    const getClientes = async () => {
      const allClients = await getClients();
      setClientes(allClients);
    };

    getClientes();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Clientes</h2>
      <Navbar modal={modal} setModal={setModal} />
      <ul className={styles.list}>
        {clientes.map((cliente) => (
          <li key={cliente.id} className={styles.listItem}>
            {cliente.name} - {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
