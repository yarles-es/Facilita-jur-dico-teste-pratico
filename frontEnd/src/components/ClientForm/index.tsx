import { FormEvent, useState } from "react";
import styles from "./ClientForm.module.css";
import { Client } from "../../../types/Client";
import { createClient } from "../../../service/client.api";

type ClienteFormProps = {
  onClose: () => void;
};

const ClienteForm: React.FC<ClienteFormProps> = ({ onClose }) => {
  const [client, setCliente] = useState<Omit<Client, "id">>({
    name: "",
    email: "",
    phone: "",
    coord_x: "",
    coord_y: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCliente({ ...client, [name]: value });
  };

  const validateForm = () => {
    if (
      !client.name ||
      !client.email ||
      !client.phone ||
      !client.coord_x ||
      !client.coord_y
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Preencha todos os campos");
      return;
    }
    const payload = {
      ...client,
      coord_x: Number(client.coord_x),
      coord_y: Number(client.coord_y),
    };

    const newClient = await createClient(payload);
    if (newClient.error) {
      alert(newClient.error);
      return;
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label className={styles.label}>Nome:</label>
        <input
          type="text"
          name="name"
          className={styles.input}
          value={client.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          className={styles.input}
          value={client.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className={styles.label}>Telefone:</label>
        <input
          type="text"
          name="phone"
          className={styles.input}
          value={client.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className={styles.label}>Coordenada Y:</label>
        <input
          type="number"
          name="coord_y"
          className={styles.input}
          value={client.coord_y}
          onChange={handleChange}
        />
      </div>

      <div>
        {" "}
        <label className={styles.label}>Coordenada X:</label>
        <input
          type="number"
          name="coord_x"
          className={styles.input}
          value={client.coord_x}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={`${styles.button} ${styles.buttonSave}`}>
        Salvar
      </button>
      <button
        type="button"
        onClick={onClose}
        className={`${styles.button} ${styles.buttonCancel}`}
      >
        Cancelar
      </button>
    </form>
  );
};

export default ClienteForm;
