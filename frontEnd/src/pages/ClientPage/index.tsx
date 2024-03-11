import { useEffect, useState } from "react";
import { Client } from "../../../types/Client";
import { getClients } from "../../../service/client.api";
import styles from "./style.module.css";
import Navbar from "../../components/NavBar";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import ViewRoutes from "../../components/ViewRoutes";
import Table from "../../components/Table";

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
      <Table clients={clientes} />

      {modalCreate && (
        <Modal onClose={() => setModalCreate(false)}>
          <Form onClose={onCloseAndRefresh} />
        </Modal>
      )}

      {modalRoute && (
        <Modal onClose={() => setModalRoute(false)}>
          <ViewRoutes />
        </Modal>
      )}
    </div>
  );
};

export default ClientsPage;
