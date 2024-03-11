import { Client } from "../../../types/Client";
import styles from "./style.module.css";

type Props = {
  clients: Client[];
};

const Table = ({ clients }: Props) => {
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
      </thead>
      <tbody>
        {clients.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.name}</td>
            <td>{cliente.email}</td>
            <td>{cliente.phone}</td>
            <td>{cliente.coord_x}</td>
            <td>{cliente.coord_y}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
