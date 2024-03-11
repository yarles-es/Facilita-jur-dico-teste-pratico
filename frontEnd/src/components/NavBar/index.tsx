import styles from "./Navbar.module.css";

type Props = {
  modalCreate: boolean;
  modalRoute: boolean;
  setModalCreate: (modal: boolean) => void;
  setModalRoute: (modal: boolean) => void;
};

const Navbar: React.FC<Props> = ({
  modalCreate,
  modalRoute,
  setModalCreate,
  setModalRoute,
}) => {
  return (
    <div className={styles.navbar}>
      <span onClick={() => setModalCreate(!modalCreate)} className={styles.navLink}>
        Criar Novo Cliente
      </span>
      <span
        onClick={() => setModalRoute(!modalRoute)}
        className={styles.navLink}
      >
        Visualizar melhor rota
      </span>
    </div>
  );
};

export default Navbar;
