import { Client } from "../../../types/Client";
import styles from "./style.module.css";
import { useState } from "react";

type Props = {
  clients: Client[];
};

const Table = ({ clients }: Props) => {
  const [filter, setFilter] = useState({
    name: "",
    email: "",
    phone: "",
    coord_x: "",
    coord_y: "",
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredClients = clients.filter((client) => {
    return (
      client.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      client.email.toLowerCase().includes(filter.email.toLowerCase()) &&
      client.phone.includes(filter.phone) &&
      client.coord_x.toString().includes(filter.coord_x) &&
      client.coord_y.toString().includes(filter.coord_y)
    );
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Coordenada X</th>
          <th>Coordenada Y</th>
        </tr>
        {clients.length > 0 && (
          <tr>
            <th>
              <input
                type="text"
                name="name"
                value={filter.name}
                onChange={handleFilterChange}
                placeholder="Filtrar por Nome"
                className={styles.filterInput}
              />
            </th>
            <th>
              <input
                type="text"
                name="email"
                value={filter.email}
                onChange={handleFilterChange}
                placeholder="Filtrar por Email"
                className={styles.filterInput}
              />
            </th>
            <th>
              <input
                type="text"
                name="phone"
                value={filter.phone}
                onChange={handleFilterChange}
                placeholder="Filtrar por Telefone"
                className={styles.filterInput}
              />
            </th>
            <th>
              <input
                type="text"
                name="coord_x"
                value={filter.coord_x}
                onChange={handleFilterChange}
                placeholder="Filtrar por Coordenada X"
                className={styles.filterInput}
              />
            </th>
            <th>
              <input
                type="text"
                name="coord_y"
                value={filter.coord_y}
                onChange={handleFilterChange}
                placeholder="Filtrar por Coordenada Y"
                className={styles.filterInput}
              />
            </th>
          </tr>
        )}
      </thead>
      <tbody>
        {filteredClients.map((client) => (
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>{client.coord_x}</td>
            <td>{client.coord_y}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
