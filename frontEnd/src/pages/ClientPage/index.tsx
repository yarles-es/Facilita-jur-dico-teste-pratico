import { useEffect, useState } from "react";
import { Client } from "../../../types/Client";
import { getClients } from "../../../service/client.api";
import styles from "./style.module.css";
import Navbar from "../../components/NavBar";
import Modal from "../../components/Modal";
import Form from "../../components/Form";

const ClientsPage = () => {
  const [clientes, setClientes] = useState<Client[]>([]);
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalRoute, setModalRoute] = useState<boolean>(false);

  useEffect(() => {
    const getClientes = async () => {
      const allClients = await getClients();
      if (allClients.error) {
        alert(allClients.error);
        return;
      }
      setClientes(allClients.data);
    };

    getClientes();
  }, []);

  const onCloseAndRefresh = async () => {
    setModalCreate(false);
    const allClients = await getClients();
    if (allClients.error) {
      alert(allClients.error);
      return;
    }
    setClientes(allClients.data);
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
          <Form onClose={onCloseAndRefresh} />
        </Modal>
      )}
    </div>
  );
};

export default ClientsPage;
