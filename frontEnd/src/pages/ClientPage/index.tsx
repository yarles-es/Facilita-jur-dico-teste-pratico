import { useEffect, useState } from "react";
import { Client } from "../../../types/Client";
import { getClients } from "../../../service/client.api";
import styles from "./ClientsPage.module.css";
import Navbar from "../../components/NavBar";
import Modal from "../../components/Modal";
import ClienteForm from "../../components/ClientForm";

const ClientsPage = () => {
  const [clientes, setClientes] = useState<Client[]>([]);
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalRoute, setModalRoute] = useState<boolean>(false);

  useEffect(() => {
    const getClientes = async () => {
      const allClients = await getClients();
      setClientes(allClients);
    };

    getClientes();
  }, []);

  const onCloseAndRefresh = () => {
    setModalCreate(false);
    getClients().then((data) => setClientes(data));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Clientes</h2>
      <Navbar
        modalCreate={modalCreate}
        setModalCreate={setModalCreate}
        modalRoute={modalRoute}
        setModalRoute={setModalRoute}
      />
      <ul className={styles.list}>
        {clientes.map((cliente) => (
          <li key={cliente.id} className={styles.listItem}>
            {cliente.name} - {cliente.email}
          </li>
        ))}
      </ul>

      {modalCreate && (
        <Modal onClose={() => setModalCreate(false)}>
          <ClienteForm onClose={onCloseAndRefresh} />
        </Modal>
      )}
    </div>
  );
};

export default ClientsPage;
